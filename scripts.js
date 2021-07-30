
    $('#dev').click(function () {
        $('#dev').hide()
    })
    $('#dev').click(function () {
        $('.num2').toggle()
    })
    $('.num2').click(function () {
        $('.num2').hide()
        $('#dev').show()
    })
    $('#product').click(function () {
        $('#product').hide()
    })
    $('#product').click(function () {
        $('.num3').toggle()
    })
    $('.num3').click(function () {
        $('.num3').hide()
        $('#product').show()
    })
    $('#work4').hover(function () {
        $('.work4').toggle()
    })
    $('#work5').hover(function () {
        $('.work5').toggle()
    })
    $('#work6').hover(function () {
        $('.work6').toggle()
    })
    $('#work7').hover(function () {
        $('.work7').toggle()
    })
    $('#work8').hover(function () {
        $('.work8').toggle()
    })
    $('#work3').hover(function () {
        $('.work3').toggle()
    })
    $('#work2').hover(function () {
        $('.work2').toggle()
    })
    $('#work1').hover(function () {
        $('.work1').toggle()
    })

})
function message() {
    let name = document.getElementById('jina').value
    if (name === '') {
        alert("Please enter your name")
    } else {
        alert(name + " " + "we have received your message. Thank you for reaching out to us.")
    }
}
