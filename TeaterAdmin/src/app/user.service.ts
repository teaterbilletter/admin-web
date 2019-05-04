export class UserService {
  private userName: string;

  public setUserName(name: string) {
    this.userName = name;
  }

  public getUserName() {
    return this.userName;
  }
}
