import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private http = inject(HttpClient)


  private apiUrl = "https://jsonplaceholder.typicode.com/users";
  //Método para obtener todos los usuarios de la API JSONPlaceholder
  obtenerTodosUsuarios(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.apiUrl);
  }
}
