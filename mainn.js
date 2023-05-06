var Koloda = new Array(); 

var i = 1; 
while (i > 0) {
    var Karta = new Image();
    Karta.src = i + ".png";
    Koloda.push(Karta);
    i--;
    }

Koloda.shuffle();

document.getElementById("KolodaImg").style.display = "block";

Array.prototype.shuffle = function() {
    var i=this.length, j, tmp;
    if (i==0){ return this;}
    while(--i){
        j = Math.floor( Math.random()*(i+1));
        tmp = this[i]; this[i]=this[j]; this[j]=tmp;
    }
    return this;
}
                