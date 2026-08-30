(() => {
  const layer = document.querySelector('.glitter-layer');
  if (!layer) return;
  const amount = window.innerWidth < 700 ? 35 : 70;
  for (let i = 0; i < amount; i++) {
    const dot = document.createElement('i');
    dot.className = 'glitter';
    dot.style.left = Math.random() * 100 + 'vw';
    dot.style.top = Math.random() * 100 + 'vh';
    dot.style.animationDelay = (Math.random() * 2.2) + 's';
    dot.style.animationDuration = (1.4 + Math.random() * 2.4) + 's';
    const size = 2 + Math.random() * 5;
    dot.style.width = size + 'px';
    dot.style.height = size + 'px';
    layer.appendChild(dot);
  }
})();
