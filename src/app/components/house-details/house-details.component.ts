import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss']
})
export class HouseDetailsComponent implements OnInit {
  form!: FormGroup;


  constructor(private readonly fb: FormBuilder,) {
    this.createForm();
   }

  createForm() {
    this.form = this.fb.group({
      dateTo: ['', Validators.required],
      dateFrom: ['', Validators.required],
      nbPerson: ['', [Validators.required, Validators.min(1)]],
      nbChildren: [''],
    });
  }

  ngOnInit(): void {
  }

}
