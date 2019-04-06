import { Component, OnInit } from '@angular/core';
import { RssServiceService } from '../rss-service.service';
import { Router } from '@angular/router';
import { Rss } from 'src/app/types/models/rss';

@Component({
  selector: 'app-rss-list',
  templateUrl: './rss-list.component.html',
  styleUrls: ['./rss-list.component.css']
})
export class RssListComponent implements OnInit {

  router: Router;
  rsses: Rss[] = [];
  
  constructor(private rssService: RssServiceService) { }

  ngOnInit() {
    this.getRsses();
  }

  getRsses() {
    this.rssService.getRsses().subscribe(
      res => {
        this.rsses = res;
        this.rsses.sort((a, b) => new Date(b.PubDate).getTime() - new Date(a.PubDate).getTime());

        for (let index = 0; index < this.rsses.length; index++) {
          if(this.rsses[index].Image.length > 0){
            this.rsses[index].Image = this.rsses[index].Image.substring(0, this.rsses[index].Image.length - 2);
            this.rsses[index].Image = this.rsses[index].Image + " class=\"img-fluid\" onerror=\"this.style.opacity='0'\"" + "/>";
          }
        }
      }
    );
  }



}
    
