module.exports = (sequelize,dataTypes) => {

    const alias = 'Movie';
    const cols = {

        id:{
            type:dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        title:{
            type:dataTypes.STRING,

        },
        length:{

            type:dataTypes.INTEGER,

        },

        /*rating:{

        },
        awards:{

        },*/



    }

    const config = {
        timestamps: true
    }

    const Movie = sequelize.define(alias,cols,config);



    return Movie;


}