// map
function initMap() {

    const sydney = { lat: -33.8688, lng: 151.2093 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: sydney,
    });

    const marker = new google.maps.Marker({
        position: sydney,
        map: map,
    });
}


//  sliding images

var slidePosition = 1;
SlideShow(slidePosition);


function plusSlides(n) {
    SlideShow(slidePosition += n);
}

function currentSlide(n) {
    SlideShow(slidePosition = n);
}

function SlideShow(n) {
    var i;
    var slides = document.getElementsByClassName("Containers");
    var circles = document.getElementsByClassName("dots");
    if (n > slides.length) {slidePosition = 1}
    if (n < 1) {slidePosition = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" enable", "");
    }
    slides[slidePosition-1].style.display = "block";
    circles[slidePosition-1].className += " enable";
}



// form

function formValidation() {

    var x = document.forms["form"]["name"].value;
    var z = document.forms["form"]["mail"].value;
    var m = document.forms["form"]["txtbox"].value;
    if (x == "", z = "", m == "") {

        document.getElementById("iname").placeholder = "*Required field";
        document.getElementById("imail").placeholder = "*Required field";
        document.getElementById("itxt").placeholder = "*Required field";
        return false;
    };
}



