// Mesma lupa das peças publicitárias, aplicada aos três mosaicos da página de teste.
const mosaics = document.querySelectorAll('.experiences-layout-preview .experience-case-mosaic img');
if (mosaics.length) {
  const lightbox = document.createElement('div');
  lightbox.className = 'project-lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Imagem ampliada');
  lightbox.hidden = true;
  lightbox.innerHTML = '<button type="button" class="lightbox-close" aria-label="Fechar imagem ampliada">×</button><div class="lightbox-viewport"><img alt="" draggable="false"></div><div class="lightbox-tools"><button type="button" class="zoom-out" aria-label="Diminuir zoom">−</button><span class="zoom-value">200%</span><button type="button" class="zoom-in" aria-label="Aumentar zoom">+</button><button type="button" class="zoom-reset">Ajustar</button></div>';
  document.body.appendChild(lightbox);
  const viewport = lightbox.querySelector('.lightbox-viewport');
  const enlarged = lightbox.querySelector('img');
  const zoomValue = lightbox.querySelector('.zoom-value');
  let previousFocus = null, scale = 2, x = 0, y = 0, drag = null;
  const render = () => {
    enlarged.style.transform = 'translate(' + x + 'px,' + y + 'px) scale(' + scale + ')';
    zoomValue.textContent = Math.round(scale * 100) + '%';
    viewport.classList.toggle('can-drag', scale > 1);
  };
  const setZoom = (next, clientX, clientY) => {
    const old = scale;
    scale = Math.max(1, Math.min(6, next));
    if (clientX !== undefined && clientY !== undefined) {
      const rect = viewport.getBoundingClientRect();
      const px = clientX - rect.left - rect.width / 2;
      const py = clientY - rect.top - rect.height / 2;
      x = px - (px - x) * scale / old;
      y = py - (py - y) * scale / old;
    }
    if (scale === 1) { x = 0; y = 0; }
    render();
  };
  const close = () => {
    lightbox.hidden = true;
    document.body.classList.remove('lightbox-open');
    drag = null;
    if (previousFocus) previousFocus.focus();
  };
  mosaics.forEach(img => {
    img.classList.add('zoomable-image');
    img.tabIndex = 0;
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', 'Ampliar detalhes: ' + (img.alt || 'mosaico'));
    const open = () => {
      previousFocus = document.activeElement;
      enlarged.src = img.currentSrc || img.src;
      enlarged.alt = img.alt;
      scale = 2; x = 0; y = 0;
      lightbox.hidden = false;
      document.body.classList.add('lightbox-open');
      render();
      lightbox.querySelector('.lightbox-close').focus();
    };
    img.addEventListener('click', open);
    img.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); }
    });
  });
  viewport.addEventListener('wheel', event => {
    event.preventDefault();
    setZoom(scale * (event.deltaY < 0 ? 1.2 : 1 / 1.2), event.clientX, event.clientY);
  }, { passive: false });
  viewport.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    drag = { px: event.clientX, py: event.clientY, x, y };
    viewport.setPointerCapture(event.pointerId);
    viewport.classList.add('dragging');
  });
  viewport.addEventListener('pointermove', event => {
    if (!drag) return;
    x = drag.x + event.clientX - drag.px;
    y = drag.y + event.clientY - drag.py;
    render();
  });
  const stopDrag = () => { drag = null; viewport.classList.remove('dragging'); };
  viewport.addEventListener('pointerup', stopDrag);
  viewport.addEventListener('pointercancel', stopDrag);
  lightbox.querySelector('.zoom-in').addEventListener('click', () => setZoom(scale * 1.5));
  lightbox.querySelector('.zoom-out').addEventListener('click', () => setZoom(scale / 1.5));
  lightbox.querySelector('.zoom-reset').addEventListener('click', () => { scale = 1; x = 0; y = 0; render(); });
  lightbox.querySelector('.lightbox-close').addEventListener('click', close);
  lightbox.addEventListener('click', event => { if (event.target === lightbox) close(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !lightbox.hidden) close();
  });
}
