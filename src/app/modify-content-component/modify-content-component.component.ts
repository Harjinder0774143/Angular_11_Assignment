import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContentCardComponent } from '../content-card/content-card.component';
import { AppMessagesComponent } from '../app-messages/app-messages.component';
import { ContentListComponent } from '../content-list/content-list.component';


export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
} 

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.css'],
})
export class ModifyContentComponentComponent implements OnInit {

  movieForm:any;
  contentList: any=[];
  @Output() newItemEvent = new EventEmitter<string>();
  name: any;
  type: any;
  image: any;
  body: any;
  display: string;
  data: any;

  constructor(
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  
  openDialog() {
    const dialogRef = this.dialog.open(ContentCardComponent, {
      width:'700px',
      height:'auto'
    });

    // dialogRef.afterClosed().subscribe(result => {      
    //   console.log(`Dialog result: ${JSON.stringify(result)}`);
    //   this.display = JSON.stringify(result);
    //   console.log(JSON.parse(this.display));
    //   this.data = JSON.parse(this.display);
    //   this.addNewItem(this.data)
    // });
  }
 
}
