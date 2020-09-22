let div = $('<div></div>') //creates div
let unList = $('<ul></ul>');
$('body').append(unList);
$('body').append(div);

$('#btnSubmit').on('click', function (event) {
    // alert("button has been clicked"); //alert message to see the button works NOT USED IN FURTHER STEPS
    event.preventDefault(); //prevents page from refeshing, default to forms!

    // let h2 = $('<h2></h2>') //creates h2 element NOT USED IN FURTHER STEPS
    //creates list and appends to body
    // $(div).append(h2); //appends h2 element NOT USED IN FURTHER STEPS


    let value = $("<li></li>");
    value.append($("#text").val());
    //   ....this next function sets a random color to the value when clicked....somehow... 🤔 
    //(Josh confuses me) jk
    $(value).on('click', function () {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        $(value).css("color", color);
    });

     $(value).on('dblclick', function(){
         $(value).remove();
     })
    

    $(unList).append(value); //appends value to the unordered list
});


$(":submit").click(function () {
    var str = $("#text").val();
    // alert(str);
});

$('#btnSubmit').prop('disabled', true);
$('#text').keyup(function () {
    $('#btnSubmit').prop('disabled', this.value == "" ? true : false);
});



