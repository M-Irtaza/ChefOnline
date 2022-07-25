import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Pratha Roll',
      'Description of Pratha roll',
      'https://upload.wikimedia.org/wikipedia/commons/a/a8/Chicken-kathi-roll-recipe.jpg'
    ),
    
  ];

  constructor() {}

  ngOnInit(): void {}
}
