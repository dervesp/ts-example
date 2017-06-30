import {MyClass} from "./ModuleWithClass";

export function AskName(myClass: MyClass) {
    console.log(myClass.sayName());
}