import { Component, Input,  Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionQuiz } from '../../../types/types';

@Component({
  selector: 'app-chat-questions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-questions.component.html',
  styleUrl: './chat-questions.component.css',
})
export class ChatQuestionsComponent {
  @Input() dataChats: QuestionQuiz[] = [];
  @Output() chatSelectedChange: EventEmitter<number> = new EventEmitter<number>();
  
  chatSelected: number = 0;


  selectChat(index: number) {
    this.chatSelected = index;
    this.chatSelectedChange.emit(this.chatSelected)
  }
}
