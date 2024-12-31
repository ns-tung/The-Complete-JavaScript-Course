import {
  computePosition,
  flip,
  shift,
  offset,
} from 'https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.6.3/+esm';

window.onload = function () {

  document.addEventListener('contextmenu', e => e.preventDefault());

  const tooltipElement = document.querySelectorAll('[role="tooltip"]');

  tooltipElement.forEach(tooltip => {
    const float = tooltip.nextElementSibling; // float is the next sibling

    function setUpTooltip() {
      computePosition(tooltip, float, {
        placement: 'top',
        middleware: [offset(4), flip(), shift({ padding: 5 })],
      }).then(({ x, y }) => {
        Object.assign(float.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      });
    }

    function showTooltip() {
      float.style.display = 'block';
      setUpTooltip();
    }

    function hideTooltip() {
      float.style.display = 'none';
    }

    [
      ['mouseenter', showTooltip],
      ['mouseleave', hideTooltip],
      ['focus', showTooltip],
      ['blur', hideTooltip],
    ].forEach(([event, listener]) =>
      tooltip.addEventListener(event, listener)
    );
  });

  const courseContent = document.querySelector('a[href="#course-content"]');
  courseContent && courseContent.addEventListener('click', function (event) {
    event.preventDefault();
    const id = event.target.closest('a').getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth'});
  });

  const links = document.querySelectorAll('a.token.url-link[href]');

  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      window.open(link.href, '_blank');
    });
  });

};