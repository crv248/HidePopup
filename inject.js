try {
  if (document.body && document.body.style && document.body.style.overflow === 'hidden') {
    document.body.style.overflow = 'visible';
  }
  const el = document.getElementsByClassName('fc-ab-root');
  if (el.length) {
    el[0].remove();
  }
} catch (e) {
  console.error("HidePopup inject error:", e);
}