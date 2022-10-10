import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdvancedProductDetails } from './products.model';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  userID: any;
  price: any;
  
  
  AdvancedProductDetailsArr: AdvancedProductDetails[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => this.userID = params.get("id"));
    this.AdvancedProductDetailsArr = [
      new AdvancedProductDetails(
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
        500
      ),
      new AdvancedProductDetails(
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
        120
      ),
      new AdvancedProductDetails(
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
        890
      ),
      new AdvancedProductDetails(
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
        650
      ),
      new AdvancedProductDetails(
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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliasfuga deleniti placeat corporis laudantium, odit id, voluptastemporibus officia, eius repudiandae quae voluptatum consequunturtempore? Nesciunt adipisci mollitia nam.',
        524
      ),
        new AdvancedProductDetails(
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
        684
      ),
        new AdvancedProductDetails(
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
          'paragLorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliasfuga deleniti placeat corporis laudantium, odit id, voluptastemporibus officia, eius repudiandae quae voluptatum consequunturtempore? Nesciunt adipisci mollitia nam.raph2',
        580
      ),
        new AdvancedProductDetails(
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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliasfuga deleniti placeat corporis laudantium, odit id, voluptastemporibus officia, eius repudiandae quae voluptatum consequunturtempore? Nesciunt adipisci mollitia nam.',
        360
      ),
    ]
  }

  ngOnInit(): void {
    
  }


}
