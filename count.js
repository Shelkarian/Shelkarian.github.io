let countDate = new Date("2025-02-03T00:00:00").getTime()

const update = setInterval(
    function () {
        const now =  new Date().getTime()
        const dist = countDate - now
        const days = Math.floor(dist / (1000 * 60 * 60 * 24))
        const hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000*60*60))
        const minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000*60))
        const seconds = Math.floor((dist % (1000 * 60)) / 1000)

        let days_text = document.getElementById('days').innerHTML = days
        let hours_text =  document.getElementById('hours').innerHTML = hours
        let minutes_text =  document.getElementById('minutes').innerHTML = minutes
        let seconds_text =  document.getElementById('seconds').innerHTML = seconds

        if (dist < 1) {
            days_text.innerHTML = ''
            hours_text.innerHTML = ''
            minutes_text.innerHTML = ''
            seconds_text.innerHTML = ''
            document.getElementById('content').innerHTML = 'ВРЕМЯ ДЛЯ МСК ПРИШЛО '
        }
    }
)

let countDate2 = new Date("2025-02-11T00:00:00").getTime()

const update2 = setInterval(
    function () {
        const now =  new Date().getTime()
        const dist = countDate2 - now
        const days = Math.floor(dist / (1000 * 60 * 60 * 24))
        const hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000*60*60))
        const minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000*60))
        const seconds = Math.floor((dist % (1000 * 60)) / 1000)

        let days_text = document.getElementById('days2').innerHTML = days
        let hours_text =  document.getElementById('hours2').innerHTML = hours
        let minutes_text =  document.getElementById('minutes2').innerHTML = minutes
        let seconds_text =  document.getElementById('seconds2').innerHTML = seconds

        if (dist < 1) {
            days_text.innerHTML = ''
            hours_text.innerHTML = ''
            minutes_text.innerHTML = ''
            seconds_text.innerHTML = ''
            document.getElementById('content').innerHTML = 'ВРЕМЯ ПРИШЛО'
        }
    }
)