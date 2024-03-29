import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { AuthToken } from './authToken';
import {Company} from "./cmodels";
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private URL = 'http://127.0.0.1:8000/app'
  constructor(private client: HttpClient) { }

  getCompanies(): Observable<Company[]>{
    return this.client.get<Company[]>(`${this.URL}/companies/`);
  }
}
