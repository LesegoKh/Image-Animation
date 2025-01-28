const bodyEl = document.querySelector("body");

bodyEl.style.position = "relative";

bodyEl.addEventListener("mousemove", (event) => {
    const xPos = event.clientX;
    const yPos = event.clientY;

    const spanEl = document.createElement("span"); //creates new span element
    spanEl.style.position = 'absolute';
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.random() * 100; // Randomize the size of the icons 
    spanEl.style.width = size + "px"
    spanEl.style.height = size + "px"
    spanEl.style.pointerEvents = "none"
    bodyEl.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    }, 5000); // removes the icon after 5 seconds
});

