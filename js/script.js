// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella,
//  la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.




let buttonGame = document.getElementById('button');

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.



buttonGame.addEventListener('click', function () {
    function getNewSquare(){
        const newSquareElement = document.createElement('article');
        newSquareElement.classList.add('item-square');
        return newSquareElement;
    }
    
    
    const mainContentEl = document.querySelector('main div.main-content');
    
    for (let i = 1; i <= 100; i++){
        const currentSquare = getNewSquare();


        // Ogni cella ha un numero progressivo, da 1 a 100.

        const squareContent = i
    
        currentSquare.innerHTML += `<span> ${squareContent} </span>`;
    
        currentSquare.addEventListener('click', function (){
            currentSquare.classList.toggle('clicked');
            console.log(squareContent);
        });
        mainContentEl.appendChild(currentSquare);
    }

});

