const data_map = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];

console.log(
  "1) map :",
  data_map.map((e) => e)
);

const data_forEach = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];

  data_forEach.forEach((e)=>console.log("2) forEach :" ,e))


const data_filter = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
  { roll_no: 5, name: "prerna", moNo: "9874152630" },
];

console.log(
  "3) filter :",
  data_filter.filter((e) => e.roll_no == "1" && e.name == "prerna")
);

const data_find = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
];

console.log(
  "4) find :",
  data_find.find((e) => e.name == "prerna")
);

const data_length = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];

console.log("5) length :", data_length.length);

const data_findIndex = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },

  { roll_no: 1, name: "prerna", moNo: "9874152630" },
];

console.log(
  "6) data_findIndex  :",
  data_findIndex.findIndex((e) => e.roll_no == "1")
);

const data_concat = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];

const data2 = [
  {
    roll_no: 1,
    name: "prerna",
    moNo: "9874152630",
  },
];

console.log("7)  data_concat  :", data_concat.concat(data2));

const data_push = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];

const data3 = [
  {
    roll_no: 6,
    name: "prerna",
    moNo: "9874152630",
  },
];

console.log("push   :", data_push.push(data3.map((e) => e)[0]));

console.log("8)  data_push   :", data_push);

const data_pop = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];

console.log("pop   :", data_pop.pop());

console.log("9)  data_pop  :", data_pop);

const data_entries = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];

const enties = data_entries.entries();
for (let y of enties) {
  console.log("10) enties :", y);
}

const keys = data_entries.keys();
for (let y of keys) {
  console.log("11) keys :", y);
}

const values = data_entries.values();
for (let y of values) {
  console.log("12) values :", y);
}

const data_at = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];

console.log("13) at :", data_at.at(0));

console.log(
  "14) data_isArray :",
  Array.isArray([{ roll_no: 1, name: "prerna", moNo: "9874152630" }])
);

// const from = [{ roll_no: 1, name: "prerna", moNo: "9874152630"
// },]

// for(let i of from){
//   console.log(i.name)
// }
console.log(
  "15) from :",
  Array.from([{ roll_no: 1, name: "prerna", moNo: "9874152630" }])
);

const data_spread_operator = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];

console.log("16)  data_spread_operator :", [
  ...data_spread_operator,
  { roll_no: 6, name: "pqr", moNo: "78256299823" },
]);

const data_includes = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];

console.log(
  "17)  data_includes :",
  data_includes.includes({ roll_no: 5, name: "pqr", moNo: "78256299823" })
);

const data_delete = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];

console.log(
  "18)  data_delete :",
  delete data_delete[4],
  data_delete.filter((e) => e)
);

const data_some_every = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];

console.log(
  "19)  data_some :",
  data_some_every.some((e) => e.roll_no == "1")
);

console.log(
  "20)  data_every :",
  data_some_every.every((e) => e.roll_no == "1")
);

const data_string = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];

console.log("21) data_string :", data_string.map(e=>e.roll_no).toString());

const data_splice = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];

console.log("22) data_splice ", data_splice.splice(3, 2), data_splice);

const data_join = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];

console.log("23)  data_join ", data_join.join(","));

const data_shift = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];

console.log("24)   data_shift ", data_shift.shift(), data_shift);

const data_unshift = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];
console.log(
  "25)   data_unshift ",
  data_unshift.unshift({ roll_no: 1, name: "prerna", moNo: "9874152630" }),
  data_unshift
);

const data_sort = [
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];
console.log("26) data_sort ", data_sort.map((e) => e.roll_no).sort());

// console.log("26) data_sort " ,   data_sort.map((e)=> e.roll_no).sort());

const data_flat = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];
console.log("27) data_flat ", data_flat.flat());

const data_flatMap = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];
console.log(
  "28) data_flatMap ",
  data_flatMap.flatMap((e) => e)
);

const data_reduce = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];

function Reduce(x, y) {
  return (x += y.roll_no);
}
console.log("29) data_reduce ", data_reduce.reduce(Reduce, 0));

const data_reduce_right = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];

function ReduceRight(x, y) {
  return x - y.roll_no;
}
console.log(
  "30) data_reduce_right ",
  data_reduce_right.reduceRight(ReduceRight, 0)
);

const data_reverse = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];

console.log("31) data_reverse ", data_reverse.reverse());

const data_findLast = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];

console.log(
  "32) data_findLast ",
  data_findLast.findLast((e) => e.roll_no < 2)
);

const data_findLastIndexOf = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];

console.log(
  "33) data_findLastIndexOf ",
  data_findLastIndexOf.findLastIndex((e) => e)
);

const data_indexOf = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];

console.log(
  "33) data_indexOf :",
  data_indexOf.indexOf((e) => (e.roll_no = 1))
);

console.log(
  "34) data_lastIndexOf :",
  data_indexOf.lastIndexOf((e) => e)
);
// const Of = Array.of(  { roll_no: 5, name: "pqr", moNo: "78256299823" } )

// for(let a in Of){
//   console.log(Of[a].name)
// }

console.log(
  "35) data_ArrayOf :",
  Array.of({ roll_no: 5, name: "pqr", moNo: "78256299823" })
);

const data_toReversed = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  ,
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];

console.log("36) to_reverse :", data_toReversed.toReversed());

const data_toSpliced = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];
console.log("37) toSpliced :", data_toSpliced.toSpliced(1, 1));

//  with

const data_with = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];
console.log(
  "38) with :",
  data_with.with(3, { roll_no: 4, name: "reema", moNo: "7825625v223" })
);

// copyWithin
const data_copywithin = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];

console.log("39) copyWithin :", data_copywithin.copyWithin(3, 1));

const data_fill = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];
console.log(
  ":40) fill:",
  data_fill.fill({ roll_no: 3, name: "geeta", moNo: "7825621123" })
);
const data_slice = [
  { roll_no: 1, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];
console.log(
  "41) slice:", 
  data_slice.slice(0,1) , data_slice
);

const data_toLocaleString = [
  { roll_no: 15222, name: "prerna", moNo: "9874152630" },
  { roll_no: 2, name: "mansi", moNo: ["963251425"] },
  { roll_no: 3, name: "geeta", moNo: "7825621123" },
  { roll_no: 4, name: "xyz", moNo: "7825625v223" },
  { roll_no: 5, name: "pqr", moNo: "78256299823" },
];
console.log(
  "42) toLocalString:", 
  data_toLocaleString.map((e)=>e.roll_no).toLocaleString()
);