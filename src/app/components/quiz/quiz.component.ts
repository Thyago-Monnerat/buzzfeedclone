import { Component, OnInit } from '@angular/core';
import data from '../../data/data.json';
import { QuestionModel } from '../../models/questionModel';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent {
  mainPhrase: string = data.mainQuestion;
  startIndex: number = 0;
  questions: QuestionModel[] = data.options.sort();
  endGame: boolean = false;
  answers: string[] = [];
  result: string = '';

  choose(answer: string): void {
    this.answers.push(answer);

    if (this.startIndex + 1 >= data.options.length) {
      this.end();
    } else {
      this.startIndex += 1;
    }
  }

  end(): void {
    this.endGame = true;

    let frequency: { [key: string]: number } = {};

    this.answers.forEach((str) => {
      frequency[str] = (frequency[str] || 0) + 1;
    });

    let stringMax = '';
    let count = 0;

    for (const str in frequency) {
      if (frequency[str] > count) {
        count = frequency[str];
        stringMax = str;
      }
    }

    this.result = stringMax;
  }
}
