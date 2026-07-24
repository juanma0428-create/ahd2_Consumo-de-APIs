import { Component, signal } from '@angular/core';
import { UserComponent } from './pages/user-component/user-component';
import { PostComponent } from './pages/post-component/post-component';
import { PhotosComponent } from './pages/photos-component/photos-component';

@Component({
  selector: 'app-root',
  imports: [ UserComponent, PostComponent,PhotosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ahd2Test');
}
