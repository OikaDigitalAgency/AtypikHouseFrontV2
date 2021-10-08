import { Component, OnInit, Input } from '@angular/core';
import { HousesService } from 'src/app/services/houses.service';
import { ActivatedRoute } from '@angular/router';
import { IHousesEntity } from 'src/app/models/houses';


@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss'],
})
export class HouseDetailsComponent implements OnInit {

  
  

  constructor(private readonly housesService: HousesService, private readonly route: ActivatedRoute) {
    
   }


   house!: IHousesEntity;

  ngOnInit(): void {

    let id = +this.route.snapshot.params.id;
    this.housesService.getHouse(id).subscribe((house: IHousesEntity) => {
      this.house = house
    });
  }

}