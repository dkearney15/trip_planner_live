$(document).ready(function() {


    function populateOptions(category, parentElement) {
        for (var i = 0; i < category.length; i++) {
            var option = '<option>' + category[i].name + '</option>'
            $(parentElement).append(option);
        }
    }

    populateOptions(hotels, '#hotel-choices');
    populateOptions(restaurants, '#restaurant-choices');
    populateOptions(activities, '#activity-choices');



});
