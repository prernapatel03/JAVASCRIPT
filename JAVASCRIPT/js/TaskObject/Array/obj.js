// const obj = {
//     name: "prerna",
//     age : 21,
//     sub : [ {"science" :[ "maths" , "phy" , "chemi"] } , {
//         "extra" : [
//         "ss" , "guj"
//             ]}]
// }
// let str = "maths"
// let data = obj.sub.map(e=>e.science)
// console.log(data[0][0])
// console.log(data[0][0] === str)

////////////////////////////////////////////////////////////////////////////////////////////////////////

// var obj = {
//   webSiteName: "StackOverFlow",
//   find: "anything",
//   onDays: [
//     "sun", // Object "obj" contains array "onDays"
//     "mon",
//     "tue",
//     "wed",
//     "thu",
//     "fri",
//     "sat",
//     { name: "jack", age: 34 },
//     // array "onDays"contains array object "manyNames"
//     { manyNames: ["Narayan", "Payal", "Suraj"] },
//   ],
// };

// let data = obj.onDays.find((e) => e.manyNames);
// let d = data.manyNames;
// const c = d[d.length-2]
// console.log(c)

// // d.splice(1, 1);
// // console.log(d);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

let cars = [
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
  {
    color: "red",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 5,
  },
];

// const clr = cars.find((e)=> e.color == 'red')
// console.log(clr.color)

////////////////////////////////////////////////////////////////////////////////////////////////////////

// let car = {
//     "color": "red",
//     "type": "cabrio",
//     "registration": new Date('2016-05-02'),
//     "capacity": 2
//   }

//   const d = car.registration
//   console.log(d)

///////////////////////////////////////////////////////////////////////////////////////////////


// const company = {
//   name: "Acme Inc.",
//   departments: [
//     {
//       name: "Engineering",
//       employees: [
//         { name: "John Doe", role: "Software Engineer" },
//         {
//           name: "Jane Smith",
//           role: "Team Lead",
//           reports: [
//             { name: "Alice", role: "Junior Developer" },
//             { name: "Bob", role: "QA Tester" },
//           ],
//         },
//       ],
//     },

//     {
//       name: "Marketing",
//       employees: [{ name: "Sarah Lee", role: "Content Manager" }],
//     },
//   ],
// };

// // const d = company.departments.map((e) => e.employees.map((e) => e));

// // console.log(d);

// const d = company.departments.flatMap((e) => e.employees.flatMap(e=>e.name));

// console.log(d);

///////////////////////////////////////////////////////////////////////////////////////////

let complexArray = [
    {
      name: "John",
      age: 30,
      address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
      },
      hobbies: ["reading", "traveling", "cooking"],
      friends: [
        { name: "Alice", age: 28 },
        { name: "Bob", age: 32 },
        { name: "Emily", age: 29 }
      ]
    },
    {
      name: "Emily",
      age: 25,
      address: {
        street: "456 Elm St",
        city: "Los Angeles",
        country: "USA"
      },
      hobbies: ["painting", "hiking", "photography"],
      friends: [
        { name: "David", age: 27 },
        { name: "Sophia", age: 26 },
        { name: "Michael", age: 24 }
      ]
    }
  ];

//   const d = complexArray.find(e=> e.address.city)

///////  hobbies

// const d = complexArray.flatMap((e)=>e.hobbies)
const d = complexArray.find((e)=>e.hobbies = 'reading')
//   console.log(d)
  const d1 = d.friends.flatMap(e=>[e.name])
//   console.log(d1)

  // const add = complexArray.flatMap((e)=> e.friends.filter((e)=> e.name == 'Alice'))
//  // console.log(add)

  // for (const i in add) {
    
  //     console.log(add[i].name)
  // }



const adrs = complexArray.filter((e)=>e.address.street)
console.log(adrs.map((e)=> e.address));