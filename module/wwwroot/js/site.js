$(document).ready(function () {
    var events = [];
    $.ajax({
        type: "GET",
        url: "/Modules/GetEvents",
        success: function (data) {
            $.each(data, function (v) {
                events.push({
                    title: v.Name,
                    description: v.Name,
                    start: moment(v.StartDate),
                    end: moment(v.EndDate),
                });
            })
            alert(events);
            GenerateCalender(events);
        },
        error: function (error) {
            alert('failed');
        }
    })
   
});

    function GenerateCalender(events) {
        $('#calender').fullCalendar('destroy');
        $('#calender').fullCalendar({
            contentHeight: 400,
            defaultDate: new Date(),
            timeFormat: 'h(:mm)a',

            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,basicWeek,basicDay,agenda'
            },
            eventLimit: true,
            eventColor: '#378006',
            events: events,
            eventClick: function (calEvent) {
                $('#myModal #eventTitle').text(calEvent.title);
                var $description = $('<div/>');
                $description.append($('<p/>').html('<b>Start:</b>' + calEvent.start.format("DD-MMM-YYYY HH:mm a")));
                if (calEvent.end != null) {
                    $description.append($('<p/>').html('<b>End:</b>' + calEvent.end.format("DD-MMM-YYYY HH:mm a")));
                }
                $description.append($('<p/>').html('<b>Description:</b>' + calEvent.description));
                $('#myModal #pDetails').empty().html($description);

                $('#myModal').modal();
            }
        });
    }
