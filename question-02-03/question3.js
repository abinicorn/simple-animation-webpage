window.addEventListener("load", function () {

    // TODO (B) Create a function called addCard(), which takes a single concert as an argument and adds a card to the
    // #container div to display that concert to the user. For reference, a card's HTML looks like:
    /*

        <div class="card">
            <div class="card-header"><a href="CONCERT_URL"><img class="card-image" src="./assets/CONCERT_IMAGE_NAME"></a></div>
            <div class="card-body">
                <h1 class="card-title">CONCERT_NAME</h1>
                <p class="card-text">CONCERT_DESCRIPTION</p>
            </div>
        </div>

    */

    function addCard(concertItem){
        const container = document.querySelector("#container");
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML += `
        <div class="card-header"><a href="${concertItem.url}"><img class="card-image" src="./assets/${concertItem.imageName}"></a></div>
        <div class="card-body">
            <h1 class="card-title">${concertItem.name}</h1>
            <p class="card-text">${concertItem.description}</p>
        </div>`;

        container.appendChild(div);
    }

    // TODO (C) Loop through all concerts in the concerts array (see question3-concerts.js). For each one,
    // call the addCard() function, supplying that concert as a parameter.
    concerts.forEach(function(concertItem, index){

     /* question 3 part 2 solution */
    const timer=setTimeout(function(){
            addCard(concertItem);
        },index*200);
        
    });

});