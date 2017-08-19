$(document).ready(function(){

    for(recipeName in recipeData){
        var img = "<img src='" + recipeData[recipeName].img+"''>";
        var link = "<a class = 'recipeLink' href='"+recipeData[recipeName].url+
        "'><div class='recipeCard'>"+"<div class='recipeNameCard'>"+recipeName+"</div>"+img+"</div></a>";
        $("#recipes").append(link);
    }
});