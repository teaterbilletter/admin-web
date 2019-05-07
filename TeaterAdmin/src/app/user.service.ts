export class UserService {
  public setUserName(name: string) {
    localStorage.setItem('userName', name);
  }

  public getUserName() {
    return localStorage.getItem('userName');
  }
}
