function equalHeight(group) {    
    var tallest = 0;    
    group.each(function() {       
        var thisHeight = $(this).height();       
        if(thisHeight > tallest) {          
            tallest = thisHeight;       
        }    
    });    
    group.each(function() { $(this).height(tallest); });
} 

$(document).ready(function() {   
    equalHeight($(".storybox"));

    $(document).ready(function () {
	$("input#submit").click(function(){
            $.ajax({
		type: "POST",
		url: "process.php", //process to mail
		data: $('form.contact').serialize(),
		success: function(msg){
                    $("#thanks").html(msg) //hide button and show thank you
                    $("#form-content").modal('hide'); //hide popup  
		},
		error: function(){
                    alert("failure");
		}
            });
	});
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
