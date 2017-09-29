import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http: Http) { }
  loadedFeature = 'recipe';
  public venue;
  private foodIs = '';
  private credentials='client_id=QM2U4XNDGAZS2PZUYEH001OCBDBUBXBT1VZT5N4CT1DOI0ZX&client_secret=JFS0JK3BY3KND5OIY3FMEA4P5VP5G3FV31A4THXELDPB0ASA';
  // private clientSecret='';

  private url = 'https://api.foursquare.com/v2/venues/search?'+this.credentials+'&ll=40.7,-74&query='+this.foodIs+'&v=20172209&m=foursquare';

  onNavigate(feature: string) {
    // this.loadedFeature = feature;
  }

  foodType(amount){
    this.foodIs = amount;
    this.url = 'https://api.foursquare.com/v2/venues/search?'+this.credentials+'&ll=40.7,-74&query='+this.foodIs+'&v=20172209&m=foursquare';
    console.log('food is '+ this.foodIs);
    console.log(this.foodIs);
    console.log('vlez init');
    this.http.get(this.url)
      .map(
      (response: Response) => {
        // const recipes: Recipe[] = response.json();
        // console.log(response);
        // for (let recipe of recipes) {
        //   if (!recipe['ingredients']) {
        //     recipe['ingredients'] = [];
        //   }
        // }
        return response.json();
      }
      )
      .subscribe(
      (response: Response) => {
        // console.log(response);
        this.venue = response['response'];
        // console.log(Object.keys(this.venue));
        // console.log(response);
        console.log(this.venue);
        return response;
      }
      );
  }

  ngOnInit() {
    // console.log(this.foodIs);
    // console.log('vlez init');
    // this.http.get(this.url)
    //   .map(
    //   (response: Response) => {
    //     // const recipes: Recipe[] = response.json();
    //     // console.log(response);
    //     // for (let recipe of recipes) {
    //     //   if (!recipe['ingredients']) {
    //     //     recipe['ingredients'] = [];
    //     //   }
    //     // }
    //     return response.json();
    //   }
    //   )
    //   .subscribe(
    //   (response: Response) => {
    //     // console.log(response);
    //     this.venue = response['response'];
    //     // console.log(Object.keys(this.venue));
    //     // console.log(response);
    //     console.log(this.venue);
    //     return response;
    //   }
    //   );

  }

}

