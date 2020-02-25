/*
    Counting characters in a input box 

    1. Using jQuerry 
*/

function countChar(){
    var str=$('#str').val();
  
    var len=str.length;
   


    //Count words in input box
    var words = $.trim($("#str").val()).split(" ");
    var numword= words.length

    $('#output').html("Input has  " + len +" characters and  "+numword+ " words")



   
    return(false);
}
$('#btn').click(countChar)

/*
2. Using Javascript document.object 

*/

/*
var len = function(msg){
    document.getElementById("output").innerHTML = "Lenght is " +msg
}
document.getElementById("btn").onclick=function(event){
   len( document.getElementById("str").value.length)
}
*/