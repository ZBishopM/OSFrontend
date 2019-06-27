import { Injectable } from '@angular/core';
import {Player} from "../class/player";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private urlPlayers= "http://localhost:8080/api/player";
  private headers = new HttpHeaders({"Content-Type":"application/json"});
  constructor(private clientHttp:HttpClient) { }

  getPlayers():Observable<Player[]>{
    return this.clientHttp.get(this.urlPlayers).pipe(map(data=>data as Player[]));
  }

  addPlayer(player: Player):Observable<Player>{
    return this.clientHttp.post<Player>(`${this.urlPlayers}/`,player,{headers: this.headers});
  }

  
}
