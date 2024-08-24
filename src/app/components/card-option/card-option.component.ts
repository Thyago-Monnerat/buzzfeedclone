import { Component, Input, OnInit } from '@angular/core';
import data from '../../data/data.json';

@Component({
  selector: 'app-card-option',
  templateUrl: './card-option.component.html',
  styleUrl: './card-option.component.css',
})
export class CardOptionComponent {
  @Input()
  cardContent: string = '';
}
