import { Injectable } from '@angular/core';
import { Photo } from '../model/Photo';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photos: Photo[] = [];

  constructor(private camera: Camera) { }

  public takePicture(): void {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData: string) => {
      this.photos.unshift(
        new Photo('data:image/jpeg;base64,' + imageData)
      )
    }, (err) => {
      // Handle error
      console.log("Camera issue:" + err);
    });
  }
}
