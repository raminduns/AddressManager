import { Role } from './role';

export class UserContent {

    private _id: string;
    public get id(): string {
        return this._id;
    }
    public set id(v: string) {
        this._id = v;
    }

    private _fullName: string;
    public get fullName(): string {
        return this._fullName;
    }
    public set fullName(value: string) {
        this._fullName = value;
    }

    private _age: number;
    public get age(): number {
        return this._age;
    }

    public set age(value: number) {
        this._age = value;
    }

    private _address: string;
    public get address(): string {
        return this._address;
    }
    public set address(value: string) {
        this._address = value;
    }

    private _gender: string;
    public get gender(): string {
        return this._gender;
    }
    public set gender(value: string) {
        this._gender = value;
    }

    private _country: string;
    public get country(): string {
        return this._country;
    }
    public set country(value: string) {
        this._country = value;
    }

    private _role: string;
    public get role(): string {
        return this._role;
    }
    public set role(v: string) {
        this._role = v;
    }

    private _date: string;
    public get date(): string {
        return new Date(this._date).toString();
    }
    public set date(v: string) {
        this._date = v;
    }
}
