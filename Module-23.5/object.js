const player = {
    name : 'Rohit',
    age: 30,
    address: 'Mumbai',
    isCaptain: true,
    role:'Batsman',
    team: ['India','Mumbai','Decan Chargers'],
    trophies :[{name : 'ipl',year : 2013, team:'mumbai'}],
    career: function(){
        return 'One Of the finest Batsman';
    },
    state:{
        platForm:'international',
        runs:30000,
        odi:{
            runs:20000,
            century:31,
        }
    }
}

console.log(player.team[2]);