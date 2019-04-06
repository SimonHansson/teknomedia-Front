import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RssListComponent } from './rss/rss-list/rss-list.component';
import { RssDetailsComponent } from './rss/rss-details/rss-details.component';
import { RssCategoryComponent } from './rss/rss-category/rss-category.component';

const routes: Routes = [
{
  path: 'home',
  component: RssListComponent,
},
{
  path: 'details/:id',
  component: RssDetailsComponent,
},
{
  path: 'details',
  component: RssDetailsComponent,
},
{
  path: 'category/:category',
  component: RssCategoryComponent,
},
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
