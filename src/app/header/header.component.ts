import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hello = '';

  // tslint:disable-next-line:typedef
  onPost(post){
    this.hello = post.value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
