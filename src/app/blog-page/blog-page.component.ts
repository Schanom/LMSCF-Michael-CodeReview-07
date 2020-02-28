import { Component, OnInit } from '@angular/core';
import { blogs } from '../blog';

@Component({
  selector: 'blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
	 blogs = blogs;
  constructor() { }

  ngOnInit(): void {
  }
}
