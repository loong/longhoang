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
