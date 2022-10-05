import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vases',
  templateUrl: './vases.component.html',
  styleUrls: ['./vases.component.css']
})
export class VasesComponent implements OnInit {
  userID: any;
  constructor( private activatedRoute : ActivatedRoute ){
    this.activatedRoute.paramMap.subscribe(params => this.userID = params.get("id"));
  }

  ngOnInit(): void {
  }

}
