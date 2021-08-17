function timer(id, deadline) {
    
    // Создаем таймер
    function getTimeRemaining(endtime) {
        const t = new Date(endtime).setHours(0) - Date.parse(new Date()),
              days = Math.ceil(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60) % 24)),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);
        
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

        function getZero(num){
            if (num >= 0 && num < 10) { 
                return '0' + num;
            } else {
                return num;
            }
        }

    // Ф-ия, что устанавливает таймер прямо на страничку
        function setClock(selector, endtime) {

            const timer = document.querySelector(selector),
                days = timer.querySelector("#days"),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                timeInterval = setInterval(updateClock, 1000);

            updateClock();

    // Ф-ия, что будет обновлять наш таймер каждую секунду
        function updateClock() {
            const t = getTimeRemaining(endtime);

        // Помещаем расчетные величины на страницу
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
        setClock(id, deadline);
}

export default timer;