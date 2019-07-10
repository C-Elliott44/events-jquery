// All events im jQuery can be handled through the use of .on()
// .on() takes on two parameters after the jQuery selector, 
// 1st type of event, 'click', 2nd function you want to run, named or unnamed, function(){}/ thisNamedFunction(){}

$(function() {
    // Set ids to be a global function so that it can be referenced later in the mouseout function
    var ids;
    var $listItems = $('li');

    $listItems.on('mouseover', function() {
        ids = this.id;
        $($listItems).children('span').remove();
        $(this).append(' <span class="priority">' + ids + '</span>');
    });

    $listItems.on('mouseout', function() {
        $(this).children('span').remove();
    });
});

// ***************************** Event Object Practice Below *******************************

$(function() {

    // Make sure to pass the event objet from the event through the unnamed function
    $('li').on('click', function(event) {
        // Remove any spans that might be still present to preserve space
        $('li span').remove();
        // store date event inside a variable
        var date = new Date();
        // Change date to a readable string
        clicked = date.toDateString();
        $(this).append('<span class="date">' + clicked + ' ' + event.type + '</span>');
    });
});

// ***************************** Event Delegation Practice Below *******************************

$(function() {
    var listItem, itemStatus, eventType;

    $('ul').on(
        'click mouseover',
        ':not(#four)',
        {status: 'important'},
        function(event) {
            listItem = 'Item: ' + event.target.textContent + '<br />';
            itemStatus = 'Status: ' + event.data.status + '<br />';
            eventType = 'Type: ' + event.type;
            $('#notes').html(listItem + itemStatus + eventType);
        }
    );
});