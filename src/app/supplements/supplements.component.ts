import { Component, OnInit } from '@angular/core';

import { Supplement } from './supplements.model';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-supplements',
  templateUrl: './supplements.component.html',
  styleUrls: ['./supplements.component.css']
})
export class SupplementsComponent implements OnInit {
  supplements: Supplement[] = [
    new Supplement('E134', 'Быстрый зеленый (Fast Green)', 'Синтетическое', 'Красители', 'Очень высокая', 'blue'),
    new Supplement('E134', 'Быстрый зеленый (Fast Green)', 'Синтетическое', 'Красители', 'Очень высокая', 'red'),
    new Supplement('E134', 'Быстрый зеленый (Fast Green)', 'Синтетическое', 'Красители', 'Очень высокая', 'green'),
    new Supplement('E134', 'Быстрый зеленый (Fast Green)', 'Синтетическое', 'Красители', 'Очень высокая', 'blue'),
    new Supplement('E134', 'Быстрый зеленый (Fast Green)', 'Синтетическое', 'Красители', 'Очень высокая', 'green'),
    new Supplement('E134', 'Быстрый зеленый (Fast Green)', 'Синтетическое', 'Красители', 'Очень высокая', 'green'),
    new Supplement('E134', 'Быстрый зеленый (Fast Green)', 'Синтетическое', 'Красители', 'Очень высокая', 'blue'),
    new Supplement('E134', 'Быстрый зеленый (Fast Green)', 'Синтетическое', 'Красители', 'Очень высокая', 'red'),
    new Supplement('E134', 'Быстрый зеленый (Fast Green)', 'Синтетическое', 'Красители', 'Очень высокая', 'blue'),
    new Supplement('E134', 'Быстрый зеленый (Fast Green)', 'Синтетическое', 'Красители', 'Очень высокая','red'),
    new Supplement('E134', 'Быстрый зеленый (Fast Green)', 'Синтетическое', 'Красители', 'Очень высокая', 'red'),
    new Supplement('E134', 'Быстрый зеленый (Fast Green)', 'Синтетическое', 'Красители', 'Очень высокая', 'green')
  ];

  

  public getRandomColor() {
 
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
    randomcolor = this.getRandomColor();

  constructor() { }

  ngOnInit() {
  }

}
