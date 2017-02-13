$(document).ready(function() {
    console.log("Jquery Loaded");
    
    $gymSearch = $('#GymSearch');
    $gymSearchVal = $('#GymSearch').val().length;
    
   $($gymSearch).keyup(function() {
       console.log($gymSearchVal);
       console.log($('#GymSearch').val());
      if ($gymSearchVal >= 1) {
          $($gymSearch).css("margin-top", "2em");
      } else {
          $($gymSearch).css("margin-top", "16em");
      };
   });
    
});