import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotosServices {
  
  private http = inject(HttpClient)


  private apiUrl = "https://jsonplaceholder.typicode.com/photos";
  //Método para obtener todos los usuarios de la API JSONPlaceholder
  obtenerTodosPhotos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

}
