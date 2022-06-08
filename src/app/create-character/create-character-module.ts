import { NgModule } from '@angular/core';
import { CreateCharacterComponent } from './create-character.component';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [CreateCharacterComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: CreateCharacterComponent }
    ])
  ]
})
export class CreateCharacterModule {}
