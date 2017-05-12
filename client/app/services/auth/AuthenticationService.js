
class AuthenticationService{
   static isLogin() {
       return localStorage.getItem('token');
    }
}

export default AuthenticationService;