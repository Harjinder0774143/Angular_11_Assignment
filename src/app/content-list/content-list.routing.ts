import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentListComponent } from './content-list.component';


 const ContentListRoutes: Routes = [
      {
        path: "list",
        component: ContentListComponent
      },
];

@NgModule({
    declarations:[],
    imports:[
        CommonModule,
        RouterModule.forChild(ContentListRoutes)
    ]
})

export class ContentListRoutingModule {}