$(document).ready(function() {

    function populateOptions(category, parentElement) {
        category.forEach(function(option) {
            $(parentElement).append('<option id='+option.name.split(' ').join('-')+'-option'+'>' + option.name + '</option>');
        })
    }

    populateOptions(hotels, '#hotel-choices');
    populateOptions(restaurants, '#restaurant-choices');
    populateOptions(activities, '#activity-choices');


    function removeButton() {
      var parent = $(this).parent();
      $(parent).remove();
    }

    function buttonSelectors(parentElement, button, targetElement) {
        $(button).on('click', function() {
            var id = $(parentElement).val().split(' ').join('-');

            var optionId = id + '-option'

            $('#'+optionId).remove()

            console.log("ID:", id);
            var div = $('<div id=' + id + '></div>');
            var button = '<button id=' + id + '-button' + ' class="btn btn-xs btn-danger remove btn-circle"> x </button>';
            var li = $('<li>' + id + button +'</li>');
            $(targetElement).append(div);
            $(div).append(li);
            $('#'+id+'-button').click(removeButton);
        });
    }

    buttonSelectors('#hotel-choices', '#select-hotel', '#hotel-list' );
    buttonSelectors('#restaurant-choices', '#select-restaurant', "#restaurant-list");
    buttonSelectors('#activity-choices', '#select-activity', '#activity-list');

});
