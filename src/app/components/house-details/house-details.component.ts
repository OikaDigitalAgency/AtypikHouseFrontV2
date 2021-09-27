import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HousesService } from 'src/app/services/houses.service';
import { IHousesEntity } from 'src/app/models/houses';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss'],
  providers: [HousesService]
})
export class HouseDetailsComponent implements OnInit {
  @Input() house!: IHousesEntity;
  form!: FormGroup;


  constructor(private readonly fb: FormBuilder) {
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
