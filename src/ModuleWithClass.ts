export class MyClass {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    sayName(): string {
        return "My name is" + this._name;
    }
}
