import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

 articles = 'https://sample-inflr.herokuapp.com/api/articles/';
 accounts = 'https://sample-inflr.herokuapp.com/api/accounts/';
 login = 'https://sample-inflr.herokuapp.com/api/accounts/login/';


  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token 4098e2b5038f785028e51a6c40472d7e4158a3c4'
      
    })
  };

    public getArticles() {
    return new Promise(resolve => {
      this.http.get(this.articles).subscribe(data => {
        resolve(data);
      }, err => {
        console.log('erro' + err);

      });
    });
  }

   public postAccount(data) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return new Promise((resolve, reject) => {
      this.http.post(this.accounts, data, {headers: headers})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  public postFeed(data) {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
        return new Promise((resolve, reject) => {
      this.http.post(this.articles, data,this.httpOptions)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

    public loginApp(data) {
    let headers = new HttpHeaders();
    return new Promise((resolve, reject) => {
      this.http.post(this.login, data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }
  
}
