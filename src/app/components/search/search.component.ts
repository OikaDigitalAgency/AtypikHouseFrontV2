import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  form!: FormGroup;


  constructor(private readonly fb: FormBuilder,) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      dateFrom: ['', [Validators.required]],
      dateTo: ['', [Validators.required]],
      nbPerson: ['', [Validators.required]],
      nbChildren: ['', [Validators.required]],
    });
  }
}