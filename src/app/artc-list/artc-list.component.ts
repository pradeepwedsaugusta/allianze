import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ArtWork } from '../models/response/artwork';
import { ArticService } from '../services/artic.service';

interface FilterOption {
  key: string;
  value: string;
}

@Component({
  selector: 'app-artc-list',
  templateUrl: './artc-list.component.html',
  styleUrls: ['./artc-list.component.scss']
})
export class ArtcListComponent implements OnInit {

  artWorkList: ArtWork[] = [];
  iiif_url: string = "";
  imageAppendURL: string = environment.imageAppendURL;
  filterOptions: FilterOption[] = [];
  sortOptions: string[] = [
    'Name',
    'Artist',
    'Date'
  ];
  pagination = {
    page: 1,
    count: 0,
    perPage: environment.pageSize
  }
  showSpinner: boolean = false;
  tempList: ArtWork[] = [];
  constructor(private artcService: ArticService) { }

  ngOnInit() {
    this.getArtWorks();
  }
  getArtWorks() {
    this.showSpinner = true;
    this.artcService.getArtCollections(this.pagination.page).subscribe(res => {
      if (res) {
        if (res.data.length > 0) {
          this.artWorkList = res.data;
          this.tempList = res.data;
          this.artWorkList.forEach(f => {
            if (!this.filterOptions.find(fi => fi.value == f.style_title) && f.style_title != null)
              this.filterOptions.push({
                key: f.style_title + " (" + this.artWorkList.filter(fi => fi.style_title == f.style_title).length + ")",
                value: f.style_title
              })
          })
        }
        if (res.config) {
          this.iiif_url = res.config.iiif_url;
        }
        if (res.pagination) {
          this.pagination.count = res.pagination.total;
        }
      }
    }, err => { }, () => {
      this.showSpinner = false;
    });
  }
  toText(value: string): string | null {
    return value ? value : null;
  }

  toFilterText(value: any) {
    return value.key ? value.key : value;
  }

  nextPage() {
    this.pagination.page++;
    this.getArtWorks();
  }
  prevPage() {
    this.pagination.page--;
    this.getArtWorks();
  }
  goToPage(n: any) {
    this.pagination.page = n;
    this.getArtWorks();
  }
  filterData(event: any) {
    this.artWorkList = this.tempList.filter(f => f.style_title == event.value.value);
  }
}
