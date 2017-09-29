import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://ng-recipe-book.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    this.http.get('https://api.foursquare.com/v2/venues/search?client_id=QM2U4XNDGAZS2PZUYEH001OCBDBUBXBT1VZT5N4CT1DOI0ZX&client_secret=JFS0JK3BY3KND5OIY3FMEA4P5VP5G3FV31A4THXELDPB0ASA&ll=40.7,-74&query=sushi&v=20172209&m=foursquare')
      .map(
        (response: Response) => {
          // const recipes: Recipe[] = response.json();
          console.log( response);
          // for (let recipe of recipes) {
          //   if (!recipe['ingredients']) {
          //     recipe['ingredients'] = [];
          //   }
          // }
          return true;
        }
      )
      // .subscribe(
      //   (recipes: Recipe[]) => {
      //     this.recipeService.setRecipes(recipes);
      //   }
      // );
  }
}
