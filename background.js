let interceptedUrls = [];

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        console.log("Request intercepted:", details.url);
        interceptedUrls.push(details.url); // Add the URL to the array
    },
    { urls: ["<all_urls>"] }
);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "getUrls") {
        console.log("Popup requested URLs. Sending:", interceptedUrls);
        sendResponse(interceptedUrls); // Send the array of URLs
    }
    return true; // IMPORTANT: This keeps the message channel open for async sendResponse
});
