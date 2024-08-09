import { Component } from '@angular/core';
import { MovieService } from '../../../../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent {
  path: string = '';
  id: string = '';
  data: any = {};
  imageUrl: string = environment.imageUrl;

  constructor(private movieService: MovieService, private router: Router, private routeActive: ActivatedRoute) {
    this.path = this.router.url.split('/')[1];
    this.id = this.routeActive.snapshot.params['id'];
    this.movieService.getMovieDetail(this.path, this.id).subscribe({
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
