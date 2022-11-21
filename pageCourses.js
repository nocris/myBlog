//**********   Compteur   **********//

//    Margin   //
const button = document.querySelectorAll('.voir-le-cours')
let disp = document.getElementById("display");
let count = 0;


button.forEach(element => {
    element.addEventListener("click", function () {
        count++;
        disp.innerHTML = count;
    })
});
