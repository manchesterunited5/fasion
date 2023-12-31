import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import{CategoryRoutingModule} from './category.routing.module'

import { ReadCategoryComponent } from './read-category/read-category.component';
import { PostCategoryComponent } from './post-category/post-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  imports: [
    CategoryRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  declarations: [
    ReadCategoryComponent,
    PostCategoryComponent,
    UpdateCategoryComponent
  ]
})
export class CategoryModule {
}
