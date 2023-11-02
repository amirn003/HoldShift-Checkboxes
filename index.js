const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck(e) {
  let inBetween = false;

  console.log(e.shiftKey);
  if(e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if(inBetween) {
        checkbox.checked = true;
      }

    });
  }
  lastChecked = this;
  //console.log(lastChecked);
}

checkboxes.forEach((checkbox => checkbox.addEventListener('click', handleCheck)));
