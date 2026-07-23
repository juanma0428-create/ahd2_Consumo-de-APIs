import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  
  private http = inject(HttpClient)
  

private apiUrl = "https://jsonplaceholder.typicode.com/posts";
//Método para obtener todos los usuarios de la API JSONPlaceholder
obtenerTodosPost (): Observable<PostModel[]> {
return this.http.get<PostModel[]>(this.apiUrl);
}

}
