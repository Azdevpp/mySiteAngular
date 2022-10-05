import { Component, OnInit } from '@angular/core';

export class VasesAdvancedProductDetails{
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

  constructor(title:string,mainPhoto: string,secondTitle: string,paragraph:string, pic1:string,header1:string,paragraph1:string,pic2:string,header2:string,paragraph2:string) {
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
  selector: 'app-vases-product4',
  templateUrl: './vases-product4.component.html',
  styleUrls: ['./vases-product4.component.css']
})
export class VasesProduct4Component implements OnInit {

  VasesAdvancedProductDetailsArr: VasesAdvancedProductDetails[];
  constructor() {
    
      this.VasesAdvancedProductDetailsArr = [
      new VasesAdvancedProductDetails(
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
        'Small vase for flower',
        '../../assets/images/Products/vase/FlowerProductMainPhoto.jpg',
        'Small vase for flower with rose',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremest quos maiores veniam nihil. Repellat fugiat quam tenetur eiusimpedit, blanditiis facere nam ratione saepe rem nostrum harumnecessitatibus!',
        '../../assets/images/Products/vase/FlowerProduct1Photo.jpg',
        'Just vase View',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Perspiciatis pariatur optio expedita facilis earum aspernaturmolestias hic est, explicabo commodi debitis eos id, dignissimos quoquibusdam quaerat adipisci. Id, suscipit?',
        'With flower view',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliasfuga deleniti placeat corporis laudantium, odit id, voluptastemporibus officia, eius repudiandae quae voluptatum consequunturtempore? Nesciunt adipisci mollitia nam.',
        '../../assets/images/Products/vase/FlowerProduct2Photo.jpg'
      ),
      new VasesAdvancedProductDetails(
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
