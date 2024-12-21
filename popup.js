chrome.runtime.sendMessage({ type: "getUrls" }, (response) => {
    console.log("URLs received from background:", response); // Log response
    const urlList = document.getElementById("url-list");
    urlList.innerHTML = ""; // Clear any existing content

    if (response && Array.isArray(response) && response.length > 0) {
        response.forEach((url) => {
            const listItem = document.createElement("div");
            listItem.textContent = url; // Display each URL
            urlList.appendChild(listItem);
        });
    } else {
        urlList.textContent = "No URLs intercepted yet."; // Handle empty or undefined response
    }
});
