// javacript document
function showpic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    var text = whichpic.getAttribute("title");
    var despriction =document.getElementById("description");
    despriction.firstChild.nodeValue = text;
}