import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireList, AngularFireDatabase} from 'angularfire2/database';
import { Post } from './post.model';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Injectable()
export class PostService {
postCollection: AngularFirestoreCollection<Post>;
postDoc: AngularFirestoreDocument<Post>;




  constructor(private afs: AngularFirestore) {
      // afs.firestore.settings({ timestampsInSnapshots: true });

         // const timestamp = snapshot.get('created_at');
         // const date = timestamp.toDate();

       this.postCollection = this.afs.collection('posts', ref =>
           ref.orderBy('published', 'desc'));
  }
    getPosts() {
    return this.postCollection.snapshotChanges().map(actions => {
        return actions.map(a => {
            const data = a.payload.doc.data() as Post;
            const id = a.payload.doc.id;
            return {id, ...data};
        });
    });
  }

  getPostData(id: string) {
      this.postDoc = this.afs.doc<Post>(`posts/${id}`);
      return this.postDoc.valueChanges();
  }
    create(data: Post) {
      this.postCollection.add(data);
    }
    getPost(id: string){
      return this.afs.doc<Post>(`posts/${id}`);
    }
     delete(id: string) {
        return this.getPost(id).delete();
     }

     update(id: string, formData) {
        return this.getPost(id).update(formData);
     }
}
