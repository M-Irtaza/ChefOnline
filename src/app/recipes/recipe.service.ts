import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Pratha Roll',
      'Description of Pratha roll',
      'https://upload.wikimedia.org/wikipedia/commons/a/a8/Chicken-kathi-roll-recipe.jpg',
      [new Ingredients('Rice', 1), new Ingredients('Chicken', 2)]
    ),
    new Recipe(
      'Pratha Roll 2',
      'Description of Pratha roll',
      'https://upload.wikimedia.org/wikipedia/commons/a/a8/Chicken-kathi-roll-recipe.jpg',
      [new Ingredients('Rice', 1), new Ingredients('Chicken', 2)]
    ),
  ];
  constructor(private shoppinglistService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.shoppinglistService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
