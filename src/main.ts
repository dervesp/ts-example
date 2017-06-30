import {MyClass} from "./ModuleWithClass";
import {AskName} from "./ModuleWithFunction";

const myClass1 = new MyClass("Rabbit");
const myClass2 = new MyClass("Cat");

AskName(myClass1);
AskName(myClass2);