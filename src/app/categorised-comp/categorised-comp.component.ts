import { Component, OnInit } from '@angular/core';
import {CategorisedCompService } from './categorised-comp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorised-comp',
  templateUrl: './categorised-comp.component.html',
  styleUrls: ['./categorised-comp.component.css']
})
export class CategorisedCompComponent implements OnInit {
  private groupedData: any[];
  private booksListByCategory;
  private booksDetails: any[];

  constructor(private categorisedCompService : CategorisedCompService , private router : Router) { }

  ngOnInit() {
    this.getBooksDetails();
  }

  getBooksDetails() {
    this.categorisedCompService.getBooksDetails().subscribe((data : any)=> {
      this.booksDetails = data.results
      if(data && this.booksDetails){
        this.groupedData = this.categorisedCompService.getGropedData(data.results);
        this.categorisedCompService.storeBookDetails(this.booksDetails);
      }
    })
  }

  nextPage(category){
    // this.booksListByCategory = this.categorisedCompService.getBooksListByCategory(this.booksDetails, category);
    this.router.navigateByUrl("books-list", {"state": {category: category}});
  }

}
