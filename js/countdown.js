const countdownDaysContainer = document.querySelector(".countdown__time-days");
const countdownHoursContainer = document.querySelector(".countdown__time-hours");
const countdownMinutesContainer = document.querySelector(".countdown__time-minutes");
const countdownSecondsContainer = document.querySelector(".countdown__time-seconds");
function countdown() {
  const currentDate = new Date();
  const endDate = new Date("2025-12-31T23:59:59");
  const periodDeal = endDate - currentDate;
  countdownDaysContainer.innerText = Math.floor(periodDeal/(1000*60*60*24));
  countdownHoursContainer.innerText = Math.floor(periodDeal/(1000*60*60)%24);
  countdownMinutesContainer.innerText = Math.floor(periodDeal/(1000*60)%60);
  countdownSecondsContainer.innerText = Math.floor(periodDeal/(1000)%60);
}
setInterval(countdown, 1000);

