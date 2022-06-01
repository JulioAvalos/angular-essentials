import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CartComponent } from './cart/cart.component';
import { TabsComponent } from './tabs/tabs.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { StarWarsService } from './services/star-wars.service';
import { LogService } from './services/log.service';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { HeaderComponent } from './header/header.component';

const routes = [
  {
    path: 'characters',
    component: TabsComponent,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: ':side', component: ListComponent }
    ],
  },
  {
    path: 'new-character',
    component: CreateCharacterComponent,
  },
  {
    path: '**',
    redirectTo: '/characters',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DashboardComponent,
    UserDetailComponent,
    CartComponent,
    TabsComponent,
    ItemComponent,
    ListComponent,
    CreateCharacterComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [StarWarsService, LogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
