const updatesEl = document.getElementById('updates');
const seed = [
  'Story: New community garden opens downtown',
  'Story: Morning meteorologist forecasts mild weekend',
  'Story: Local pet adoption drive exceeds goal',
  'Story: Quick tip: 5-min desk yoga routine',
  'Story: Standout spring fashion preview'
];
let idx = 0;
function rotateUpdates(){
  // add a new item at the top and remove last after a short delay
  const li = document.createElement('li');
  li.className = 'update-item';
  li.textContent = seed[idx % seed.length];
  updatesEl.insertBefore(li, updatesEl.firstChild);
  if (updatesEl.children.length > 6){
    updatesEl.removeChild(updatesEl.lastChild);
  }
  idx++;
}
setInterval(rotateUpdates, 5000);
