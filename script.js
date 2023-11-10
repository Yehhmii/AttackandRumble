// to show the second div
const divShow =  document.getElementById('show');
const divHide =  document.getElementById('hide');

function showDiv(){
    divHide.style.display = 'none';
    divShow.style.display = 'block';
};

// to display loading 
function displayLoading() {
    document.getElementById("loading").style.display = "block";
    document.getElementById("results").innerHTML = " ";
}

// to hide loading image and display result
function hideLoading() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("results").innerHTML = winnerResult ;

}

//to select players
document.getElementById("selectPlayer").addEventListener("click", () => {
    const selectedPlayers = document.querySelector('input[type="radio"]:checked');

    if (selectedPlayers) {
        var selectedValue = selectedPlayers.value;

        // an array of all players
        const players = ["Mr-Finn", "Trevor-Belmont", "Upper-Moon", "Nobara-Kugisaki", "Thorfinn"]

        // removing the already selected player
        const remainingPlayers = players.filter((player) => player !== selectedValue);

        if (remainingPlayers.length > 0) {
            //randomly selecting the second player
            var randomPlayer = remainingPlayers[Math.floor(Math.random() * remainingPlayers.length)];

             // to show images of the selected players
            const images = document.getElementById("sPlayersimg");
            images.innerHTML =`
            <img src="./images/${selectedValue}.png">
            <img src="./images/${randomPlayer}.png">
            `;

            // to display our players
            const textSelected = ` <p> ${selectedValue}. </p> <h3> VS </h3> <p> ${randomPlayer} </p>`;
            document.getElementById('sPlayers').innerHTML = textSelected;
        } else {
            document.getElementById('sPlayers').textContent = "Try Again";
        }
    } else {
        document.getElementById('sPlayers').textContent = "Please select a Player.";
    }


    
    //  to select a winner
    document.getElementById("fight").addEventListener("click", () => {
        displayLoading() ; // to display loading
        
         // an object to store the power ratings
         const powerRatings = {
            "Mr-Finn": 95,
            "Trevor-Belmont": 180, 
            "Upper-Moon": 175, 
            "Nobara-Kugisaki": 150,
            "Thorfinn": 115,
        };

        const selectedPower = powerRatings[selectedValue];
        const randomPower = powerRatings[randomPlayer];

        let winner;
        const randomValue = Math.random();
        if (randomValue < 0.9 * (selectedPower / (selectedPower + randomPower))) {
            winner = selectedValue;
        } else {
            winner = randomPlayer;
        }

        //display results
        setTimeout(() => {
            var winnerResult = `<b>Winner: </b>    ${winner}`;
            document.getElementById("results").innerHTML = winnerResult;   
            hideLoading(winnerResult);
        }, 3000);
   

    });
    
});

