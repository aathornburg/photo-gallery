import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public currentImage: string;

  constructor(private photoService: PhotoService) {}

  public ngOnInit(): void {
    console.log('I should be hitting this');
    this.photoService.initializeSavedPhotos();
  }

}
