import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IHousesEntity } from 'src/app/models/houses';
import { HousesService } from 'src/app/services/houses.service';


@Component({
  selector: 'app-page-houses',
  templateUrl: './page-houses.component.html',
  styleUrls: ['./page-houses.component.scss']
})
export class PageHousesComponent implements OnInit {
  params!: any;

  constructor(private readonly route: ActivatedRoute, private readonly housesService: HousesService, private readonly router: Router) {
    this.route.params.subscribe(params => {
      this.params = params;
    });
  }

  houses!: IHousesEntity[];

  ngOnInit(): void {

    
    this.housesService.searchHouses(this.params.city, this.params.dateFin, this.params.nbbeds).subscribe((houses: IHousesEntity[]) => {
      this.houses = houses
    });
    
    this.housesService.getAllHouses().subscribe((houses: IHousesEntity[]) => {
      this.houses = houses
    });
    

  }

/*Permet de selectionner une house pour aller sur la page détaillé*/ 
  selectHouse(houses: IHousesEntity){
    console.log("C'est la house " + houses.id);
    // proprieter du lien 
    let link = ['/house', houses.id];
    this.router.navigate(link);
  }

}
