const toggle  = document.getElementById('toggle');
const content = document.getElementById('content');

toggle.addEventListener('click', function () {
  content.classList.toggle('show');
});

/* Calculate MAN BMR */
(function () {
  function calculateManBMR (manWeight, manHeight, manAge) {
    manWeight = parseFloat(manWeight);
    manHeight = parseFloat(manHeight);
    manAge = parseFloat(manAge);
    return ((manWeight * 10) + (manHeight * 6.25) - (manAge * 5) + 5);
  }

  const manBMR = document.getElementById('manBMR');
  if (manBMR) {
    manBMR.onsubmit = function () {
      this.result.value = calculateManBMR(this.manWeight.value, this.manHeight.value,
        this.manAge.value);
      return false;
    };
  }
}());
