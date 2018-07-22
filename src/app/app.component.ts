import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { AuthService } from '@app/core/auth.service';
import { User } from '@app/shared';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  items: Observable<any[]>;
  user:User;

  constructor(private authService: AuthService){
  }

  ngOnInit(){
    this.authService.user$.subscribe(user => {
      this.user = user;
    })
  }

  login() {
    this.authService.googleLogin();
  }
  logout() {
    this.authService.signOut();
  }
}
