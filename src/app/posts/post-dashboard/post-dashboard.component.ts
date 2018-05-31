import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/auth.service';
import {PostService} from '../post.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {
  title: string;
  image: string = null;
  content: string;
  buttonTxt = 'Create Post';
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(private authService: AuthService,
              private postService: PostService,
              private storage: AngularFireStorage) { }

  ngOnInit() {
  }
  createPost() {
    const data = {
      author: this.authService.authState.displayName || this.authService.authState.email,
        authorId: this.authService.currentUserId,
      content: this.content,
      image: this.image,
      published: new Date(),
      title: this.title
    };
    this.postService.create(data);
    this.title = '';
    this.content = '';
    this.buttonTxt = 'Post Created';
    setTimeout(() => this.buttonTxt = 'Create Post', 3000);
  }
  uploadImage(event) {
    const file = event.target.files[0];
    const path = `posts/${file.name}`;
    if (file.type.split('/')[0] !== 'image') {
      return alert('only image files');
    } else {
      const task = this.storage.upload(path, file);
      this.downloadURL =task.downloadURL() ;
      this.uploadPercent = task.percentageChanges();
      console.log('Image Uploaded');
      this.downloadURL.subscribe(url => this.image = url);
    }
  }
}
