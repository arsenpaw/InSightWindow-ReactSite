import {UserLoginDto} from "./UserLoginDto";

export class UserRegisterDto extends UserLoginDto
{
    lastname;
    firstname;

    constructor(login,password,first_name, last_name) {
    super(login,password);
    this.LastName = last_name;
    this.FirstName = first_name;
  }
    get LastName() {
        return this.lastname;
    }
    set LastName(value) {
        this.lastname = value;
    }

    get FirstName() {
        return this.firstname;
    }

    set FirstName(value) {
        this.firstname = value;
    }
}