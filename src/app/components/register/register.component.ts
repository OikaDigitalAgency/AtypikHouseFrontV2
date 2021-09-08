import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
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
      city: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]],
      zipCode: ['',[Validators.required, Validators.pattern(/^[0-9]{5}$/i)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/i)]],
      password: ['', [Validators.required]], 
      confirmPassword: ['', [Validators.required]],
    });
  }

  // Custom Validator pour customPassword ... 

 
}