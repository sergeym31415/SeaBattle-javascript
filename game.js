const getElement = id => document.getElementById(id);

const getCoordinates = el => {
  const coords = el.getBoundingClientRect();
  return{
    left: coords.left + window.pageXOffset,
    right: coords.right + window.pageXOffset,
    top: coords.top + window.pageYOffset,
    bottom: coords.bottom + window.pageYOffset
  };
}

alert(getCoordinates(getElement('human_field')).left);
