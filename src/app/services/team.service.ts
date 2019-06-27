import { Injectable } from '@angular/core';
import {Team} from "../class/team";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private urlTeams="http://localhost:8080/api/team";
  private headers = new HttpHeaders({"Content-Type":"application/json"});
  constructor(private clientHttp:HttpClient) { }

  getTeams():Observable<Team[]>{
    return this.clientHttp.get(this.urlTeams).pipe(map(data=>data as Team[]));
  }
}
