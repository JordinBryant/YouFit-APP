const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://exercisedb.p.rapidapi.com/exercises",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "9dd0bfdfdamsh1f88c2a9be7d02cp14f015jsn94a712987d04",
		"X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
	}
};



function shuffleWorkout() {
    let exerciseData;
    $.ajax(settings).done(function (response) {
        exerciseData = response;
        console.log(exerciseData[2]);
        
        const shuffle = Math.floor(Math.random()*exerciseData.length);
        //console.log(shuffle);
    
        // retrieve the element on the page from HTML
        bodyPart = document.getElementById("bodyPart");
        
        //replace the text of that element with the api info
        bodyPart.innerHTML = exerciseData[shuffle].bodyPart;
    
        workoutImg = document.getElementById("workout-img");
        workoutImg.src = exerciseData[shuffle].gifUrl;
    });
}
 