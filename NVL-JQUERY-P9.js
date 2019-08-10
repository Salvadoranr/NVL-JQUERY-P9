var divFather= $("#container").children("div");
var heroesAfter= $("#heroes").nextAll();

function loop(array,attr,field){

    for (let i = 0; i < array.length; i++) {
        array.eq(i).attr(attr,array[i][field]);
        
    }
}

function findQueen(){
    if(!($("div.internacional").find("p").filter("#queen")[0])){
        $(" div.ochenta").eq(0).append('<p id="queen"> Queen </p>');
    }
}

$("#heroes").parentsUntil("#container")   

loop(divFather,"class","id");
loop(heroesAfter,"id","innerText");
findQueen();

