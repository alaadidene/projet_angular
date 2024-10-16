import { Component , Input , OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
@Component({
  selector: 'app-face-snap-dsi22',
  standalone: true,
  imports: [],
  templateUrl: './face-snap-dsi22.component.html',
  styleUrl: './face-snap-dsi22.component.css'
})
export class FaceSnapDSI22Component  {
  buttonText!:string;
  @Input() faceSnap!:FaceSnap;

  ngOnInit() {
    this.buttonText='oh snap!';
  }
  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, un Snap!';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }
}
