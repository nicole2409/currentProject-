var number=0;
var start;
var startSound;

// funkcja zmieniająca zdjęcia na stronie start
function changeFoto(){
  number++;
  if(number>3) {

    document.clearTimeout(start);
   }

  var plik = "<img src=\"img/"+number+".jpg\" width=\"100%\" />";
  document.getElementById("startPage").innerHTML= plik;
  start=setTimeout("changeFoto()",1500);
  }


// funkcja odtwarzająca dżwięk aparatu
function playSound(){
  if(number>3) {

    document.clearTimeout(startSound);


  }
var sound =" <embed src=\"c.mp3\" width=\"0\" height=\"0\" autoplay=\"true\" loop=\"true\"></embed>";
document.getElementById("sound").innerHTML= sound;
startSound=setTimeout(" playSound()",1500);
}




// wywołanie funkcji
document.addEventListener("load",changeFoto());
document.addEventListener("load",playSound());


//funkcja zmieniająca strone ze startowej na główną strone www
document.querySelector(".my-button").addEventListener("click",function(){

  document.querySelector("#startPageBox").style.display="none";
  document.querySelector("#mainPage").style.display="block";

});
