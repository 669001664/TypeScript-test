var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = 5;
var b = 'abc';
var c = true;
var arr = [11, 22, 33];
arr.push(true);
var tuple = ['abc', 123, true];
tuple.push('bbbb');
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var gender = Gender.Female;
// if (gender == Gender.Female) {
// } else {
// }
var x = 5;
x = 'abc';
console.log(x);
var input = prompt('请输入信息：');
var arr1 = [123, 'abc', true];
console.log(a, b, c, arr);
console.log(tuple);
// function test(): void {
// }
// function test(): never{
//     throw new Error('发生错误')
//     while (true) {
//     }
// }
var x1 = 5; //类型推论为 number
var x2 = 'abc'; //string
var x3 = [123, 23, 433]; //number数组
var x4 = ['abc', 123, true];
x4.push(5);
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cat;
}(Animal));
var Finsh = /** @class */ (function (_super) {
    __extends(Finsh, _super);
    function Finsh() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Finsh;
}(Animal));
var arr2 = [new Dog(), new Cat()]; //(Dog | Cat)
arr2.push(new Finsh());
console.log(arr2);
window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.button); //<- Error
};
export {};
