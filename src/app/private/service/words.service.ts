import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { async } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class WordsService {
  apiUrl: string = 'http://localhost:3000/api'
  constructor(private http: HttpClient) {


  }
  uploadAudio(audio: FormData): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Credentials': 'true'
    });

    return this.http.post<any>(`${this.apiUrl}/words/upload-audio`, audio, { headers });
  }

  uploadImg(img: FormData): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Credentials': 'true'
    });

    return this.http.post<any>(`${this.apiUrl}/words/upload-img`, img, { headers });
  }

  createWord(entity: any): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Credentials': 'true'
    });

    return this.http.post<any>(`${this.apiUrl}/words`, entity, { headers });
  }


  deleteWord(id: string): Observable<any> {


    const headers: HttpHeaders = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Credentials': 'true',
      "Content-type": "application/json"
    });

    return this.http.delete<any>(`${this.apiUrl}/words/` + id, { headers });


  }

  getWordbById(id: string): Observable<any> {


    const headers: HttpHeaders = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Credentials': 'true',
      "Content-type": "application/json"
    });

    return this.http.get<any>(`${this.apiUrl}/words/` + id, { headers });


  }

  async getCategoryById(entity: any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');
    return this.http.get(this.apiUrl + "/category", { params: { entity }, headers });
  }




  async getWords() {

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');
    return this.http.get(this.apiUrl + "/words", { headers });
  }
}
