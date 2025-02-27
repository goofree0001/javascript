// https://zenn.dev/lovegraph/articles/15bf1bfde81b26

const list = document.querySelector('ol');
const observedElement = document.createElement('div');
list.insertAdjacentElement('afterend', observedElement);

const callback = (entries) => {
  const numberOfListItems = list.getElementsByTagName('li').length;
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      for (let i = 1; i <= 5; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `list item ${numberOfListItems + i}`;
        list.appendChild(listItem);
      }
    }
  });
};

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.0, // 1.0 から 0.0 に変更
};

const observer = new IntersectionObserver(callback, options);
observer.observe(observedElement);
