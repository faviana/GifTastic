//Initialize an array where gifs will be store
var topics = ["Goat","Giraffe","Elephant","Lion"];
// console.log(topics);

//function re-renders the HTML to display the appropriate content
function gifInfoDisplay(){

    var gif = $(this).attr("data-name");  

    //Querying the ghiphy API url
    var queryURL = "https://api.giphy.com/v1/gifs/search"; 
            
// AJAX call for the specific gif button being clicked 
$.ajax({
    url: queryURL,
    method: "GET",
// Stablish parameters
    data: {
        q: gif,
        api_key: "8kYPqbXOEYK5LlWD2GWe7DglaDEgCPKo",
        rating: pg,
        limit: 10
    }
}).done(function (response){
    var results = response.data;
    // console.log(results);
    console.log(response);

// Dinamically creating a div that is going to hold gifs
    var gifDiv = $("<div class='gifNewDiv'>");
    
//Creating a <p> element to display text
    var gifRatingText = $("<p>").text("Rating: " + results[i].rating);

//Append gif and text
gifDiv.append(gifRatingText);

    
//------------- IMAGE  ------------------
/*Dynamically create an image tag that holds
    *var gifImage = $("<img>").
*add attribute src
    *gifImage.attr("src",imageURL);
*add data attribut data-still
    *gifImage.attr("data-still", retrieve still url from API)
*add data attribut data-animated
    *gifImage.attr("data-animated", retrieve animated url form API)
*add data attribut data-state
    *gifImage.attr("data-state","still")
*add class
    *gifImage.addClass("gifMovement")
*append image to gif
    *gifDiv.append(gifImage);
*/   
});

/*
*listening event on gif images
    *$(".gif").on("click", function () {
*Get the current value of the data attribute data-state
    *var state = $(this).attr("data-state");
*if data-state is still, change the src attribute to animated when clicked and visa versa
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});
 */

}

//Function to display button data
function gifRenderButton(){

//Empty search before starting a new search
    $("#gifUser").empty();

//Looping through the array topics
//***try looping with JQuery .forEch***
    for (var i = 0; i < topics.length; i++) {

//Dinamically creating a button for each element in the array
        var gifArrayButton = $("<button>");

//Assigning a class to our gif buttons
        gifArrayButton.addClass("gifNewButton");

//Adding data attribute
        gifArrayButton.attr("data-gif", topics[i]);

//Assigning text to the button from the array
        gifArrayButton.text(topics[i]);

//Add button to div gifUser
        $("#gifUser").append(gifArrayButton);
    }
}

//Add an event listener, click event
$("#gifAdd").on("click", function(event){

//This method prevents the button to submit a form
    event.preventDefault();

//Retrieve text from input box
    var gifValue = $("#gifInput").val().trim();

//Function will execute everytime event is triggered
    $("gifInput").val("").focus();

//Add gif from input to array
    topics.push(gifValue);

//Calling the function that processes the gif array
    gifRenderButton();
});

//Add an event listener to all gifs with class gifNewDiv
$(document).on("click", ".gifNewDiv", gifInfoDisplay);

//Call function to display initial buttons
gifRenderButton();




