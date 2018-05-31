import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment } from '../environments/environment.prod';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PostsModule } from './posts/posts.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: '' , redirectTo: '/blog', pathMatch: 'full'},
    {path: '' , loadChildren: './posts/posts.module#PostsModule'}
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
      BrowserAnimationsModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      AngularFirestoreModule,
      AngularFireStorageModule,
      PostsModule,
      RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
