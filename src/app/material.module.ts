import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar'


@NgModule({
  declarations: [
    
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [],
})
export class MaterialModule {}
