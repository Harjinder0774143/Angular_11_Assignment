import { MessageService } from './../message.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../modify-content-component/modify-content-component.component';

@Component({
  selector: 'app-app-messages',
  templateUrl: './app-messages.component.html',
  styleUrls: ['./app-messages.component.css']
})
export class AppMessagesComponent implements OnInit {
  @Inject(MAT_DIALOG_DATA) public data: DialogData
  
  constructor(public messageService:MessageService) { }

  ngOnInit(): void {
  }


}
