import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/user';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})


export class FormContactComponent implements OnInit {
  
  /*Données fictif dans le formulaire */
  model = new User(1, 'vilcoque', 'quentin' , 'test@gmail.com', 'voici mon message');

 
  submitted = false;

  onSubmit() { this.submitted = true; }
 

  constructor() { }

  ngOnInit(): void {
  }

  

}



