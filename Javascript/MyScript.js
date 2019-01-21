//     Facebook plugin
        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/bg_BG/sdk.js#xfbml=1&version=v3.2';
                fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));

$(document).ready(function () {

    var orderBtns = document.getElementsByClassName("view");

    for (var i = 0; i < orderBtns.length; i++) {
        orderBtns[i].addEventListener('click', openShoe, false);

    }
});

function openShoe(event) {
    var shoeData = {}
    var viewButton = event.target;
    var divOrder = viewButton.parentNode;
    // sibling can be used here 

    var singleElement = divOrder.parentNode;
    var childrenArray = singleElement.children;
    for (var i = 0; i < childrenArray.length; i++) {
        //Vzimame takushtiq element
       var currentElement = childrenArray[i];
//proverka dali e kartinka, zashtoto tam ne ni trqbva innerhtml, ami src-to (linka)
        if (currentElement.tagName === "IMG") {
            shoeData.imgSrc = currentElement.src;
           
       }
        //ako e paragraph, trqbva ni cenata vytre
        else if (currentElement.tagName === "P") {
           shoeData.price = currentElement.innerHTML;  
        }
        else if (currentElement.tagName === "H3")
           shoeData.title = currentElement.innerHTML;
        else
            continue;
         //console.log(currentElement.tagName);
    }
  //console.table([imgSrc, price, title]);
  $('body').load("shoe-template.html", function(){
      //console.log(shoeData);
      var shoeContainer = $('.single-shoe');
      shoeContainer.children("H3").text(shoeData.title);
      shoeContainer.children('IMG')[0].src = shoeData.imgSrc   
      shoeContainer.children('P').text(shoeData.price);
      //shoeContainer.children('IMG').attr('SRC', shoeData.src);
      //shoeContainer.appendChild('div').text("Toku shto syzdadoh tozi div")
      //samo che vyv text podavash texta koito si vzel ot bazata si danni ili ot faila ili kydeto ti e informaciqta za obuvkata
  });
}

