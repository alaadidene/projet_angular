import { Component , OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapDSI22Component } from "./face-snap-dsi22/face-snap-dsi22.component";
import { FaceSnap } from './models/face-snap.model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaceSnapDSI22Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'projet_1';
  faceSnap!: FaceSnap[];
  ngOnInit() {
    this.faceSnap= [
      {
        title:'Archibald',
        description:'This is my first snap',
        imageUrl:'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpg',
        createdDate:new Date(),
        snaps:0,
      },
      {
        title:'Archibald',
        description:'This is my first snap',
        imageUrl:'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpg',
        createdDate:new Date(),
        snaps:0,
      },
      {
        title:'Archibald',
        description:'This is my first snap',
        imageUrl:'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpg',
        createdDate:new Date(),
        snaps:0,
      } 
    ];
     
  }
}
