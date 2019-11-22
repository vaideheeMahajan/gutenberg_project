import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as _ from "lodash";
import { getUrlScheme } from '@angular/compiler';

export interface bookObject {
  id: number;
  title?: string;
  image?: string;
  authorName?: string
}


@Injectable({
  providedIn: 'root'
})
export class CategorisedCompService {
  public bookDetails;
  constructor(
    private http: HttpClient
  ) { }

  getBooksDetails(): Observable<any> {
    let url = "http://skunkworks.ignitesol.com:8000/books/";
    return this.http.get(url);
  }

  getGropedData(data) {
    let groupedData = [];
    _.each(data, (obj) => {
      groupedData = _.concat(groupedData, obj.bookshelves)
    })
    return _.uniq(groupedData);
  }

  storeBookDetails(data) {
    this.bookDetails = data;
  }

  getBooksListByCategory(data, category) {
    let booksList = [];
    _.each(data, (obj)=> {
      if (_.indexOf(obj.bookshelves, category) != -1) {
        let book = {
          "id": obj.id,
          "title": obj.title.indexOf(";") != -1 ? obj.title.split(":")[0] : obj.title,
          "url": this.getFilteredUrl(obj.formats),
          "authorName": obj.authors[0].name.indexOf(",") != -1 ? obj.authors[0].name.split(",")[1] + " " + obj.authors[0].name.split(",")[0] : obj.authors[0].name
        };
        booksList.push(book);
      }
    });
    return booksList;
  }

  getFilteredUrl(formats) {
    var url ;
    _.filter(formats, function (val, key) {
      if (key.indexOf("text/html") != -1 && _.endsWith(val, ".htm") || key.indexOf("application/pdf") != -1 && _.endsWith(val, ".pdf") || key.indexOf("text/html") != -1 && _.endsWith(val, ".txt")) {
        url = val;
      }
    });
    return url;
  }

  getBooksListBySearch (booksList, searchTerm) {
    var list = [];
    _.filter(booksList, function(obj){
      if(obj.title.toLowerCase().indexOf(searchTerm) != -1 || obj.authorName.toLowerCase().indexOf(searchTerm) != -1){
        list.push(obj);
      }
    })
    return list;
  }
}
