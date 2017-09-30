import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataGetService {
  constructor(private http: Http) { }

  public categories;
  public data;
  private credentials = 'client_id=QM2U4XNDGAZS2PZUYEH001OCBDBUBXBT1VZT5N4CT1DOI0ZX&client_secret=JFS0JK3BY3KND5OIY3FMEA4P5VP5G3FV31A4THXELDPB0ASA';
  private url = '';
  private location = '';
  private category = 'I look for...';
  private errorCategory: boolean = false;
  private errorLocation: boolean = false;
  private hasChanges: boolean = false;

  getCategories() {
    this.http.get('https://api.foursquare.com/v2/venues/categories?'+ this.credentials +'&v=20170930')
      .map(
      (response: Response) => {
        return response.json();
      }).subscribe(
      (response: Response) => {
        this.categories = response['response'];
        return response;
      });
  }

  getUrl() {
    this.url = 'https://api.foursquare.com/v2/venues/search?' + this.credentials + '&near=' + this.location + '&query=' + this.category + '&v=20173009&m=foursquare';
    this.http.get(this.url)
      .map(
      (response: Response) => {
        return response.json();
      }).subscribe(
      (response: Response) => {
        this.data = response['response'];
        this.hasChanges = false;
        return response;        
      });
  }

  searchType() {
    if (this.category.length > 0 && this.category != 'I look for...') {
      if (this.location.length > 0) {
        this.getUrl();
      } else {
        this.errorLocation = true;
      }
    } else {
      this.errorCategory = true;
    }
  }

  collectData() {
    this.selectCategory();
    this.selectLocation();
    this.searchType();
  }

  selectLocation() {
    this.location;
  }
  selectCategory() {
    this.category;
  }

  clearError1() {
    this.errorCategory = false;
  }

  clearError2() {
    this.errorLocation = false;
  }

  changed() {
    this.hasChanges = true;
  }
}