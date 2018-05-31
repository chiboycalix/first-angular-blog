import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {PostService} from '../post.service';
import {Post} from '../post.model';
import {AuthService} from '../../core/auth.service';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
    post: Post;
    editing = false;

    constructor(private activatedRoute: ActivatedRoute,
                private postService: PostService,
                public authService: AuthService,
                private router: Router) {
        
    }

    ngOnInit() {
        this.getPost();
        console.log(this);
    }

    getPost() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        return this.postService.getPostData(id).subscribe(data => this.post = data);
    }

    delete() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.postService.delete(id);
        this.router.navigate(['/blog']);
    }

    updatePost() {
        const formData = {
            title: this.post.title,
            content: this.post.content,
        };
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.postService.update(id, formData);
        this.editing = false;
    }
}