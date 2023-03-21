// $('#changeColor').click(function () {
//     $('.box').css('background-color', 'red');
// })

// $('#addBorder').click(function () {
//     $('.box').addClass('border');
// })


// $('ul li').each(function () {
//     console.log($(this).text());

//     if ($(this).hasClass('stop')) {
//         return false;
//     }

// })


// const fruits = ['Apple', 'Orange', 'Waterlemon', 'Strawberry', 'Other'];

// $.each(fruits, function () {
//     $('ul').append("<li>" + this + "</li>");
// })


$('#decrease').click(function () {
    $('#counter').text($('#counter').text() - 1).css('color', 'red');
})

$('#increase').click(function () {
    $('#counter').text(Number($('#counter').text()) + 1).css('color', 'green');
})

$('#reset').click(function () {
    $('#counter').text(0).css('color', 'black');
}) 