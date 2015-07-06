$(document).ready(function() {

  // Remove list item if 'Delete' is clicked
  $ ( '#shopping-list' ).on('click', '#delete', function( event ) {
    //console.log( 'clicked DELETE' );
    $(this).closest('#listitem').remove();
  });

  // Add item to list if the 'Submit' button is pressed
  // 1) use after() if list not EMPTY
  // 2) use append() if list EMPTY
  $('button').click( function() {
    var input = document.getElementById("item");
    var text = input.value;
    if ($.trim(text).length > 0) {
      var newItem = $('<li id="listitem"><input type="checkbox">' + text + '<div id="delete-div"><span id="delete">Delete</span></div>');

      if ($('#shopping-list li').length === 0) {

        $('ul').append(newItem);
      } else {
        $('li:last').after(newItem);
      }

    } else {
      alert('Please enter some text');
    }
  });

});
