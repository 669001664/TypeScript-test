// interface IList{
//     length: number;
//     add(elem: string): void;
// }


// class List implements IList{
//     elements: string[] = []
//     add(elem: string): void {
//         this.elements.push(elem);
//     }
//     get length() {
//         return this.elements.length
//     }
// }

// let list1 = new List()
// list1.add('adn')
// list1.add('ada')
// console.log(list1.length);

//泛型
interface IList<T>{
    length: number;
    add(elem: T): void;
}


class List<T> implements IList<T>{
    elements: T[] = []
    add(elem: T): void {
        this.elements.push(elem);
    }
    get length() {
        return this.elements.length
    }
}

let list1 = new List<string>()
list1.add('adn')
list1.add('ada')
console.log(list1.length);