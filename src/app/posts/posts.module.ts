import { NgModule } from '@angular/core';
import { SharedModule} from '../shared/shared.module';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './post.service';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes =[
    { path: 'blog', component : PostListComponent},
    { path: 'blog/:id' , component : PostDetailsComponent},
    { path: 'dashboard' , component : PostDashboardComponent}

    ]

@NgModule({
  imports: [
      SharedModule,
      RouterModule.forChild(routes),
  ],
  declarations: [PostDashboardComponent, PostDetailsComponent, PostListComponent],
  providers: [PostService]
})
export class PostsModule { }
