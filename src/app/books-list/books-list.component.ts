import { Component, OnInit , Input} from '@angular/core';
import { FormControl } from '@angular/forms';
import {CategorisedCompService } from '../categorised-comp/categorised-comp.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  private booksList;
  private booksDetails;
  constructor(private categorisedCompService : CategorisedCompService) { }

  ngOnInit() {
    // var x = this.ar;
    // var y = this.a;
    var category = history.state.category;
    this.booksDetails = this.categorisedCompService.bookDetails;
    this.booksList = this.categorisedCompService.getBooksListByCategory(this.booksDetails, category);
    
  }

  onKeyUp(ev){
    
  }

  readBook(book){
    if(book.url){
      window.open(book.url);
    }else{
      alert("only opens html file format");
    }
    
  }

}
