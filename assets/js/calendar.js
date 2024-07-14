document.addEventListener('DOMContentLoaded', function() {
    
    let request_calendar = "./assets/json/events.json"

    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl,{
        initialView: 'dayGridMonth',
        
        events:function(info, successCallback, failureCallback){
            fetch(request_calendar)
            .then(function(response){
                return response.json()
            })
            .then(function(data){
                console.log(data)
            })
        }      
    });
    calendar.render();
});