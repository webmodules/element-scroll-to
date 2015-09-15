function scrollWrapperElements(element, options) {
  let elementRect = element.getBoundingClientRect();
  let wrapper = element.parentNode;

  while (wrapper != document.body) {
    let wrapperRect = wrapper.getBoundingClientRect();
    let margin = options.margin;
    let deltaX = 0, deltaY = 0;

    if (elementRect.top < wrapperRect.top + margin) {
      deltaY = elementRect.top - wrapperRect.top - margin;
    } else if (elementRect.bottom > wrapperRect.bottom - margin) {
      deltaY = elementRect.bottom - wrapperRect.bottom + margin;
    }
    if (elementRect.left < wrapperRect.left + margin) {
      deltaX = elementRect.left - wrapperRect.left - margin;
    } else if (elementRect.right > wrapperRect.right - margin) {
      deltaX = elementRect.right - wrapperRect.right + margin;
    }
    wrapper.scrollTop += deltaY;
    wrapper.scrollLeft += deltaX;
    wrapper = wrapper.parentNode;
  }

  return elementRect;
}

function scrollWindow(element, options, elementRect) {
  let margin = options.margin;
  let deltaX = 0, deltaY = 0;

  if (elementRect.top < 0 + margin) {
    deltaY = elementRect.top - margin;
  } else if (elementRect.bottom > window.innerHeight - margin) {
    deltaY = elementRect.bottom - window.innerHeight + margin;
  }
  if (elementRect.left < 0 + margin) {
    deltaX = elementRect.left - margin;
  } else if (elementRect.right > window.innerWidth - margin) {
    deltaX = elementRect.right - window.innerWidth + margin;
  }

  window.scrollBy(deltaX, deltaY);
}

function scrollTo(element, options) {
  options = options || {}
  options.margin = options.margin || 0
  var rect = scrollWrapperElements(element, options);
  scrollWindow(element, options, rect);
}

export default scrollTo;
