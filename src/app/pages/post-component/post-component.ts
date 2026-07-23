import { Component, inject, OnInit, signal } from '@angular/core';
import { PostService } from '../../services/post-service';
import { PostModel } from '../../models/post';

@Component({
  selector: 'app-post-component',
  imports: [],
  templateUrl: './post-component.html',
  styleUrl: './post-component.css',
})
export class PostComponent implements OnInit {

  
  private servicioPost = inject(PostService);

  post = signal<PostModel[]>([]);

  ngOnInit(): void {
    this.servicioPost.obtenerTodosPost().subscribe(datos => {
      this.post.set(datos);
    });
  }


}
