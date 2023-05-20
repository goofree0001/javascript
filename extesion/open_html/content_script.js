var find_flag = false;
chrome.tabs.query({ currentWindow: true }, function(tabs) {
	for (var i = 0; i < tabs.length; i++) {
		if (tabs[i].url == chrome.runtime.getURL("alert.html")) {
			find_flag = true;
			break;
		}
	}
});

if (find_flag == false) {
	window.open(chrome.runtime.getURL("alert.html"));
}

