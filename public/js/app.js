const {weatherForm, getWeather} = require('./get-weather')
const {btn, modal, span, btnClick, closeModalX, closeModalOutside} = require('./login-modal')



document.addEventListener('DOMContentLoaded', () => {
    weatherForm.addEventListener('submit', getWeather)
    btn.addEventListener('click', btnClick)
    span.addEventListener('click', closeModalX)
    window.addEventListener('click', closeModalOutside)
})