import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.css', '../card-option/card-option.component.css'],
})
export class EndGameComponent {
  @Input()
  finalResult: string = '';
}
