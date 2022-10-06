import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import{VasesAdvancedProductDetails}from '../vases/vases.model'



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
