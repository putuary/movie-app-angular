import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { MovieComponent } from "./components/movie/movie.component";
import { MovieDetailComponent } from "./components/movie-detail/movie-detail.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '',
        title: 'Home Page',
        component: HomePageComponent
    },
    {
        path: 'movie',
        title: 'Movie List',
        component: MovieComponent
    },
    {
        path: 'movie/:id',
        title: 'Movie Detail',
        component: MovieDetailComponent
    },
    {
        path: 'tv',
        title: 'Tv List',
        component: MovieComponent
    },
    {
        path: 'tv/:id',
        title: 'Tv  Detail',
        component: MovieDetailComponent
    }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
}) 
export class PagesRoutingModule { };
