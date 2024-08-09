import { Component } from '@angular/core';
import { MovieService } from '../../../../services/movie.service';
import { environment } from '../../../../../environments/environment.development';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
  path: string = '';
  data: any = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
  };
  movieUrl: string = environment.imageUrl;

  constructor(private movieService: MovieService, private router: Router) { 
    this.path = this.router.url.split('/')[1];
    this.movieService.getMovies(this.path).subscribe({
      next: (data) => {
        this.data = data;
        console.log(data);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Complete');
      }
    });
  }
}
