var outputEl = document.getElementById('output-target');

var articleEl = document.getElementsByClassName('article-section');
console.log('articleEl', articleEl);

function handleSectionClick(event) {
  console.log(event);
  var elementText = event.target.innerHTML;
  outputEl.innerHTML = 'You clicked on the ' + elementText;
}

for (var i = 0; i < articleEl.length; i++) {
  articleEl.item(i).addEventListener('click', handleSectionClick);
}

var header = document.getElementById('page-header');

header.addEventListener('mouseover', handleHeaderMouseOver);
header.addEventListener('mouseout', handleHeaderMouseOut);

function handleHeaderMouseOver(event) {
  outputEl.innerHTML = 'You moved your mouse over the header';
}

function handleHeaderMouseOut(event) {
  outputEl.innerHTML = 'You left me';
}

var fieldEl = document.getElementById('keypress-input');

fieldEl.addEventListener('keyup', function(event){
  console.log('event', event);
  outputEl.innerHTML = event.target.value;
});

var guineaPig = document.getElementById('guinea-pig');

document.getElementById('add-color')
  .addEventListener('click', function(event){
    guineaPig.classList.toggle('blue');
});

document.getElementById('make-large')
  .addEventListener('click', function(event){
    guineaPig.classList.toggle('large');
});

document.getElementById('add-border')
  .addEventListener('click', function(event){
    guineaPig.classList.toggle('bordered');
});

document.getElementById('add-rounding')
  .addEventListener('click', function(event){
    guineaPig.classList.toggle('rounded');
});
