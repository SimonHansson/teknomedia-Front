import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RssListComponent } from './rss/rss-list/rss-list.component';
import { RssServiceService } from './rss/rss-service.service';
import { HttpClientModule } from '@angular/common/http';
import { RssDetailsComponent } from './rss/rss-details/rss-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RssCategoryComponent } from './rss/rss-category/rss-category.component';


@NgModule({
  declarations: [
    AppComponent,
    RssListComponent,
    RssDetailsComponent,
    NavbarComponent,
    RssCategoryComponent
  ],
  imports: [
    
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    RssServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
