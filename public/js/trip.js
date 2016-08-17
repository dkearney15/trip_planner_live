$(document).ready(function() {

    function populateOptions(category, parentElement) {
        category.forEach(function(option) {
            $(parentElement).append('<option>' + option.name + '</option>');
        })
    }

    populateOptions(hotels, '#hotel-choices');
    populateOptions(restaurants, '#restaurant-choices');
    populateOptions(activities, '#activity-choices');


    function buttonSelectors(parentElement, button, targetElement) {
        $(button).on('click', function() {
            var id = $(parentElement).val();
	    
            console.log("ID:", id);
            var div = $('<div id=' + id + '></div>');
            var li = $('<li>' + id + '</li>');
            var button = $('<button id=' + id + ' class = "btn btn-xs btn-danger remove btn-circle" > x < /button>');
            $(targetElement).append(div);
            $(div).append(li);
            $(div).append(button);
        });
    }

    buttonSelectors('#hotel-choices', '#select-hotel', '#hotel-list' );
    buttonSelectors('#restaurant-choices', '#select-restaurant', "#restaurant-list");
    buttonSelectors('#activity-choices', '#select-activity', '#activity-list');



});
