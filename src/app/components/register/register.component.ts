import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
//import { ValidatePassword } from 'src/app/must-match/validate-password';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  
  constructor(private fb: FormBuilder){}

  
  ngOnInit(): void {
  
    // On génère le formulaire, via le formBuilder
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-z\s+a-z+ÖØ-öø-ÿ]+$/i)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-z\s+a-z+ÖØ-öø-ÿ]+$/i)]],
      address: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
      city: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      zipCode: ['',[Validators.required, Validators.pattern(/^[0-9]{5}$/i)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/i)]],
      password: ['', [Validators.required]], 
      confirmPassword: ['', [Validators.required]],
    });
    /*{
      validator: ValidatePassword.MatchPassword // your validation method
    }*/
  }

// Pour que le bouton soit actif quand le formulaire est remplis, sinon non actif 
  onSave(event?: MouseEvent) {
    const evtMsg = event ? ' Event target is ' + (event.target as HTMLElement).textContent : '';
    alert('Envoyé' + evtMsg);
    if (event) { event.stopPropagation(); }
  }


  // Custom Validator pour customPassword ... 

  

 
}