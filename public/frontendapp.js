$('document').ready(function(){
$.getJSON("/api/todos") //ajax get json - request url
.then(addTodos)

//////post /////////
$("#id_submit_button").click(function(e){
            // stop the form from submitting the normal way and refreshing the page
            e.preventDefault();
//           var id = $("#_id").val();
           //val is a method in jquery to set arguments
            $.ajax({
                "method":"POST",
                url: "/api/todos/",

                 data: {
                 name: $('#_id').val()
                  },
                success: function(result){
                  console.log(result);
                 }
            });
        });

  ///////// delete ///////

        $('.list').on('click','span',function(){

          deletetodo($(this).parent());


});
function addTodos(todos){
for(var i=0; i<todos.length; i++){
var newtodo=$('<li>' + todos[i].name +'<span>X</span></li>');

newtodo.data('id', todos[i]._id);

$('.list').append(newtodo);
}
    }
        });

////del//////////////////////////////
function deletetodo(todo){
    var clicked = todo.data('id');

console.log(clicked);
            $.ajax({
               "method":"DELETE",
                url: "/api/todos/" + clicked,
            })
           .then(function(){
             todo.remove();
        });

}