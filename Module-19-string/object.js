const bottle = {
  brand: "fresh",
  price: 45,
  color: "white",
};

const subject = {
  name: "Bangla",
  teacher: "Minhaj",
  exam: "10 feb",
  chaptar: ["first", "third", "fifith"],
  exam: {
    type: "final-exam",
    mark: 100,
  },
};

// console.log(typeof(bottle));

const { name, teacher, exam, chaptar } = subject;

chaptar.filter((c, i) => console.log(c === "first"));

console.log(name, teacher, exam);

// for( i =0 ; i < bottle.length; i++){
//     console.log(bottle[i]);
// }
