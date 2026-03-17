// 🔥 Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


// 🔥 Typing Effect
const text = "Pawan";
let i = 0;
function typingEffect() {
    if (i < text.length) {
        document.getElementById("name").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 150);
    }
}

// Clear first
document.getElementById("name").innerHTML = "";
typingEffect();


// 🔥 Button Animation
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.9)";
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 150);
    });
});


// 🔥 Scroll Reveal Animation
const revealElements = document.querySelectorAll("main, .year, #ap, #pd2, #exd2");

window.addEventListener("scroll", () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});

// initial style
revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.8s ease";
});


// 🔥 Skill Scroll Pause on Hover
const skillSection = document.getElementById("md2");

skillSection.addEventListener("mouseenter", () => {
    skillSection.style.animationPlayState = "paused";
});

skillSection.addEventListener("mouseleave", () => {
    skillSection.style.animationPlayState = "running";
});


// 🔥 Navbar Active Highlight
const sections = document.querySelectorAll("main");
const navLinks = document.querySelectorAll("header a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.style.color = "white";
        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#ff00ff";
        }
    });
});