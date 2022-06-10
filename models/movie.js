const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
	title:String,
	id:Number,
	overview:String,
	release_date:String,
	popularity:Number,
	vote_average:Number,
	poster_path:String,
	author:String,
	publisher:String,
	
});

const Movie  = mongoose.model("movie", movieSchema);

module.exports = Movie;