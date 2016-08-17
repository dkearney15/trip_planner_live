$(document).ready(function() {

    function addToList(option, parentElement) {
	    $(parentElement).append('<option id='+option.split(' ').join('-')+'-option'+'>' + option + '</option>');
	
    }

    function populateOptions(category, parentElement) {
        category.forEach(function(option) {
	    addToList(option.name, parentElement);
        })
    }

    populateOptions(hotels, '#hotel-choices');
    populateOptions(restaurants, '#restaurant-choices');
    populateOptions(activities, '#activity-choices');

        function removeButton() {
	
	    var $parent = $(this).parent();
	    var liId = $parent[0].id.split('-').join(' ');
	    var ulId = $parent.parent()[0].id.slice(0, -5);

	   addToList(liId,'#' + ulId +'-choices');
	    $($parent).remove();
    }

    function buttonSelectors(parentElement, button, targetElement) {
        $(button).on('click', function() {
            var id = $(parentElement).val().split(' ').join('-');
            var optionId = id + '-option'
            $('#'+optionId).remove()
           // var div = $('<div id=' + id + '></div>');
            var button = '<button id=' + id + '-button' + ' class="btn btn-xs btn-danger remove btn-circle"> x </button>';
            var li = $('<li id=' + id + '>' + id + button +'</li>');
            $(targetElement).append(li);
            //$(div).append(li);
            $('#'+id+'-button').click(removeButton);
        });
    }

    buttonSelectors('#hotel-choices', '#select-hotel', '#hotel-list' );
    buttonSelectors('#restaurant-choices', '#select-restaurant', "#restaurant-list");
    buttonSelectors('#activity-choices', '#select-activity', '#activity-list');

});
