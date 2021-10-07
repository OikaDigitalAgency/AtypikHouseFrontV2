import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.scss'],
  providers: [UserService]

  
})
export class MonCompteComponent implements OnInit {
  

  user: any;

  constructor(private readonly userService: UserService, private readonly router: Router, 
    private readonly route: ActivatedRoute) {}
  

  ngOnInit(): void {

    this.getUser();

  }

  getUser(): void {
    let id = +this.route.snapshot.params.id;
    this.userService.getUser(id).subscribe(user => this.user = user);
  }

}

  




