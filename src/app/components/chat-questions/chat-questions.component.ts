import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-questions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-questions.component.html',
  styleUrl: './chat-questions.component.css',
})
export class ChatQuestionsComponent {
  dataChats = [
    {
      title: 'Eros Mariano',
      text: 'Fala Comigo bebe',
      hour: '10:27 AM',
    },
    {
      title: 'Eros Mariano 2',
      text: 'Fala Comigo bebe 2',
      hour: '10:34 AM',
    },
  ];
}
