import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MovieServiceService } from '.././movie-service.service';
import { Movie } from '../../helper-files/movie';
import { ContentListComponent } from '../content-list/content-list.component';
import { DataService } from '../data.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../modify-content-component/modify-content-component.component';

class ImageSnippet {
  constructor(public src: string, public file: File, public dialog: MatDialog) {}
}


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css'],
})
export class ContentCardComponent implements OnInit {
  nameFormControl = new FormControl('', [Validators.required]);
  @Inject(MAT_DIALOG_DATA) public data: DialogData
  @ViewChild('UploadFileInput') uploadFileInput: ElementRef;
  movieForm:any;  
  selectedFiles?: FileList;
  selectedFileNames: string[] = [];

  url: any;
  nameRequired: any;
  movie_id : any;
  movies = {
    id: 0,
    Name: '',
    Genre: [],
    Price: '',
    imgURL: '',
    writer: '',
  };

  selectOptions = {
    multiple: true,
  };

  submitted = false;
  movieList: Movie[] = [];

  constructor(
    private movieServiceService: MovieServiceService,
    private dataService: DataService, private contentListComponent : ContentListComponent,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.nameRequired = false;
    this.movieServiceService
      .getContentList()
      .subscribe((response) => (this.movieList = response));
  }

  selectedFile: ImageSnippet;

  onFileChanged(event: any) {
    // var reader = new FileReader();
    // reader.readAsDataURL(event.target.files[0]);

    // reader.onload = (_event) => {
    //   this.url = reader.result;
    // };
    this.selectedFileNames = [];
    this.selectedFiles = event.target.files;
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
         // console.log(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);

        this.selectedFileNames.push(this.selectedFiles[i].name);
       // console.log(this.selectedFileNames)
      }
    }
  }

  onSubmit() {
    console.log(this.movies)
    this.validate(this.movies);
    this.movies.id = Number(this.movie_id);
    if (this.movies.id > 0) {
      this.movieServiceService
      .updateMovieList(this.movies)
      .subscribe((data) => {
          data.imgURL = this.url;
          data.Genre = data.Genre.toString().split(',');
          data.Price = '$' + data.Price;
          this.movieList[data.id-1] = data;
          this.resetForm();
          this.contentListComponent.updateList(this.movieList);
      });
    }else {
      this.movieServiceService.addNewMovies(this.movies).subscribe((data) => {
        console.log(data)
        //data.imgURL = this.url;
        data.id = this.dataService.genId(this.movieList);
        data.Genre = data.Genre.toString().split(',');
        data.Price = '$' + data.Price;
        // var test = {"Genre": ['crime', 'mystery'],
        // "Name": "Dalgliesh",
        // "Price": "$45",
        // "id": 9,
        // "imgURL": "../../assets/img/Dalgliesh.jpg",
        // "writer": "Phyllis Dorothy James"}
        this.movieList.push(data);
        console.log(this.movieList)
        if (data.Name !== 'undefiend' && data.Name !== '') {
          this.contentListComponent.updateList(this.movieList); 
        }
      });
      this.resetForm();
      this. closeModal()
     
    }

  }
  resetForm() {
    this.movies.id = 0;
    this.movies.Name = '';
    this.movies.Genre = [];
    this.movies.Price = '';
    this.movies.imgURL = '';
    this.movies.writer = '';
    this.movie_id = '';
  }
  validate(movies: any)
  {
    if (movies.Name == 'undefiend' || movies.Name == '') {
      this.nameRequired = true;
    }
  }

  closeModal(){
    this.dialog.closeAll();
  }
  
}
