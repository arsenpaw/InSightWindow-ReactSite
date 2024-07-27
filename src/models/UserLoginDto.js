export class  UserLoginDto {
    email;
    password;
    get Email() {
        return this.email;
    }
    set Email(value) {
        this.email = value;
    }

    get Password() {
        return this.password;
    }

    set Password(value) {
        this.password = value;
    }

    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}