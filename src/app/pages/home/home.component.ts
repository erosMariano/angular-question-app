import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { SearchComponent } from '../../components/search/search.component';
import { ChatQuestionsComponent } from '../../components/chat-questions/chat-questions.component';
import { HeaderChatComponent } from '../../components/header-chat/header-chat.component';
import { ChatComponent } from '../../components/chat/chat.component';

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
export class HomeComponent {}
