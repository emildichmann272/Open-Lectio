$(document).ready(function() {
    console.log("Jquery Loaded");
    
    document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
    
    $entrySearch = $('#entrySearch');
    $results = $('.results');
    $resultsContainer = $('.resultsContainer');
    $searchType = "Gym";
    $loading = $('.loadingFrame');
    
    $($entrySearch).keyup(function() {
       $entrySearchVal = $('#entrySearch').val();
       $entrySearchValLength = String($('#entrySearch').val()).length;
       
       if ($entrySearchValLength >= 1) {
           search();
           $($entrySearch).css("margin-top", "15%");
           $($resultsContainer).css("visibility", "visible");
           $($resultsContainer).css("opacity", "1");
           $($resultsContainer).css("margin-top", "0%");
           $($results).css("margin-top", "2%");
       } else {
           $($entrySearch).css("margin-top", "55%");
           $($resultsContainer).css("visibility", "hidden");
           $($resultsContainer).css("opacity", "0");
           $($resultsContainer).css("margin-top", "50%");
           $($results).css("margin-top", "20%");
           
      };
        
    });
    
    $($results).click(function() {
        $searchType = "Student";
        
        console.log($(this).text());
        console.log($(this).attr("gymID"));
        
        $($entrySearch).css("transition", "0");
        $($entrySearch).css("visibility", "hidden");
        $($loading).css("visibility", "visible");
        $($loading).css("opacity", "1");
        
        $($entrySearch).val("");
        $($entrySearch).css("margin-top", "55%");
        $($resultsContainer).css("margin-top", "50%");
        $($resultsContainer).css("opacity", "0");
        $($resultsContainer).css("visibility", "hidden");
        $($results).css("margin-top", "20%");
        
        $($entrySearch).attr("placeholder", "Søg Elev");
        $($results).removeAttr("gymID");
        
        $studentIDs = [
            1,
            2,
            3,
            4
        ];
        $i = 0;
        $($results).each(function(index) {
            
            $(this).attr("studentID", $studentIDs[$i])
            $i++;
            console.log($i);
        });
        
    });
    
});