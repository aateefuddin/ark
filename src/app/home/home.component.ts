import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Response:any;
  doctors:any[] = []


  constructor(private apiservice:ApiService, config : IvyCarouselModule ) { }

  ngOnInit(): void {

  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }



}
