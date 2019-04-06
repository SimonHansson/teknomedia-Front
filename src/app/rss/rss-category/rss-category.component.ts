import { Component, OnInit } from '@angular/core';
import { Rss } from 'src/app/types/models/rss';
import { RssServiceService } from '../rss-service.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rss-category',
  templateUrl: './rss-category.component.html',
  styleUrls: ['./rss-category.component.css']
})
export class RssCategoryComponent implements OnInit {

  private sub: Subscription;
  category: string;
  rsses: Rss[] = [];

  constructor(private rssService: RssServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(
      params => {
        const cat = params.get('category');
        this.category = cat;
      });
    this.getRsses();
  }

  getRsses() {
    this.rssService.getRsses().subscribe(
      res => {
        this.rsses = this.filterOnCategory(res);
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

  filterOnCategory(rssList: Rss[]){
    let returnList: Rss[] = [];

    for (let index = 0; index < rssList.length; index++) {
      if(rssList[index].Category == this.category){
        returnList.push(rssList[index]);
      }
    }
    return returnList;
  }

}
