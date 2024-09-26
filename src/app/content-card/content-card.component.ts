import {Component, Input, OnInit} from '@angular/core';
interface IContent{
  id:number,
  imageUrl:string,
  body:string,
  type:string
}
@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.css'
})

export class ContentCardComponent  implements OnInit{
  @Input() contentItem!:IContent;

  constructor(){
//called before the ngOnInit
  }

  ngOnInit(): void{
    this.contentItem = {
      id: 0,
      imageUrl:
        'https://angular.io/assets/images/logos/angular/angular.png',
      body: 'This is the body of the content' ,
      type: 'news'
    };
  }

  //private InitializeValues(){}
}
