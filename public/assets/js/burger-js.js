// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

    // send post request for the burgers
    $('.add-btn').on('click', function (e) {
        e.preventDefault()
        let burger = {
            burger_name: $('#bur').val().trim(),
        }
        $.ajax('/api/burgers',{
            type:"POST",
            data: burger
        }).then(function(){
            console.log('created new burger!!')
            location.reload()
        })
    })

    $('.devour-btn').on("click",function(e){
        e.preventDefault()
        let burger = {
            id: $(this).data('id'),
        }
        $.ajax('/api/burger',{
            type:"PUT",
            data: burger
        }).then(function(){
            console.log('burger updated!!')
            location.reload()
        })
    })
    $(".delete-btn").on("click", function(e) {
        e.preventDefault()
        let burger = {
            id: $(this).data('id')
        }
        $.ajax('/api/burger',{
            type: "DELETE",
            data: burger
        }).then(function(){
            console.log('burger deleted!!')
            location.reload()
        })
    })
});