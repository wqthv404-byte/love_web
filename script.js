// ===================== YES button — hamesha next page le jaye =====================
document.querySelectorAll(".yes-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const next = btn.getAttribute("data-next");
        if (next) {
            window.location.href = next;
        }
    });
});

// ===================== NO button logic =====================
document.querySelectorAll(".no-btn").forEach(btn => {

    // 👉 SIRF page3.html pe NO bhagta rahe (mobile + desktop)
    if (window.location.pathname.includes("page3.html")) {

        const moveButton = () => {
            const x = Math.random() * (window.innerWidth - btn.offsetWidth);
            const y = Math.random() * (window.innerHeight - btn.offsetHeight);

            btn.style.position = "absolute";
            btn.style.left = x + "px";
            btn.style.top = y + "px";
        };

        // Desktop hover
        btn.addEventListener("mouseenter", moveButton);
        // Mobile touch
        btn.addEventListener("touchstart", moveButton);
        // Click bhi bhaga de mobile pe
        btn.addEventListener("click", moveButton);

    }

    // 👉 baki sab pages pe NO bhi next page le jaye
    else {
        btn.addEventListener("click", () => {
            const next = btn.getAttribute("data-next");
            if (next) {
                window.location.href = next;
            }
        });
    }
});

// ===================== Floating hearts for final page =====================
if (window.location.pathname.includes("final.html")) {

    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 4) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);

    }, 500);
            }
