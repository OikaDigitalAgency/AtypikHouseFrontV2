import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { IRegisterHouses } from 'src/app/models/houses';
import { IRegisterFile } from 'src/app/models/file';
import { HousesService } from 'src/app/services/houses.service';
import { ActivatedRoute } from '@angular/router';


export interface Activité {
  name: string;
}

@Component({
  selector: 'app-ajout-hebergement-form',
  templateUrl: './ajout-hebergement-form.component.html',
  styleUrls: ['./ajout-hebergement-form.component.scss']
})
export class AjoutHebergementFormComponent implements OnInit {

  responseData1: any;
  responseData2: any;
  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
 // file: File = null; // Variable to store file

  form!: FormGroup;

  // Fonction pour upload une image
  onFileChanged(event: any) {
    const file = event.target.files[0]
  }


  constructor(private readonly fb: FormBuilder,private readonly housesService: HousesService, private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-z\s+a-z+ÖØ-öø-ÿ]+$/i)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
      address: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
      city: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      zipCode: [null, [Validators.required, Validators.pattern(/^[0-9]{5}$/i)]],
      nombreDeLits: ['', [Validators.required, Validators.min(1)]],
      price: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
      tax: [null, [Validators.pattern(/^[0-9]\d*$/)]],
      imagefile: ['', [Validators.required]],
    });
  }

  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  activities: Activité[] = [
    { name: 'TagBasket' },
    { name: 'TagFoot' },
  ];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Ajouter un tag
    if (value) {
      this.activities.push({ name: value });
    }

    // Supprimer la valeur de l'input
    event.chipInput!.clear();
  }

  remove(activity: Activité): void {
    const index = this.activities.indexOf(activity);

    if (index >= 0) {
      this.activities.splice(index, 1);
    }
  }

  

 /* async onSave(formValues: IRegisterHouses, formValues2: IRegisterFile) {
    // Si le form est valide : alors on doit démarrer le stcokage dans la base de données. *
    if (this.form.valid) {
      
      const res1 = await this.housesService.registerHouse(formValues).subscribe((data) => {
        
      }, (error) => { console.log(error) });
      
      let id = Number(this.route.snapshot.params.id);
      const res2 = await this.housesService.registerHouseFile(formValues2, id).subscribe((data) => {
        
        let res =  Promise.all([res1, res2]);
      }, (error) => { console.log(error) });
    }*/

    onSave(formValues: IRegisterHouses,formValues2: IRegisterFile) {
      // Si le form est valide : alors on doit démarrer le stcokage dans la base de données. *
      if (this.form.valid) {
        let id = Number(this.route.snapshot.params.id);
        this.housesService.fromMultipleSources(formValues, formValues2, id).subscribe((responseList) => {
          this.responseData1 = responseList[0];
          this.responseData2 = responseList[1];
        }, (error) => { console.log(error) });
      }
    }    
  }

  

  
    

