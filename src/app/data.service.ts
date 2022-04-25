import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { GADGETS } from '../helper-files/contentDb';
import { Movie } from 'src/helper-files/movie';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}
  createDb() {

    let movies = GADGETS;
    return { movies };



    // let movies = [
    //   {
    //     id: 1,
    //     Name: 'A Burning in My Bones',
    //     Genre: ['Biography', 'Reality'],
    //     Price: '$16.99',
    //     imgURL: '',
    //     writer: 'Winn Collier',
    //   },
    //   {
    //     id: 2,
    //     Name: 'Steve Jobs',
    //     Genre: ['Biography', 'Reality'],
    //     Price: '$24.99',
    //     imgURL: '../../assets/img/steve-jobs.jpg',
    //     writer: 'Walter Isaacson',
    //   },
    //   {
    //     id: 3,
    //     Name: 'The Subtle Art of Not Giving a F*ck',
    //     Genre: ['Mindset', 'Positive Thinking'],
    //     Price: '$19.99',
    //     imgURL: '../../assets/img/The Subtle Art of Not Giving a Fck.jpg',
    //     writer: 'Mark Manson',
    //   },
    //   {
    //     id: 4,
    //     Name: 'The Monk Who Sold His Ferrari',
    //     Genre: ['Mindset', 'Positive Thinking'],
    //     Price: '$19.99',
    //     imgURL: '../../assets/img/The Monk Who Sold His Ferrari.jpg',
    //     writer: 'Robin Sharma',
    //   },
    //   {
    //     id: 5,
    //     Name: 'The Power of Now',
    //     Genre: ['Mindset', 'positive Thinking'],
    //     Price: '$19.99',
    //     imgURL: '../../assets/img/The Power of Now.jpg',
    //     writer: 'Eckhart Tolle',
    //   },
    //   {
    //     id: 6,
    //     Name: 'The Last Wish: Introducing the Witcher',
    //     Genre: ['Fantasy', 'Drama'],
    //     Price: '$9.99',
    //     imgURL: '../../assets/img/The Last Wish-Introducing the Witcher.jpg',
    //     writer: 'Andrzej Sapkowski',
    //   },
    //   {
    //     id: 7,
    //     Name: 'The Two Towers: The Lord of the Rings',
    //     Genre: ['Fantasy', 'Drama'],
    //     Price: '$34.99',
    //     imgURL: '../../assets/img/The Two Towers- The Lord of the Rings.jpg',
    //     writer: 'J. R. R. Tolkien',
    //   },
    //   {
    //     id: 8,
    //     Name: 'Julian Assange: Founder of WikiLeaks',
    //     Genre: ['Biography', 'Reality'],
    //     Price: '$39.99',
    //     imgURL: '../../assets/img/39019099.jpg',
    //     writer: 'Kristin Thiel',
    //   },
    // ];

    // return { movies };
  }
  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movies => movies.id)) + 1 : 0;
  }
}
