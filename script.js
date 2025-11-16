$(document).ready (function() {
    $("#navlogo").animate({left: '0px', opacity: '1'}, 1000);
    $("#navLinks").animate({left: '0px', opacity: '1'}, 1000);
    $("#herotext").css("opacity", "0");
    $("#herotext").animate({left: '-500px', opacity: '0'}, 0).animate({left: '0px', opacity: '1'}, 1000);
    repeatAnimation();
    // seatSelect();
})


function repeatAnimation() {
    $(".alternate").animate({top: '-6px'}, 600)
    .animate({top: '0px'}, 600, repeatAnimation);
    $(".opposite").animate({top: '6px'}, 600)
    .animate({top: '0px'}, 600, repeatAnimation);
}


//  const seat = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"];
//  let selectedSeat = null;
 
//  function seatSelect() {
//      $(".flights-seats").empty();
//      seat.forEach(seat => {
//          console.log(seat);
//          $(".flights-seats").append(`<button class='seat unselect'>${seat}</button>`);
//         });
//         $(".seat").click(function (e) { 
//             e.preventDefault();
//             $(this).toggleClass("unselect selected");
//         selectedSeat = $(this).text();
//         $("#selectedSeatDisplay").text(selectedSeat);
//         console.log("Selected Seat: " + selectedSeat);
//         getSelectedSeat();
//     });
// }


// function getSelectedSeat() {
//     return selectedSeat;
// }

// export default {getSelectedSeat, seatSelect};




