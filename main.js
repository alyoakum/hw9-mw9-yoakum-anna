var accordionHeaders = document.querySelectorAll('#accordion .accordion-headers');
var accordionDescriptions = document.querySelectorAll('#accordion .accordion-description');

//dropdown function
function expandAccordionDescription() {

//toggle
  for (i = 0; i < accordionHeaders.length; i++) {
    accordionHeaders[i].childNodes[3].innerHTML = '<i class="fas fa-chevron-down"></i>';
    accordionDescriptions[i].classList.remove('accordion-open');
  }


this.nextElementSibling.classList.toggle('accordion-open');
this.childNodes[3].innerHTML = '<i class="fas fa-chevron-up"></i>';
}

//event listener
for (i=0; i < accordionHeaders.length; i++) {

accordionHeaders[i].addEventListener('click', expandAccordionDescription);
}
