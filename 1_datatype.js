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
export {};
