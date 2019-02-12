//Define selector variables
//

let playSongBtn = $('#song-play');
let pauseSongBtn = $('#song-pause');
let normalSizeBtn = $('#normal');
let growSizeBtn = $('#grow');
let shrinkSizeBtn = $('#shrink');
let visibleBtn = $('#visible');
let invisibleBtn = $('#invisible');
let moveUpBtn = $('#up');
let moveDownBtn = $('#down');
let moveLeftBtn = $('#left');
let moveRightBtn = $('#right');
let captainPlanet = $('#hero');

normalSizeBtn.click(function () {
    captainPlanet.width("250px");
});

growSizeBtn.click(function () {
    captainPlanet.width("500px");
});

shrinkSizeBtn.click(function () {
    captainPlanet.width("100px");
});

visibleBtn.click(function () {
    captainPlanet.fadeTo("slow", 1);
});

invisibleBtn.click(function () {
    captainPlanet.fadeTo("slow", .15);
});

moveUpBtn.click(function () {
    captainPlanet.animate({ top: '-=30px' }, "normal"); //.animate changes a given css property
});

moveDownBtn.click(function () {
    captainPlanet.animate({ top: '+=30px' }, "normal");
});

moveLeftBtn.click(function () {
    captainPlanet.animate({ left: '-=30px' }, "normal");
});

moveRightBtn.click(function () {
    captainPlanet.animate({ left: '+=30px' }, "normal");
});


//add key events for movement
$(document).keyup(function (event) {
    let userKey = event.key;
    //console.log(userKey);

    let arrows = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    if (arrows.includes(userKey)) {
        if (userKey === arrows[0]) { //up arrow
            captainPlanet.animate({ top: '-=30px' }, "normal");
        } else if (userKey === arrows[1]) { //down arrow
            captainPlanet.animate({ top: '+=30px' }, "normal");
        } else if (userKey === arrows[2]) {//left arrow
            captainPlanet.animate({ left: '-=30px' }, "normal");
        } else {//right arrow
            captainPlanet.animate({ left: '+=30px' }, "normal");
        }
    }

})
