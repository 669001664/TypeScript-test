"use strict";
// interface IList{
//     length: number;
//     add(elem: string): void;
// }
var List = /** @class */ (function () {
    function List() {
        this.elements = [];
    }
    List.prototype.add = function (elem) {
        this.elements.push(elem);
    };
    Object.defineProperty(List.prototype, "length", {
        get: function () {
            return this.elements.length;
        },
        enumerable: false,
        configurable: true
    });
    return List;
}());
var list1 = new List();
list1.add('adn');
list1.add('ada');
console.log(list1.length);
