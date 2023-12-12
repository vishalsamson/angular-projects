export class User {
    username:string;
    password:string;
    role:"admin" | "student";

    constructor(
        username:string,
        password:string,
        role:"admin" | "student"
    ){
        this.username = username;
        this.password = password;
        this.role = role;
    }
}
