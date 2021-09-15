import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ISearch } from 'src/app/models/search';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  form!: FormGroup;

    

  constructor(private readonly fb: FormBuilder, private readonly authService: AuthService) {
    this.createForm();
  }
    // mise en place des validateurs
  createForm() {
    this.form = this.fb.group({
      dateTo: ['', Validators.required ],
      dateFrom: ['', Validators.required ]
    }, {validator: this.dateLessThan('dateFrom', 'dateTo')});
  }
   // vérification des dates arrivée/départ
  dateLessThan(from: string, to: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let f = group.controls[from];
      let t = group.controls[to];
      if (f.value > t.value) {
        // retourne erreur si la date de départ est inférieur à la daye d'arrivée
        return {
          dates: "La date d'arrivée doit etre supérieure à la date de départ"
        };
      }
      return {};
    }
}

  ngOnInit(): void {
    
  }

  onSave(formValues: ISearch) {
    
    if (this.form.valid) {
      this.authService.search(formValues).subscribe((tokenValue) => {
        const token = `Bearer ${tokenValue.token}`;
        sessionStorage.setItem('token', token);
      }, (error) => { console.log(error) });
    }
  }
}