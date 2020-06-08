const db = require('../database/models/index.js');
const sequelize = db.sequelize;
const Movie = db.Movie;



const moviesControllers = {

    index:function(req,res){

        Movie.findAll()
             
             .then(function(results){
                let moviesAll=results;
                return res.render('movies',{moviesAll});
             })

    },

    detail:function(req,res){

        Movie.findByPk(req.params.id)

            .then(function(results){
                //let moviesAll = results;
                res.render('detail',{results:results});
            })




    },

    new:function(req,res){
        Movie.findAll({
            order:[
                ['release_date','DESC']
            ]
        })        
                 .then(function(results){
                    let moviesAll=results;
                    return res.render('new',{moviesAll});
                 })
        
    },

    recomended:function(req,res){

        Movie.findAll({

            where:{
                rating:{[db.Sequelize.Op.gt]:0}

            },
            order:[ 

                ['rating','DESC'],
            ]})
                    
                 .then(function(results){
                    let moviesAll=results;
                    return res.render('recomended',{moviesAll});
                 })


     },

     /*search:function(req,res){

        Movie.findAll({

            where:
        })
         
     }*/   // este punto no lo pude sacar!! :( 
}


module.exports=moviesControllers;