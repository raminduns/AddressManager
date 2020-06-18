export class User {

    private _username: string;
    public get username(): string {
        return this._username;
    }
    public set username(v: string) {
        this._username = v;
    }

    private _password: string;
    public get password(): string {
        return this._password;
    }
    public set password(v: string) {
        this._password = v;
    }

}
