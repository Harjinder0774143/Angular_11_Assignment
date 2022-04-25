import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { ContentListComponent } from './content-list.component';


@NgModule({
  declarations: [
    //ContentListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule ,
    BrowserAnimationsModule,
  ],
  providers: [ContentListComponent],
  bootstrap: [],
})
export class ContentListModule {}
