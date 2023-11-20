import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { SearchComponent } from '../../components/search/search.component';
import { HeaderChatComponent } from '../../components/header-chat/header-chat.component';
import { ChatComponent } from '../../components/chat/chat.component';
import data_quiz from '../../../assets/data/quizz_questions.json';
import { QuestionQuiz } from '../../../types/types';
import { ChatQuestionsComponent } from '../../components/chat-questions/chat-questions.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    SearchComponent,
    ChatQuestionsComponent,
    HeaderChatComponent,
    ChatComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  dataQuiz: QuestionQuiz[] = [];
  quizSelect: number = 0;
  openModal: boolean = false;

  ngOnInit(): void {
    this.dataQuiz.push(...data_quiz);
  }
  handleModalOpen(value: boolean) {
    this.openModal = value;
  }

  onChatSelectedChange(selected: number) {
    this.quizSelect = selected;
    this.openModal = true;
  }
}
