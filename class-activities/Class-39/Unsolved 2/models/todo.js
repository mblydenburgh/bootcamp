module.exports = (sequelize,DataTypes) => {
    const Todo = sequelize.define('todo',{

            text: {
                type:DataTypes.STRING,
                validate:{
                    isAlphanumeric: true,
                    len:[3,50]
                }
            },
            complete: {
                type: DataTypes.BOOLEAN
            }


    });
    return Todo;
}