import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { loginCredential } from '../model/modal';
// import { loginCredential } from '../modal/modal';

// export interface loginCredential{
//   username:string;
//   password:string;
// }

const loginData: Partial<{ username: string | null; password: string | null }> =
  {
    username: 'your-username', // Provide a default value or ensure it's always a string
    password: 'your-password',
  };

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://api.angular-email.com';
  public sign$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  userName!:string;

  usernameAvailable(username: string) {
    return this.http.post<any>(this.baseUrl + '/auth/username', {
      username: username,
    });
  }

  singup(values: any) {
    return this.http.post<any>(this.baseUrl + '/auth/signup', values).pipe(
      tap(() => {
        this.sign$.next(true);
      })
    );
  }

  checkAuth() {
    return this.http.get(`${this.baseUrl}/auth/signedin`).pipe(
      tap((response: any) => {
        this.sign$.next(response.authenticated);
        this.userName = response.username
      })
    );
  }

  signOut() {
    return this.http.post(`${this.baseUrl}/auth/signout`, {}).pipe(
      tap(() => {
        this.sign$.next(false);
      })
    );
  }

  signIn(username: string|null|undefined, password: string|null|undefined) {
    return this.http
      .post(`${this.baseUrl}/auth/signin/`, { username, password })
      .pipe(
        tap((res:any) => {
          this.sign$.next(true);
          // this.userName= res.username;

        })
      );
  }
}
