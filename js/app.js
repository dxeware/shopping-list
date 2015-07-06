$(document).ready(function() {

  //$('#delete-div').hide();

  // Remove list item if 'Delete' is clicked
  $ ( '#shopping-list' ).on('click', '.delete', function( event ) {
    //console.log( 'clicked DELETE' );
    $(this).closest('li').remove();
  });

  $ ( '#shopping-list' ).on('mouseenter', '.listitem', function( event ) {
    console.log( 'MOUSEOVER' );
    //$(this).closest('#listitem #delete-div').show();
    //$('.delete-div').show();
    $(this).children('.delete-div').show();
  })
  .on('mouseleave', '.listitem', function( event ) {
    console.log( 'MOUSE OUT' );
    //$(this).closest('#listitem #delete-div').show();
    //$('.delete-div').hide();
    $(this).children('.delete-div').hide();
  });

  // Add item to list if the 'Submit' button is pressed
  // 1) use after() if list not EMPTY
  // 2) use append() if list EMPTY
  $('button').click( function() {
    var input = document.getElementById("item");
    var text = input.value;
    if ($.trim(text).length > 0) {
      var newItem = $('<li class="listitem"><input type="checkbox">' + text + '<div class="delete-div"><span class="delete">Delete</span></div>');

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
