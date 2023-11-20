import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { Option, QuestionQuiz } from '../../../types/types';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent implements OnInit {
  actualDate = new Date();
  @Input() dataChats: QuestionQuiz[] = [];
  @Input() chatSelected: number = 0;
  dataQuestions: QuestionQuiz = this.dataChats[this.chatSelected];
  positionQuestion: number = 0;
  isResult: boolean = false;
  answers: string[] = [];
  answerSelected: {
    text: string;
    hour: Date;
  } = { text: '', hour: new Date() };

  content: {
    text: string;
    hour: Date;
  }[] = [];

  ngOnInit(): void {
    this.dataQuestions = this.dataChats[this.chatSelected];
    const questionBot = {
      text: this.dataQuestions.questions[this.positionQuestion].question,
      hour: new Date(),
    };
    this.content.push(questionBot);
  }
  ngOnChanges(): void {
    this.dataQuestions = this.dataChats[this.chatSelected];
    console.log(this.answerSelected);
  }

  async checkResult(answers: string[]) {
    const result = answers.reduce((previous, current, i, arr) => {
      if (
        arr.filter((item) => item === previous).length >
        arr.filter((item) => item === current).length
      ) {
        return previous;
      } else {
        return current;
      }
    });

    this.answerSelected = {
      text: String(
        this.dataQuestions.results[
          result as keyof typeof this.dataQuestions.results
        ]
      ),
      hour: new Date()
    };
  }

  async selectOption(option: Option) {
    const data = {
      text: option.name,
      hour: new Date(),
    };

    if (this.dataQuestions.questions[this.positionQuestion + 1]) {
      const questionBot = {
        text: this.dataQuestions.questions[this.positionQuestion + 1].question,
        hour: new Date(),
      };
      this.content.push(questionBot);
    } else {
      const questionBot = {
        text: this.dataQuestions.questions[this.positionQuestion].question,
        hour: new Date(),
      };
      this.content.push(questionBot);
    }

    this.content.push(data);
    this.answers.push(option.alias);
    if (this.positionQuestion < this.dataQuestions.questions.length - 1) {
      this.positionQuestion += 1;
    } else {
      this.isResult = true;
      this.checkResult(this.answers);
    }
  }
}
