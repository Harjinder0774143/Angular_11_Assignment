import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { GADGETS } from '../helper-files/contentDb';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Movie } from 'src/helper-files/movie';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  SERVER_URL: string = 'http://localhost:4200/api/movies';
  constructor(
    public messageService: MessageService,
    private httpClient: HttpClient
  ) {}

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' }),
  };

  getContentList(): Observable<Movie[]> {
    this.messageService.add('Content array loaded!');
    return this.httpClient.get<Movie[]>(this.SERVER_URL);
    // return of(GADGETS);
  }

  getContent(id: number): Observable<Movie> {
    // var movie = <Movie>{};
    // movie = <Movie>GADGETS.find((o) => o.id == id);
    // this.messageService.add(`Content Item at id:
    // ${movie.id}`);
    // return of(movie);
    console.log("Retrieving OBSERVABLE movie details");
    return this.httpClient.get<Movie>(`${this.SERVER_URL}/${id}`);
  }


  addNewMovies(movies: Movie): Observable<Movie>{
      this.messageService.add(`New content added successfully`);
      return this.httpClient.post<Movie>(this.SERVER_URL, movies, this.httpOptions);
  }

  updateMovieList(movies: Movie): Observable<any>{
    this.messageService.add(`Content updated successfully`);
    return this.httpClient.put(`${this.SERVER_URL}/${movies.id}`, movies);
  }



}
