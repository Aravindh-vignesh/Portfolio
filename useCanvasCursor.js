// Create the cursor element
const cursor = document.createElement('div');
cursor.style.position = 'absolute';
cursor.style.width = '20px';
cursor.style.height = '20px';
cursor.style.borderRadius = '50%';
cursor.style.backgroundColor = 'rgba(0, 150, 255, 0.7)';
cursor.style.pointerEvents = 'none';
cursor.style.transition = 'width 0.2s, height 0.2s, background-color 0.2s';
cursor.style.zIndex = '9999';
document.body.appendChild(cursor);

// Update the cursor's position
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  cursor.style.left = `${mouseX - cursor.offsetWidth / 2}px`;
  cursor.style.top = `${mouseY - cursor.offsetHeight / 2}px`;
});

// Make the cursor grow on mouse down and shrink on mouse up
document.addEventListener('mousedown', () => {
  cursor.style.width = '40px';
  cursor.style.height = '40px';
  cursor.style.backgroundColor = 'rgba(255, 0, 0, 0.7)'; // Red on click
});

document.addEventListener('mouseup', () => {
  cursor.style.width = '20px';
  cursor.style.height = '20px';
  cursor.style.backgroundColor = 'rgba(0, 150, 255, 0.7)'; // Original color
});
