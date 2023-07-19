// To provide Functionality to the Movie Info Page

//Strict mode enforces stricter rules for JavaScript code, improving code quality and catching common errors.
"use strict";
(function () {
  const title = document.getElementById("title");
  // This line retrieves an element with the id attribute of "title" from the document (HTML page) using the getElementById
  title.innerHTML = localStorage.getItem("movieName");
  // It sets the innerHTML property of the title element to the value stored in the browser's localStorage under the key "movieName"
  const year = document.getElementById("year");
  const runtime = document.getElementById("runtime");
  const rating = document.getElementById("rating");
  const poster = document.getElementById("poster");
  const plot = document.getElementById("plot");
  const directorsName = document.getElementById("director-names");
  const castName = document.getElementById("cast-names");
  const genre = document.getElementById("genre");

  // The following lines declare and assign variables to various elements in the HTML document


  fetchMovies(title.innerHTML);
// This line calls the fetchMovies function, passing the innerHTML value of the title element as an argument.
//  It initiates the process of fetching movie data from the Open Movie Database (OMDb) API based on the movie title.
  async function fetchMovies(search) {
    const url = `https://www.omdbapi.com/?t=${search}&type=movie&apikey=d19cd846`;
    // It declares a constant variable url that holds the URL string for making an API request to the OMDb API. 
    // The search parameter is interpolated into the URL to search for the movie with the specified title.
    
    
    // Try and Catch Block
    // This code block sets up exception handling for potential errors that may occur during the execution of the asynchronous code. 
    // If any error occurs, it will be caught in the catch block and logged to the console.
    try {
      const response = await fetch(url);
      // This line makes an HTTP request to the OMDb API using the fetch function
      // The await keyword is used to pause the execution of the function until the API response is received and The response is assigned to the response variable.
      const data = await response.json();
//  It waits for the response to be resolved as JSON data by using the json method. 
// The parsed JSON data is assigned to the data variable.

// The following lines update the HTML content of various elements with data retrieved from the API response:
      year.innerHTML = data.Year;
      runtime.innerHTML = data.Runtime;
      rating.innerHTML = `${data.imdbRating}/10`;
      poster.setAttribute("src", `${data.Poster}`);
      plot.innerHTML = data.Plot;
      directorsName.innerHTML = data.Director;
      castName.innerHTML = data.Actors;
      genre.innerHTML = data.Genre;
    } catch (err) {
      console.log(err);
      //  If an error occurs during the execution of the try block, it will be caught here, and the error message will be logged to the console.
    }
  }
})();
