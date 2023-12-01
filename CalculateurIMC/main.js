window.onload = () => {
    let button = document.querySelector("#btn");
  
    // Fonction pour 
    button.addEventListener("click", CalculerIMC);
};

function CalculerIMC () {

    let taille = parseInt(document.querySelector("#taille").value)
    let poids = parseInt(document.querySelector("#poids").value)

    let result = document.querySelector("#result")

    if (taille === "" || isNaN(taille)) 
        result.innerHTML = "Veuillez indiquer une taille valide.";
  
    else if (poids === "" || isNaN(poids)) 
        result.innerHTML = "Veuillez indiquer un poids valide.";
   
    else {
        let IMC = (poids / ((taille * taille) / 10000)).toFixed(2);

        if (IMC < 18.6) result.innerHTML =
        `Votre IMC est de ` + IMC + ' ,votre êtes en sous-poids';

        else if (IMC >= 18.6 && IMC < 24.9) 
        result.innerHTML = 
        `Votre IMC est de ` + IMC + ' ,vous avez une corpulence normale.';

        else if  (IMC >= 25 && IMC < 29.9)
        result.innerHTML =
        `Votre IMC est de ` + IMC + ' ,vous êtes en surpoids';

        else if  (IMC >= 30 && IMC < 34.9)
        result.innerHTML =
        `Votre IMC est de ` + IMC + ' ,vous êtes dans la catégorie obésité classe 1';

        else if  (IMC >= 35 && IMC < 39.9)
        result.innerHTML =
        `Votre IMC est de ` + IMC + ' ,vous êtes dans la catégorie obésité classe 2';

        else if (IMC >= 40)
        result.innerHTML = 
        `Votre IMC est de ` + IMC + ' ,vous êtes dans la catégorie obésité classe 3'; 
    }
}