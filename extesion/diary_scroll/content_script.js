
const url = "https://www.cityheaven.net/hokkaido/diarytop/diarynewlist/biz1-biz4-biz6-biz7/A0101/typ601/";
var numberOfListItems = 1;

async function getData(url) {
	const response = await fetch(url);
	const text = await response.text();

	var parser = new DOMParser();
	var doc = parser.parseFromString(text, "text/html");

	var ul_container_lis = doc.querySelectorAll("#container > li");

	return ul_container_lis

}

async function main() {

	const list = document.querySelector("#container");
	list.removeAttribute('style');

	var ul_container_lis = document.querySelectorAll("#container > li");
	for (var i = 0; i < ul_container_lis.length; i++) {
		ul_container_lis[i].removeAttribute('style');
	}

	const observedElement = document.querySelector('div[class="shop_nav clearfix"]');

	const callback = async (entries) => {
		for (const entry of entries) {
			if (entry.isIntersecting) {
				numberOfListItems = numberOfListItems + 1
				var url_next = url + numberOfListItems
				var childNodes = await getData(url_next);
				for (var i = 0; i < childNodes.length; i++) {
					childNodes[i].removeAttribute('style');
					list.appendChild(childNodes[i])
				}
			}
		}
	};

	const options = {
	  root: null,
	  rootMargin: "0px",
	  threshold: 0.0, // 1.0 から 0.0 に変更
	};

	const observer = new IntersectionObserver(callback, options);
	observer.observe(observedElement);

}

main();
