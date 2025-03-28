import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule, NgModel } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  users: any[] = [];
  posts: any[] = [];
  comments: any[] = [];
  selectedUserId: number = 1;
  selectedPostId: number | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
      this.loadUsers();
  }

  loadUsers(): void {
    this.apiService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  loadPosts(userId: number): void {
    this.apiService.getPosts(userId).subscribe((data) => {
      this.posts = data;
      if (this.posts.length > 0) {
        this.loadComments(this.posts[0].id);
      }
    });
  }

  loadComments(postId: number): void {
    this.apiService.getComments(postId).subscribe((data) => {
      this.comments = data;
    })
  }

}
