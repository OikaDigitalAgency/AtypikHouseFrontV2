import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { IRegisterHouses } from 'src/app/models/houses';
import { IRegisterFile } from 'src/app/models/file';
import { HousesService } from 'src/app/services/houses.service';

export interface Activité {
  name: string;
}

@Component({
  selector: 'app-ajout-hebergement-form',
  templateUrl: './ajout-hebergement-form.component.html',
  styleUrls: ['./ajout-hebergement-form.component.scss']
})
export class AjoutHebergementFormComponent implements OnInit {
  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
 // file: File = null; // Variable to store file

  form!: FormGroup;

  // Fonction pour upload une image
  onFileChanged(event: any) {
    const file = event.target.files[0]
  }


  constructor(private readonly fb: FormBuilder,private readonly housesService: HousesService) { }

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

  /*onSave(formValues: IRegisterHouses) {
    this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {
          // Short link via api response
          this.shortLink = event.link;
          this.loading = false; // Flag variable
        }
        // Si le form est valide : alors on doit démarrer le stcokage dans la base de données. *
        if (this.form.valid) {
          this.housesService.registerHouse(formValues).subscribe((data) => {

          }, (error) => { console.log(error) });
        }
      }
    }
  }*/
}
