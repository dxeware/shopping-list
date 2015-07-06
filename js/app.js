$(document).ready(function() {
  //$('ul').on('mouseenter', 'li', function(event){
  // fires when any LIs are clicked on
  // including LIs that aren't on the page when it is initially loaded
  //alert('an li was clicked');
  //alert('working');
  //$(this).descendants('.delete').show();
  //$('ul').on('click', function(event) {
  //var ul = document.getElementsByClassName('shopping-list')[0];
  //ul.onclick = function(event) {
  //  var target = getEventTarget(event);
  //  alert(target.innerHTML);
    //alert('an li was clicked');
  //alert('working');
  //$(this).descendants('.delete').show();
  //};
  //$('ul').click( function() {
  //  alert('ul clicked');
  //});
  $( '#shopping-list' ).on('click', 'li', function( event ) {
    console.log( 'clicked', $( this ).text() );
  });
  $ ( '#delete' ).on('click', function( event ) {
    console.log( 'clicked DELETE' );
    $(this).closest('#listitem').remove();
  });
  $('button').click( function() {
    var input = document.getElementById("item");
    var text = input.value;
    if ($.trim(text).length > 0) {
      var newItem = $('<li id="listitem"><input type="checkbox">' + text + '<div id="delete">Delete</div></li>');
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
