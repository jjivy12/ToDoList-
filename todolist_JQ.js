var inputValue = $("#myInput").val();
var list = $("ul");
var el = $("addbtn");

$("addbtn").click(function(){
    var newLi=$("ul").append($('<li>',{text:$("#myInput").val()
    }));
    $('input[name="addToDo"]').val('');
    $("li").click(function() {
        var self=this;
            setTimeout(function() {
            
            $(self).remove();}, 1000);
  });
});


$("li").click(function() { 
      var self=this;
      setTimeout(function() {
        
        $(self).remove();}, 1000);
  });