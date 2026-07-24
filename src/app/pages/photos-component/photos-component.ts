import { Component, inject, OnInit, signal } from '@angular/core';
import { PhotosServices } from '../../services/photos';
import { PhotosModels } from '../../models/photos';

@Component({
  selector: 'app-photos-component',
  imports: [],
  templateUrl: './photos-component.html',
  styleUrl: './photos-component.css',
})
export class PhotosComponent implements OnInit {

  private servicioPhotos = inject (PhotosServices);

  photos = signal<PhotosModels[]>([]);

  ngOnInit(): void {
    this.servicioPhotos.obtenerTodosPhotos().subscribe (
      datos => {
        this.photos.set(datos);
      }
    )
  }


}
