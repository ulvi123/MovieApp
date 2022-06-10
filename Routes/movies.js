const express = require("express");
const router  = express.Router();
const api_key = "0802ed447e4f32ed562cc137b5a36636";
const request = require("request");
const Movie = require("../models/movie");
const mongoose = require("mongoose");

//Index page where all movies should be displayed
router.get


//Movies result display page-done
router.get('/search_results', (req, res)=>{
	let query = req.query.search;
	// const search = Movie.findOne({'title':query});
	// consol.log(search)

		request("https://api.themoviedb.org/3/search/movie?api_key=0802ed447e4f32ed562cc137b5a36636&query="+query,(error, response, body)=>{
		if(error){
		console.log(error);
		}
		else{
			console.log(response);
		let data = JSON.parse(body);
			console.log(data);
		res.render('search_results', {data: data, querySearch: query});
		}  
		})
})




//New movie creation page-Done
router.get("/Movies/new", (req,res) => {
	res.render("movie_new");
});





//Show single_movie_info page-partly
router.get('/single_movie_info/:id', (req,res) =>{
   
		const movieId =req.params.id;
	    // let query = req.query.search;

	
		request("https://api.themoviedb.org/3/movie/"+ movieId +"?api_key=0802ed447e4f32ed562cc137b5a36636",(error,response,body)=>{
	    
		let data  = JSON.parse(body);
		res.render("single_movie_info",{data:data});
	})    
})



//Creating and adding a new movie to the db- a new single_movie_info-
router.post("/Movies",(req,res) => {	
	const newMovie = {
		title:req.body.title,
		id:req.body.id,
		overview:req.body.overview,
		release_date:req.body.release_date,
		popularity:req.body.popularity,
		vote_average:req.body.vote_average,
		poster_path:req.body.poster_path,
		author:req.body.author,
		publisher:req.body.publisher
	}
	
	
	let response  = {
		title:req.body.title,
		poster_path:req.body.poster_path,
		overview:req.body.overview,
	}
	
	
	Movie.create(newMovie)
	.then((movie)=>{
		console.log(movie);
		res.render("Movies",{response:response});

	})
	.catch((err)=>{
		console.log(err);
		res.redirect("/main");
	})
	console.log("endpoint is hit")
})
	

module.exports = router;