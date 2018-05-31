import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import {AuthService} from '../../core/auth.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
     posts: Observable<Post[]>;

    constructor(private postService: PostService, public authService: AuthService) {}

    ngOnInit() {
     this.posts = this.postService.getPosts();
     console.log(this);

    }
    delete(id: string){
        this.postService.delete(id);
    }
}
