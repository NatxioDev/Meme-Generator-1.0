import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry  } from 'rxjs/operators';
import { Meme } from './meme';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ApiUno';
  public mms: Meme[]=[];
constructor(private http: HttpClient) { }

  OnSave():void{
    console.log("Aprete el Boton");
    this.http.get<any>("https://api.imgflip.com/get_memes").subscribe(data =>{
      console.log("ya llego");
      this.mms=data.data.memes;
    })
    console.log("Ya paso");

  }
}
