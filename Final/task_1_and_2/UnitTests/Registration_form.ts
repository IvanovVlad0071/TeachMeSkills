export default class RegistrationForm {
    private login: string;
    private password: string;
  
    constructor(login: string, password: string) {
      this.login = login;
      this.password = password;
    }
  
    registerUser(): boolean {
      
      if (this.isValidLogin() && this.isValidPassword()) {
        
        return true; 
      }
  
      return false; 
    }
  
    private isValidLogin(): boolean {
      
      return /^[a-zA-Z0-9]{4,}$/.test(this.login);
    }
  
    private isValidPassword(): boolean {
     
      return /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(this.password);
    }
  }