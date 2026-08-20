(function () {
  const orbit = document.getElementById('devOrbit');
  const icons = orbit.querySelectorAll('.orbit-icon');

  const AMPLITUDE_X = 100;    // ancho del 8, en px
  const AMPLITUDE_Y = 170;    // alto del 8, en px
  const IDLE_SPEED  = 0.002;  // avance mínimo con el mouse quieto
  const MOUSE_BOOST = 0.0015; // cuánto acelera cada px que movés el mouse

  let t = 0;
  let lastX = null;
  let lastY = null;

  document.addEventListener('mousemove', (e) => {
    if (lastX !== null) {
      const delta = Math.hypot(e.clientX - lastX, e.clientY - lastY);
      t += delta * MOUSE_BOOST;
    }
    lastX = e.clientX;
    lastY = e.clientY;
  });

  function animate() {
    t += IDLE_SPEED;

    icons.forEach((icon, i) => {
        const phase = t + i * (2 * Math.PI / icons.length);

        const x = AMPLITUDE_X * Math.sin(phase);
        const y = AMPLITUDE_Y * Math.sin(phase) * Math.cos(phase);

        icon.style.transform = `translate(${x}px, ${y}px)`;
    });

    requestAnimationFrame(animate);
  }

  animate();
})();