import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IRegister } from 'src/app/models/register';
import { AuthService } from 'src/app/services/auth.service';
//import { ValidatePassword } from 'src/app/must-match/validate-password';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  
  constructor(private readonly fb: FormBuilder, private readonly authService: AuthService, private readonly router:Router){}

  
  ngOnInit(): void {
  
    // On génère le formulaire, via le formBuilder
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-z\s+a-z+ÖØ-öø-ÿ]+$/i)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-z\s+a-z+ÖØ-öø-ÿ]+$/i)]],
      address: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
      city: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      zipCode: [null,[Validators.required, Validators.pattern(/^[0-9]{5}$/i)]],
      phoneNumber: [null, [Validators.required, Validators.pattern(/^[0-9]{10}$/i)]],
      password: ['', [Validators.required]], 
      confirmPassword: ['', [Validators.required]],
      cgu: [null, [Validators.requiredTrue]],
    });
  }

  onSave(formValues: IRegister) {
    // Si le form est valide : alors on doit démarrer le stcokage dans la base de données. *
    if(this.form.valid) {
      this.authService.register(formValues).subscribe((data) => {
        this.router.navigate(['/home']);
      }, (error) => {console.log(error)} );
    } 
  }


  // Custom Validator pour customPassword ... 

  

 
}