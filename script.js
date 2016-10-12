$(document).ready(function() {

    $('.exp').keypress(function(key) {
        if (key.which == 13) {
            /*console.log($(this));*/
            solve($(this));
        }
    });

    /*$('#off-btn').click(function() {
        console.log($('.exp').val("4"));
        if ($(this).text() === "OFF") {
            $('.exp').css('background', '#222').val(' ').attr('readonly', 'readonly');
            $(this).text("ON");
        } else {
            $('.exp').css('background', '#999').removeAttr('readonly').val('').focus();
            $(this).text("OFF");
        }
    });*/

    /*blink();*/
});

var solve = function(obj) {
    var solution = eval(obj.val());
    obj.val(solution);
};

function blink() {
  if ($('.exp').attr('placeholder')) {
      $('.exp').attr('placeholder', '');
  } else {
      $('.exp').attr('placeholder', '0');
  }
  setTimeout(blink, 500);
};
