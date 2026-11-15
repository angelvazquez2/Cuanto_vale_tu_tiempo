const calculator = document.querySelector('#calculator-form');
const resultCard = document.querySelector('#result');

function formatDurationFromMinutes(totalMinutes) {
  totalMinutes = Math.max(0, Math.round(totalMinutes));
  const wholeHours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (!wholeHours) return `${minutes} min`;
  return minutes ? `${wholeHours} h ${minutes} min` : `${wholeHours} h`;
}

function calculateTime() {
  const vacationInput = document.querySelector('#vacation');
  vacationInput.setCustomValidity('');
  if (!calculator.checkValidity()) {
    calculator.reportValidity();
    return;
  }
  const salary = Number(document.querySelector('#salary').value);
  const hoursPerDay = Number(document.querySelector('#hours').value);
  const daysPerWeek = Number(document.querySelector('#days').value);
  const vacationDays = Number(vacationInput.value);
  const commutePerDay = Number(document.querySelector('#commute').value);

  const scheduledAnnualHours = hoursPerDay * daysPerWeek * 52;
  if (vacationDays * hoursPerDay >= scheduledAnnualHours) {
    vacationInput.setCustomValidity('Las vacaciones deben ser menos que todos tus días laborables del año.');
    calculator.reportValidity();
    return;
  }
  const annualNetIncome = salary * 12;
  const annualWorkedHours = scheduledAnnualHours - vacationDays * hoursPerDay;
  const netHourlyRate = annualNetIncome / annualWorkedHours;
  const workHoursForTarget = 600 / netHourlyRate;
  // A partial final shift still requires a complete round trip to work.
  const workdaysRequired = Math.ceil(workHoursForTarget / hoursPerDay - 1e-10);
  const workMinutes = Math.round(workHoursForTarget * 60);
  const commuteMinutes = Math.round(workdaysRequired * commutePerDay * 60);
  const totalMinutes = workMinutes + commuteMinutes;

  document.querySelector('#total-time').innerHTML = `<span>${formatDurationFromMinutes(totalMinutes)}</span><small>de tiempo acumulado entre trabajo y desplazamientos</small>`;
  document.querySelector('#workday-count').textContent = `${workdaysRequired} ${workdaysRequired === 1 ? 'día laborable' : 'días laborables'}`;
  document.querySelector('#work-time').textContent = formatDurationFromMinutes(workMinutes);
  document.querySelector('#commute-time').textContent = formatDurationFromMinutes(commuteMinutes);
  document.querySelector('#calculation-explanation').textContent = `Ingreso anual neto: ${annualNetIncome.toLocaleString('es-ES', { maximumFractionDigits: 2 })} €. Horas anuales estimadas: ${annualWorkedHours.toLocaleString('es-ES', { maximumFractionDigits: 2 })}. Valor neto: ${netHourlyRate.toLocaleString('es-ES', { maximumFractionDigits: 4 })} €/h. El trayecto se cuenta por jornada completa.`;
  resultCard.classList.add('has-result');
  document.querySelector('#result-alert').hidden = false;
  const totalDisplay = document.querySelector('#total-time');
  totalDisplay.classList.remove('result-reveal');
  void totalDisplay.offsetWidth;
  totalDisplay.classList.add('result-reveal');
}

calculator.addEventListener('submit', (event) => {
  event.preventDefault();
  calculateTime();
});

document.querySelectorAll('.activity').forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.getAttribute('aria-pressed') === 'true';
    button.setAttribute('aria-pressed', String(!selected));
    button.querySelector('.checkmark').textContent = selected ? '+' : '✓';
    const count = document.querySelectorAll('.activity[aria-pressed="true"]').length;
    document.querySelector('#selection-note').textContent = count ? `${count} ${count === 1 ? 'opción elegida' : 'opciones elegidas'}. Puedes cambiarlo cuando quieras.` : 'Puedes elegir varias opciones.';
  });
});

const interestYes = document.querySelector('#interest-yes');
const interestNo = document.querySelector('#interest-no');
const contactPanel = document.querySelector('#contact-panel');
const noInterestMessage = document.querySelector('#no-interest-message');
interestYes.addEventListener('click', () => {
  interestYes.setAttribute('aria-pressed', 'true');
  interestNo.setAttribute('aria-pressed', 'false');
  noInterestMessage.hidden = true;
  contactPanel.hidden = false;
  contactPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
interestNo.addEventListener('click', () => {
  interestNo.setAttribute('aria-pressed', 'true');
  interestYes.setAttribute('aria-pressed', 'false');
  contactPanel.hidden = true;
  noInterestMessage.hidden = false;
});

document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  form.hidden = true;
  document.querySelector('#thank-you').hidden = false;
});
