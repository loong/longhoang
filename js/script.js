$(document).ready(function() {
    $("input#submit").click(function(){

	var link = "mailto:long@mindworker.de"
            + "?subject=" + encodeURIComponent("Contact form - Longhoang website")
            + "&body=" + encodeURIComponent("Name: " + document.getElementById('conName').value 
				+ "\nEmail: " + document.getElementById('conEmail').value 
				+ "\n\n" + document.getElementById('conText').value );

	window.open(link, '_blank');
    });


});

function tooltipStory() {
    setTimeout(showTooltipStory, 2000);
    setTimeout(hideTooltipStory, 4000);
}

function showTooltipStory() {
    $('[data-toggle="tooltip-story"]').tooltip("show");
}

function hideTooltipStory() {
    $('[data-toggle="tooltip-story"]').tooltip("hide");
}

function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-93259176-1', 'auto');
  ga('send', 'pageview');
