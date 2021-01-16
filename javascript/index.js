var rndNum1 = Math.floor(Math.random()*6)+1;
var rndNum2 = Math.floor(Math.random()*6)+1;
var img1Loc = "images/dice"+rndNum1+".png";
var img2Loc = "images/dice"+rndNum2+".png";
document.querySelector(".img1").setAttribute("src", img1Loc);
document.querySelector(".img2").setAttribute("src", img2Loc);
if(rndNum1>rndNum2){
    document.querySelector("h1").textContent="Player 1 Wins";
}
else if(rndNum2>rndNum1){
    document.querySelector("h1").textContent="Player 2 Wins";
}
else{
    document.querySelector("h1").textContent="Draw";
}
document.querySelector("button").addEventListener("click", handleClick);
function handleClick(){
    location.reload();
}