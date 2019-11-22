import { Component, OnInit , Input} from '@angular/core';
import {CategorisedCompService } from '../categorised-comp/categorised-comp.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  private booksList;
  private booksDetails;
  private category;
  private searchTerm;
  constructor(private categorisedCompService : CategorisedCompService) { }

  ngOnInit() {
    this.category = history.state.category;
    this.booksDetails = this.categorisedCompService.bookDetails;
    this.getBooksList();
  }

  onKeyUp(ev){
    if(ev.keyCode == 13){
      this.getBooksList();
    }
  }

  readBook(book){
    if(book.url){
      window.open(book.url);
    }else{
      alert("No viewable version available");
    }
  }

  clearSearch(){
    this.searchTerm = "";
    this.getBooksList();
  }

  getBooksList(){
    this.booksList = this.categorisedCompService.getBooksListByCategory(this.booksDetails, this.category);
    if(this.searchTerm){
      this.booksList = this.categorisedCompService.getBooksListBySearch(this.booksList, this.searchTerm);
    }
  }

}
