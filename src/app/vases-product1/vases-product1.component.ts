import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

export class VasesAdvancedProductDetails{
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

  constructor(id:number,title:string,mainPhoto: string,secondTitle: string,paragraph:string, pic1:string,header1:string,paragraph1:string,pic2:string,header2:string,paragraph2:string) {
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
  }
}


@Component({
  selector: 'app-vases-product1',
  templateUrl: './vases-product1.component.html',
  styleUrls: ['./vases-product1.component.css']
})
export class VasesProduct1Component implements OnInit {
  userID: any;
  VasesAdvancedProductDetailsArr: VasesAdvancedProductDetails[];
  constructor(private activatedRoute : ActivatedRoute) {
      this.activatedRoute.paramMap.subscribe(params => this.userID = params.get("id"));
      this.VasesAdvancedProductDetailsArr = [
        new VasesAdvancedProductDetails(
        0,
        'A bowl for candys',
        '../../assets/images/Products/vase/CandyProductMainPhoto.jpg',
        'A bowl for candys with squer surface',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremest quos maiores veniam nihil. Repellat fugiat quam tenetur eiusimpedit, blanditiis facere nam ratione saepe rem nostrum harumnecessitatibus!',
        '../../assets/images/Products/vase/CandyProduct1Photo.jpg',
        'top View',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Perspiciatis pariatur optio expedita facilis earum aspernaturmolestias hic est, explicabo commodi debitis eos id, dignissimos quoquibusdam quaerat adipisci. Id, suscipit?',
        '../../assets/images/Products/vase/CandyProduct2Photo.jpg',
        'Angel View',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliasfuga deleniti placeat corporis laudantium, odit id, voluptastemporibus officia, eius repudiandae quae voluptatum consequunturtempore? Nesciunt adipisci mollitia nam.'
      ),
        new VasesAdvancedProductDetails(
        1,
        'Small vase for flower',
        '../../assets/images/Products/vase/FlowerProductMainPhoto.jpg',
        'Small vase for flower with rose',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremest quos maiores veniam nihil. Repellat fugiat quam tenetur eiusimpedit, blanditiis facere nam ratione saepe rem nostrum harumnecessitatibus!',
        '../../assets/images/Products/vase/FlowerProduct1Photo.jpg',
        'Just vase View',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Perspiciatis pariatur optio expedita facilis earum aspernaturmolestias hic est, explicabo commodi debitis eos id, dignissimos quoquibusdam quaerat adipisci. Id, suscipit?',
        '../../assets/images/Products/vase/FlowerProduct2Photo.jpg',
        'With flower view',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliasfuga deleniti placeat corporis laudantium, odit id, voluptastemporibus officia, eius repudiandae quae voluptatum consequunturtempore? Nesciunt adipisci mollitia nam.',
        
      ),
        new VasesAdvancedProductDetails(
        2,
        'A bowl for nuts',
        '../../assets/images/Products/vase/NutsProductMainPhoto.jpg',
        'A bowl for nuts made from Indian rosehip',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremest quos maiores veniam nihil. Repellat fugiat quam tenetur eiusimpedit, blanditiis facere nam ratione saepe rem nostrum harumnecessitatibus!',
        '../../assets/images/Products/vase/NutsProduct1Photo.jpg',
        'Top View',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Perspiciatis pariatur optio expedita facilis earum aspernaturmolestias hic est, explicabo commodi debitis eos id, dignissimos quoquibusdam quaerat adipisci. Id, suscipit?',
        '../../assets/images/Products/vase/NutsProduct2Photo.jpg',
        'Back View',
        'paragLorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliasfuga deleniti placeat corporis laudantium, odit id, voluptastemporibus officia, eius repudiandae quae voluptatum consequunturtempore? Nesciunt adipisci mollitia nam.raph2'
      ),
        new VasesAdvancedProductDetails(
        3,
        'Spice crushing bowl',
        '../../assets/images/Products/vase/SpiceProductMainPhoto.jpg',
        'Spice crushing bowl Inspired by a pine tree',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremest quos maiores veniam nihil. Repellat fugiat quam tenetur eiusimpedit, blanditiis facere nam ratione saepe rem nostrum harumnecessitatibus!',
        '../../assets/images/Products/vase/SpiceProduct1Photo.jpg',
        'Front View',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Perspiciatis pariatur optio expedita facilis earum aspernaturmolestias hic est, explicabo commodi debitis eos id, dignissimos quoquibusdam quaerat adipisci. Id, suscipit?',
        '../../assets/images/Products/vase/SpiceProduct2Photo.jpg',
        'Back View',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliasfuga deleniti placeat corporis laudantium, odit id, voluptastemporibus officia, eius repudiandae quae voluptatum consequunturtempore? Nesciunt adipisci mollitia nam.'
      ),
    ]
  }

  ngOnInit(): void {
  }

}
