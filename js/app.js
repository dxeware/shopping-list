$(document).ready(function() {
  //$('ul').on('mouseenter', 'li', function(event){
  // fires when any LIs are clicked on
  // including LIs that aren't on the page when it is initially loaded
  //alert('an li was clicked');
  //alert('working');
  //$(this).descendants('.delete').show();
  $('button').click( function() {
    var input = document.getElementById("item");
    var text = input.value;
    if ($.trim(text).length > 0) {
      var newItem = $('<li><input type="checkbox">' + text + '</li>');
      $('li:last').after(newItem);
    } else {
    alert('Please enter some text');
    }
  });
});
