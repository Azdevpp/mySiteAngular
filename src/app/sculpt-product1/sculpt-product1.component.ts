import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';


export class SculptAdvancedProductDetails{
  id: number;
  title: string;
  mainPhoto: string;
  secondTitle: string;
  paragraph: string;
  pic1: string;
  header1: string;
  paragraph1: string;
  pic2: string;
  header2: string;
  paragraph2: string;
  cost: number;

  constructor(id:number,title:string,mainPhoto: string,secondTitle: string,paragraph:string, pic1:string,header1:string,paragraph1:string,pic2:string,header2:string,paragraph2:string,cost: number) {
    this.id = id;
    this.title = title;
    this.mainPhoto = mainPhoto;
    this.secondTitle = secondTitle;
    this.paragraph = paragraph;
    this.pic1 = pic1;
    this.header1 = header1;
    this.paragraph1 = paragraph1;
    this.pic2 = pic2;
    this.header2 = header2;
    this.paragraph2 = paragraph2;
    this.cost = cost;
  }
}

@Component({
  selector: 'app-sculpt-product1',
  templateUrl: './sculpt-product1.component.html',
  styleUrls: ['./sculpt-product1.component.css']
})
export class SculptProduct1Component implements OnInit {
  userID : any;

  SculptAdvancedProductDetailsArr: SculptAdvancedProductDetails[];
  constructor(private activatedRoute : ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => this.userID = params.get("id"));
    this.SculptAdvancedProductDetailsArr = [
      new SculptAdvancedProductDetails(
        0,
        'Napkin and wine dispenser',
        '../../assets/images/Products/sculpts/NapkinProductMainPhoto.jpg',
        'Napkin and wine dispenser for dining table',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremest quos maiores veniam nihil. Repellat fugiat quam tenetur eiusimpedit blanditiis facere nam ratione saepe rem nostrum harumnecessitatibus',
        '../../assets/images/Products/sculpts/NapkinProduct1Photo.jpg',
        'Front View',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Perspiciatis pariatur optio expedita facilis earum aspernaturmolestias hic est, explicabo commodi debitis eos id, dignissimos quoquibusdam quaerat adipisci. Id, suscipit?',
        '../../assets/images/Products/sculpts/NapkinProduct2Photo.jpg',
        'Back View',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliasfuga deleniti placeat corporis laudantium, odit id, voluptastemporibus officia, eius repudiandae quae voluptatum consequunturtempore? Nesciunt adipisci mollitia nam.',
        50000
      ),
      new SculptAdvancedProductDetails(
        1,
        'A whiskey stand and two glasses',
        '../../assets/images/Products/sculpts/WiskiProductMainPhoto.jpg',
        'A whiskey stand and two glasses',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremest quos maiores veniam nihil. Repellat fugiat quam tenetur eiusimpedit, blanditiis facere nam ratione saepe rem nostrum harum',
        '../../assets/images/Products/sculpts/WiskiProduct1Photo.jpg',
        'Front View',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Perspiciatis pariatur optio expedita facilis earum aspernaturmolestias hic est, explicabo commodi debitis eos id, dignissimos quoquibusdam quaerat adipisci. Id, suscipit?',
        '../../assets/images/Products/sculpts/WiskiProduct2Photo.jpg',
        'Back View',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliasfuga deleniti placeat corporis laudantium, odit id, voluptastemporibus officia, eius repudiandae quae voluptatum consequunturtempore? Nesciunt adipisci mollitia nam.',
        120000
      ),
      new SculptAdvancedProductDetails(
        2,
        'A hand emerging from an open book and holding a snake',
        '../../assets/images/Products/sculpts/HandProductMainPhoto.jpg',
        'A hand emerging from an open book and holding a snake',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremest quos maiores veniam nihil. Repellat fugiat quam tenetur eiusimpedit, blanditiis facere nam ratione saepe rem nostrum harumnecessitatibus!',
        '../../assets/images/Products/sculpts/HandProduct1Photo.jpg',
        'Front View',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Perspiciatis pariatur optio expedita facilis earum aspernaturmolestias hic est, explicabo commodi debitis eos id, dignissimos quoquibusdam quaerat adipisci. Id, suscipit?',
        '../../assets/images/Products/sculpts/HandProduct2Photo.jpg',
        'Back View',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliasfuga deleniti placeat corporis laudantium, odit id, voluptastemporibus officia, eius repudiandae quae voluptatum consequunturtempore? Nesciunt adipisci mollitia nam.',
        89000
      ),
      new SculptAdvancedProductDetails(
        3,
        'Botom jaw and Tongue',
        '../../assets/images/Products/sculpts/TongueProductMainPhoto.jpg',
        'Tongue and lower jaw with inscription',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremest quos maiores veniam nihil. Repellat fugiat quam tenetur eiusimpedit, blanditiis facere nam ratione saepe rem nostrum harumnecessitatibus!',
        '../../assets/images/Products/sculpts/TongueProduct1Photo.jpg',
        'Front View',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Perspiciatis pariatur optio expedita facilis earum aspernaturmolestias hic est, explicabo commodi debitis eos id, dignissimos quoquibusdam quaerat adipisci. Id, suscipit?',
        '../../assets/images/Products/sculpts/TongueProduct2Photo.jpg',
        'Back View',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliasfuga deleniti placeat corporis laudantium, odit id, voluptastemporibus officia, eius repudiandae quae voluptatum consequunturtempore? Nesciunt adipisci mollitia nam.',
        650000
      ),
    ]
  }

  ngOnInit(): void {
  }

}
