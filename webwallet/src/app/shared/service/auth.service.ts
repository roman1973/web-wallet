export class AuthService {
  private isAuth = false;
  login(id, name, pass) {
    this.isAuth = true;
    window.localStorage.setItem('id', id);
    window.localStorage.setItem('name', name);
    window.localStorage.setItem('pass', pass);
  }
  logout() {
    this.isAuth = false;
    window.localStorage.clear();
  }
  isLoggedin(): boolean {
    return this.isAuth;

  }
}
