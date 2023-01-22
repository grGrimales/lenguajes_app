import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class WordsService {
  apiUrl: string = 'http://localhost:3000/api'
  constructor(private http: HttpClient) {


  }


  async createWords(entity: any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');
    //headers = headers.set("Authorization", `Basic ${this.token}`);

    return this.http.post(this.apiUrl + "/words", entity, {
      headers,
    });
  }



  async getCategoryById(entity: any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');
    return this.http.get(this.apiUrl + "/category", {params:{entity}, headers } );
  }




  async getWords() {
  
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');
    return this.http.get(this.apiUrl + "/words", { headers } );
  }
}
