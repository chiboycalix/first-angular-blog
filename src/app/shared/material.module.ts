import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  imports: [ MatButtonModule, MatToolbarModule, MatExpansionModule, MatInputModule , MatProgressBarModule,
             MatCardModule, MatIconModule, MatMenuModule],
    exports: [MatButtonModule, MatToolbarModule, MatExpansionModule, MatInputModule, MatProgressBarModule,
               MatCardModule, MatIconModule, MatMenuModule],
  declarations: []
})
export class MaterialModule { }
