document.getElementById("loveButton").addEventListener("click", function() {
    let duration = 10 * 1000; // 10 seconds
    let startTime = Date.now();

    function createHeart() {
        if (Date.now() - startTime > duration) return;

        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";

        document.getElementById("hearts-container").appendChild(heart);

        setTimeout(() => { heart.remove(); }, 4000);
        requestAnimationFrame(createHeart);
    }

    createHeart();
});
