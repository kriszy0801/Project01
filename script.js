 // add listener in parent window
 window.addEventListener("message", function(event) {
    if (typeof event.data === 'string'){
        document.getElementById('externalPage').src = event.data;
    }
}, false);
// post message to the appBuilding iframe
//window.parent.postMessage(message, 'https://wsappbuild-01.cnry.projectorca.cloud');