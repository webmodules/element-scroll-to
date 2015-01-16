function scrollWrapperElements(element) {
  let wrapper = element.parentNode;
  while (wrapper != document.body) {
    let elementRect = element.getBoundingClientRect();
    let wrapperRect = wrapper.getBoundingClientRect();
    let deltaX = 0, deltaY = 0;
    if (elementRect.top < wrapperRect.top) {
      deltaY = elementRect.top - wrapperRect.top;
    } else if (elementRect.bottom > wrapperRect.bottom) {
      deltaY = elementRect.bottom - wrapperRect.bottom;
    }
    if (elementRect.left < wrapperRect.left) {
      deltaX = elementRect.left - wrapperRect.left;
    } else if (elementRect.right > wrapperRect.right) {
      deltaX = elementRect.right - wrapperRect.right;
    }
    wrapper.scrollTop += deltaY;
    wrapper.scrollLeft += deltaX;
    wrapper = wrapper.parentNode;
  }
}

function scrollWindow(element) {
  let elementRect = element.getBoundingClientRect();
  let deltaX = 0, deltaY = 0;
  if (elementRect.top < 0) {
    deltaY = elementRect.top;
  } else if (elementRect.bottom > window.innerHeight) {
    deltaY = elementRect.bottom - window.innerHeight;
  }
  if (elementRect.left < 0) {
    deltaX = elementRect.left;
  } else if (elementRect.right > window.innerWidth) {
    deltaX = elementRect.right - window.innerWidth;
  }
  window.scrollBy(deltaX, deltaY);
}

function scrollTo(element) {
  scrollWrapperElements(element);
  scrollWindow(element); 
}

export default scrollTo;