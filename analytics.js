/* Portfólio Tchelo Nogueira — Google Analytics 4.
 * Para ativar: preencher GA4_MEASUREMENT_ID com o ID G-... do fluxo Web
 * criado pelo titular em https://analytics.google.com/.
 * Sem esse ID não carrega recursos externos nem coleta dados.
 */
(() => {
  'use strict';

  const GA4_MEASUREMENT_ID = 'G-CRNPBVKKNP';
  if (!/^G-[A-Z0-9]{5,}$/i.test(GA4_MEASUREMENT_ID)) return;

  const preferenceKey = 'tchelo_portfolio_analytics_consent_v1';

  function startAnalytics() {
    if (window.__tcheloGA4Loaded) return;
    window.__tcheloGA4Loaded = true;

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA4_MEASUREMENT_ID, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      send_page_view: true
    });

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA4_MEASUREMENT_ID);
    document.head.appendChild(script);
  }

  function savePreference(value) {
    try { localStorage.setItem(preferenceKey, value); } catch (_) {}
  }

  let preference = '';
  try { preference = localStorage.getItem(preferenceKey) || ''; } catch (_) {}

  if (preference === 'accepted') {
    startAnalytics();
    return;
  }
  if (preference === 'declined') return;

  const banner = document.createElement('section');
  banner.setAttribute('role', 'region');
  banner.setAttribute('aria-label', 'Preferências de estatísticas');
  banner.style.cssText = [
    'position:fixed', 'bottom:14px', 'left:14px', 'right:14px',
    'max-width:620px', 'margin:0 auto', 'z-index:2147483646',
    'background:#202020', 'color:#fff', 'border:1px solid #666',
    'border-radius:9px', 'padding:15px 18px',
    'box-shadow:0 4px 18px rgba(0,0,0,.25)',
    'font:14px/1.5 Arial,sans-serif', 'box-sizing:border-box'
  ].join(';');

  const description = document.createElement('p');
  description.textContent = 'Podemos usar o Google Analytics para saber quais páginas do portfólio são visitadas. A coleta só começa se você aceitar.';
  description.style.cssText = 'margin:0 0 12px';
  banner.appendChild(description);

  const actions = document.createElement('div');
  actions.style.cssText = 'display:flex;gap:10px;flex-wrap:wrap';

  function makeButton(label, primary, callback) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    button.style.cssText = [
      'font:inherit', 'cursor:pointer', 'padding:7px 13px',
      'border-radius:5px', 'border:1px solid #ccc',
      primary ? 'background:#fff;color:#111' : 'background:transparent;color:#fff'
    ].join(';');
    button.addEventListener('click', callback);
    actions.appendChild(button);
  }

  makeButton('Não aceitar', false, () => {
    savePreference('declined');
    banner.remove();
  });
  makeButton('Aceitar estatísticas', true, () => {
    savePreference('accepted');
    banner.remove();
    startAnalytics();
  });
  banner.appendChild(actions);
  document.body.appendChild(banner);
})();
