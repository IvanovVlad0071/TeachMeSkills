type IUsers = {
    UserLogin:string,
    UserPassword: string
}
function Registration(Login: string, Password: string): IUsers {
    const RegistUser: IUsers ={
        UserLogin: Login,
        UserPassword: Password
    }
    return RegistUser;
}
function CheckUser(Login: string, Password: string, RegistUser: IUsers): void{
    if(Login === RegistUser.UserLogin && RegistUser.UserPassword === Password){
        console.log ('Добро пожаловать');
    }else{
        console.log ('Неверные данные');
    }
}  
const User1 = Registration('Vlad','1111');
console.log(User1);
CheckUser('Vlad','1111', User1);