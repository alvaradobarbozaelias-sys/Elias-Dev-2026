function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });

  localStorage.setItem("lang", lang);
}