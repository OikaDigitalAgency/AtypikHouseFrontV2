import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BOOKING_END } from 'src/app/donnees/mock-booking-end';
import { BOOKING_START } from 'src/app/donnees/mock-booking-start';
import { IBookingEntity } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss'],
})
export class ReservationsComponent implements OnInit {

  params!: any;

  constructor(private readonly route: ActivatedRoute, private readonly bookingService: BookingService) {
    this.route.params.subscribe(params => {
      this.params = params;
    });
  }

  bookings_end!: IBookingEntity[];
  bookings_start!: IBookingEntity[];

  ngOnInit(): void {
    this.bookings_end = BOOKING_END;
    this.bookings_start = BOOKING_START;
    // this.housesService.searchHouses(this.params.city, this.params.dateFin, this.params.nbbeds).subscribe((houses: IHousesEntity[]) => this.houses = houses);
    // requête ici
  }

}
