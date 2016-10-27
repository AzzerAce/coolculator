(function() {
    
    var num1 = 0;
    var op;
    var num2 = 0;
    var $textfield;
    var $textUp;

    $(document).ready(function() {
        
        $textUp = $('#exp-bfor');
        $textfield = $('#exp-in');

        $('.exp').keypress(function(key) {
            if (key.which == 13) {
                basicOp(' ');
            }
        });

        $('.num').on('click', function() {
            var pos = insert($textfield[0], $(this).text());
            $textfield.focus();
            $textfield[0].setSelectionRange(pos+1, pos+1);
        });

        $('#prefix').on('click', function() {
            if ($textfield.val() != '') {
                var num = parseFloat($textfield.val());
                $textfield.val(-1 * num).focus();
            }
        });

        $('#clear').on('click', function() {
            $textfield.val('').focus();
            $textUp.val('');
            num1 = 0;
            num2 = 0;
        });

        $('#clear-entry').on('click', function() {
            $textfield.val('').focus();
        });

        $('#del').on('click', function() {
            var pos = insert($textfield[0], -1);
            $textfield.focus();
            $textfield[0].setSelectionRange(pos-1, pos-1);
        });

        $('#eq').on('click', function() {
            basicOp(' ');
        });

        $('#add').on('click', function() {
            basicOp('+');
        });

        $('#sub').on('click', function() {
            basicOp('-');
        });

        $('#mult').on('click', function() {
            basicOp('*');
        });

        $('#div').on('click', function() {
            basicOp('/');
        });

        $('#mod').on('click', function() {
            basicOp('%');
        });

        $('#history').on('click', function() {
            $textUp.val('');
            num2 = 0;
            $textfield.val(num1).focus();
            num1 = 0;
        });

        $('#comma').on('click', function() {
            $textfield.val($textfield.val() + '.');
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

    var basicOp = function(ope) {
        if ($textfield.val() != '') {
            if (num1 != 0) {
                num2 = $textfield.val();
                solve(num1, op, num2, ope);
                op = ope;
                $textfield.val('');
            } else {
                num1 = $textfield.val();
                op = ope;
                writeUp(op, num1);
            }
        } else {
            op = ope;
            writeUp(op);
        }
    };

    // writes up the first operand *or* changes the operator
    var writeUp = function(ope, num) {
        if (num == null) {
            $textUp.val($textUp.val().substring(0, $textUp.val().length - 2) + ope + ' ');
        } else {
            num2 = num;
            $textUp.val(num + ' ' + ope + ' ');
        }
        $textfield.val('').focus();
    };

    // function to solve for basic binary operations
    var solve = function(n1, ope, n2, notEq) {
        switch (ope) {
            case '+':
                num1 = parseFloat(n1) + parseFloat(n2);
                if (notEq != undefined) $textUp.val(num1 + ' ' + notEq + ' ');
                else $textUp.val(num1);
                $textfield.focus();
                break;
            case '-':
                num1 = parseFloat(n1) - parseFloat(n2);
                if (notEq != undefined) $textUp.val(num1 + ' ' + notEq + ' ');
                else $textUp.val(num1);
                $textfield.focus();
                break;
            case '*':
                num1 = parseFloat(n1) * parseFloat(n2);
                if (notEq != undefined) $textUp.val(num1 + ' ' + notEq + ' ');
                else $textUp.val(num1);
                $textfield.focus();
                break;
            case '/':
                num1 = parseFloat(n1) / parseFloat(n2);
                if (notEq != undefined) $textUp.val(num1 + ' ' + notEq + ' ');
                else $textUp.val(num1);
                $textfield.focus();
                break;
            case '%':
                num1 = parseFloat(n1) % parseFloat(n2);
                if (notEq != undefined) $textUp.val(num1 + ' ' + notEq + ' ');
                else $textUp.val(num1);
                $textfield.focus();
                break;
            default:
                console.log('rekt');
        }
    };

    // places pushed button into textfield *or* deletes a number *and* returns position of the caret
    function insert(field, value) {
            var startPos = field.selectionStart;
            var endPos = field.selectionEnd;
            if (value == -1) {
                field.value = field.value.substring(0, startPos - 1)
                    + field.value.substring(endPos, field.value.length);
            } else {
                field.value = field.value.substring(0, startPos)
                    + value
                    + field.value.substring(endPos, field.value.length);
            }
            return startPos;
    }

    function blink() {
        if ($('.exp').attr('placeholder')) {
            $('.exp').attr('placeholder', '');
        } else {
            $('.exp').attr('placeholder', '0');
        }
        setTimeout(blink, 500);
    };

})();
