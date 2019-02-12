const Sequelize = require('sequelize');
const connection = new Sequelize('starwars','root','#SadieMombo1114',{
    host:'127.0.0.1',
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
});

const Character = connection.define('character',{
    routeName: {type: Sequelize.STRING},
    name: {type: Sequelize.STRING},
    role: {type: Sequelize.STRING},
    age: {type: Sequelize.INTEGER},
    forcePoints: {type: Sequelize.INTEGER}
});

Character.sync({force:true}).then(()=>{
    return Character.create({
        routeName: '/test',
        name: 'Test',
        role: 'Test',
        age: 42,
        forcePoints:0
    })
})

module.exports = Character