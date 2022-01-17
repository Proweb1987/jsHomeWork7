
   
// let arr = [
//     {
//         name:'Петя',
//         age:25
//     },
//     {
//         name:'Вася',
//         age:30
//     },
//     {
//         name:'Маша',
//         age:29
//     }
// ];

// let sum = arr.reduce((acc,item) => acc + item.age,0)
// let average = sum / arr.length
// console.log(`сумма всех age= ${sum}`);
// console.log(`среднее арифметическое = ${average}`);



let users = [

    { name: "Вася", surname: "Пупкин", id: 1 },
    { name: "Петя", surname: "Иванов", id: 2 },
    { name: "Маша", surname: "Петрова", id: 3 }
];
let fullname = users.map((el) => `${el.name} ${el.surname} ${el.id}`)
console.log(fullname);












