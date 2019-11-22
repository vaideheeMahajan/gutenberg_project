import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorisedCompComponent } from './categorised-comp/categorised-comp.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import {BooksListComponent} from './books-list/books-list.component'

 const routes: Routes = [
  { 
    path: '', component: CategorisedCompComponent
  },
  {
  path: 'home', component: CategorisedCompComponent
},{
  path: 'details', component: DetailsPageComponent
},{
  path: 'books-list', component: BooksListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
