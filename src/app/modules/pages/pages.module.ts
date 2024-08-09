import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MovieComponent } from './components/movie/movie.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';



@NgModule({
  declarations: [HomePageComponent, MovieComponent, MovieDetailComponent, MovieDetailComponent],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [HomePageComponent, MovieComponent, MovieDetailComponent]
})
export class PagesModule { }
