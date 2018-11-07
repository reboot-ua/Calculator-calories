const toggle  = document.getElementById('toggle');
const content = document.getElementById('content');


toggle.addEventListener('click', function () {
  const le = content.dataset.toggled ^= 1;
  content.style.display = le ? 'none' : 'block';
});

/* Calculate MAN */
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


/* Calculate Woman BMR */
(function () {
  function calculateWoman (womanWeight, womanHeight, womanAge) {
    womanWeight = parseFloat(womanWeight);
    womanHeight = parseFloat(womanHeight);
    womanAge = parseFloat(womanAge);
    return ((womanWeight * 10) + (womanHeight * 6.25) - (womanAge * 5) - 161);
  }

  const womanBMR = document.getElementById('womanBMR');
  if (womanBMR) {
    womanBMR.onsubmit = function () {
      this.result.value = calculateWoman(this.womanWeight.value, this.womanHeight.value,
        this.womanAge.value);
      return false;
    };
  }
}());
