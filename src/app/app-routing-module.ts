import { NgModule } from '@angular/core';

import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'characters',
    component: TabsComponent,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: ':side', component: ListComponent },
    ],
  },
  {
    path: 'new-character',
    loadChildren: () =>
      import('./create-character/create-character-module').then(
        (m) => m.CreateCharacterModule
      ),
  },
  {
    path: '**',
    redirectTo: '/characters',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
