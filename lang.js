function changeLanguage(lang) {
  fetch(`lang/${lang}.json`)
    .then(response => response.json())
    .then(data => {
      for (const key in data) {
        const element = document.getElementById(key);
        if (element) {
          element.innerHTML = data[key];
        }
      }
    });
}