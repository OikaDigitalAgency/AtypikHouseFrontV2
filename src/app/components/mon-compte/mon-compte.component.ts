import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { IUserEntity } from 'src/app/models/register';
import { IRegister } from 'src/app/models/register';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';



@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.scss'],
  providers: [AuthService]

  
})
export class MonCompteComponent implements OnInit {
  form!: FormGroup;

  user: any;

  constructor(private readonly fb: FormBuilder, private readonly authService: AuthService, private readonly router: Router, private readonly route: ActivatedRoute ) { 
    this.user = [];
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.email]],
      firstName: ['', [Validators.minLength(2), Validators.pattern(/^[a-z\s+a-z+ÖØ-öø-ÿ]+$/i)]],
      lastName: ['', [Validators.minLength(2), Validators.pattern(/^[a-z\s+a-z+ÖØ-öø-ÿ]+$/i)]],
      address: ['', [Validators.minLength(5), Validators.maxLength(255)]],
      city: ['', [Validators.minLength(2), Validators.maxLength(255)]],
      zipCode: [null, [Validators.pattern(/^[0-9]{5}$/i)]],
      phoneNumber: [null, [Validators.pattern(/^[0-9]{10}$/i)]],
      password: [''],
      confirmPassword: [''],
      
    }, { validators: confirmationPassword() });

    /*let id = +this.route.snapshot.params.id;
    this.authService.getUser(id).subscribe(data : any) => {
      this.user=data;
    }*/
  }

  onSave(formValues: IRegister) {
    // Si le form est valide : alors on doit démarrer le stcokage dans la base de données. *
    if (this.form.valid) {
      let id = +this.route.snapshot.params.id;
      this.authService.update(formValues, id).subscribe((data) => {
        this.router.navigate(['/home']);
      }, (error) => { console.log(error) });
    }
  }
}

  /** Permet de vérifier que le password et le confirmPassword sont identiques */
export function confirmationPassword(): ValidatorFn {
  return (form: AbstractControl): ValidationErrors | null => {
    // Si password ET confirmPassword est identique, alors on envoie un objet d'erreur, sinon on renvoie null
    return form.get('password')?.value !== form.get('confirmPassword')?.value ? {
      confirmationPassword:
      {
        password: form.get('password')?.value,
        confirmPassword: form.get('confirmPassword')?.value
      }
    } : null;
  };
}




