export class AdvancedProductDetails{
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