import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sculptures',
  templateUrl: './sculptures.component.html',
  styleUrls: ['./sculptures.component.css']
})
export class SculpturesComponent implements OnInit {
  userID: any;
  constructor( private activatedRoute : ActivatedRoute ){
    this.activatedRoute.paramMap.subscribe(params => this.userID = params.get("id"));
  }


  ngOnInit(): void {
  }

}
