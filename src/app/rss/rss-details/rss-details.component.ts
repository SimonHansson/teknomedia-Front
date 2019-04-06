import { Component, OnInit } from '@angular/core';
import { RssServiceService } from '../rss-service.service';
import { Rss } from 'src/app/types/models/rss';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { RssSource } from 'src/app/types/models/rssSourse';

@Component({
  selector: 'app-rss-details',
  templateUrl: './rss-details.component.html',
  styleUrls: ['./rss-details.component.css']
})
export class RssDetailsComponent implements OnInit {

  private sub: Subscription;
  rssSource: RssSource;

  constructor(private rssService: RssServiceService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.sub = this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getRssSource(id);
      });
  };

  getRssSource(id: number){
    this.rssService.getRssSource(id).subscribe(
      res => {
        this.rssSource = res;
        this.rssSource.rsses.sort((a, b) => new Date(b.PubDate).getTime() - new Date(a.PubDate).getTime());

        for (let index = 0; index < this.rssSource.rsses.length; index++) {
          if(this.rssSource.rsses[index].Image.length > 0){
            this.rssSource.rsses[index].Image = this.rssSource.rsses[index].Image.substring(0, this.rssSource.rsses[index].Image.length - 2);
            this.rssSource.rsses[index].Image = this.rssSource.rsses[index].Image + "\"height=\"100\" width=\"100\" class=\"img-fluid\" onerror=\"this.style.opacity='0'\"" + "/>";
          }
        }
        console.log(this.rssSource);
      }
    );
  }

}
