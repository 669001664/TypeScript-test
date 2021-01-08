let a: number = 5;
let b: string = 'abc'
let c: boolean = true
let arr: number[] = [11, 22, 33]
arr.push(true);
let tuple: [string, number, boolean] = ['abc', 123, true]
tuple.push('bbbb')
enum Gender {
    Male,
    Female
}
let gender = Gender.Female;
// if (gender == Gender.Female) {
    
// } else {
    
// }
let x: any = 5
x = 'abc'
console.log(x);

let input: any = prompt('请输入信息：')

let arr1: any = [123,'abc',true]
console.log(a, b, c, arr);
console.log(tuple);
// function test(): void {

// }
// function test(): never{
//     throw new Error('发生错误')
//     while (true) {
        
//     }
// }
let x1 = 5//类型推论为 number
let x2 = 'abc'//string
let x3 = [123,23,433]//number数组
let x4 = ['abc', 123, true]
x4.push(5)
class Animal{ }
class Dog extends Animal{}
class Cat extends Animal{}
class Finsh extends Animal{}
let arr2 = [new Dog(), new Cat()]//(Dog | Cat)
arr2.push(new Finsh())
console.log(arr2);


window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.button);  //<- Error
};
export {}