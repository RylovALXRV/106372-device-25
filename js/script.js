'use strict';

function findElement(elem, parent, cls) {
  while (elem !== parent) {
    if (elem.classList.contains(cls)) {
      return elem;
    }
    elem = elem.parentNode;
  }
  return false;
}

document.addEventListener('click', function (event) {
  var target = event.target;
  var currentTarget = event.currentTarget;
  var jsOpenElement = findElement(target, currentTarget, 'js-open');

  if (jsOpenElement) {
    event.preventDefault();
    var modalWrapperElement = document.querySelector('.js-' + jsOpenElement.dataset.name);
    modalWrapperElement.classList.remove('hidden');
    modalWrapperElement.classList.add('overlay');
  }
});

document.addEventListener('click', function (event) {
  var target = event.target;
  var currentTarget = event.currentTarget;

  if (target.classList.contains('js-remove')) {
    var parentElement = findElement(target, currentTarget, 'modal-wrapper')
    parentElement.classList.remove('overlay');
    parentElement.classList.add('hidden');
  }
});
