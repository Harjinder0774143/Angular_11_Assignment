import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';
import { Movie } from '../../helper-files/movie';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {

  id?: number;
  getGadget?: Movie;

  constructor(private route: ActivatedRoute, private movieService: MovieServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? "0"); // uses the + unary operator
      this.movieService.getContent(this.id).subscribe(
        (response) => {
          this.getGadget = response;
        });
    });

    console.log(this.getGadget)
  }

}
