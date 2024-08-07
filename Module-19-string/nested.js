const college = {
    name: 'vnc',
    class : ['10','11','12'],
    events : ['science fair','book fair','Bijoy Dibosh'],
    unique : {
        color: 'blue',
        color2: 'red',
        result : {
            gpa : '5.00',
            result : 'first',
        }
    }

}

// console.log(college.events[2]);  
console.log(college.unique.result['gpa']);

college.events[1] = "Annual Sports";
college['events'].push("Summer Holidays");

for(let i = 0; i < college.events.length; i++){
    console.log(college.events[i]);
}

delete college.class;

console.log(college);