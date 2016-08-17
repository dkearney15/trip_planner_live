$(document).ready(function() {

        function populateOptions(category, parentElement) {
	category.forEach(function(option){
	    $(parentElement).append('<option>' + option.name + '</option>');
	})
    }

    populateOptions(hotels, '#hotel-choices');
    populateOptions(restaurants, '#restaurant-choices');
    populateOptions(activities, '#activity-choices');


    function buttonSelectors(category, parentElement, button, targetElement) {
        $(button).on('click', function() {
            var selected = $(parentElement).val();
            var item = $('<span>' + selected + '</span>');
            console.log(item);
        })
    }
    buttonSelectors(hotels, '#hotel-choices', '#select-hotel', "test");

});
