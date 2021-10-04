import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router,ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.scss'],
  providers: [AuthService]

  
})
export class MonCompteComponent implements OnInit {
  

  user: any;

  constructor(private readonly authService: AuthService, private readonly router: Router, 
    private readonly route: ActivatedRoute) {}
  

  ngOnInit(): void {

    this.getUser();

  }

   getTokenUser(): void {
     /*let id = +this.route.snapshot.params.id;
     this.authService.getUser(id).subscribe(user => this.user = user);*/

     if (this.user) {
      let id = +this.route.snapshot.params.id;
      this.authService.getUser(id).subscribe((tokenValue)  => {
        const token = `Bearer ${tokenValue.token}`;
    
        sessionStorage.setItem('token', token)
      }, (error) => { console.log(error) });
    } 
  }

  getUser(): void {
    /*let id = +this.route.snapshot.params.id;
    this.authService.getUser(id).subscribe(user => this.user = user);*/


     let id = +this.route.snapshot.params.id;
     this.authService.getUser(id).subscribe((tokenValue) => {
       const token = `Bearer ${tokenValue.token}`;
   
       sessionStorage.setItem('token', token)
       
       return this.authService.getUser(id).subscribe(user => this.user = user);

     }, (error) => { console.log(error) })
    
 } 

}

  




