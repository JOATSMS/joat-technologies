"use strict";

// ==========================
// MOBILE MENU (SAFE + CLEAN)
// ==========================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // ==========================
    // FIXED NAV LINK HANDLING
    // (prevents external link conflict)
    // ==========================
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", (e) => {

            const href = link.getAttribute("href");
            const isExternal =
                link.target === "_blank" ||
                href?.startsWith("http");

            // ONLY close menu for internal links
            if (!isExternal) {
                navMenu.classList.remove("active");
            }

            // For external links → force safe open
            if (isExternal) {
                e.preventDefault();
                window.open(href, "_blank", "noopener,noreferrer");
            }
        });
    });
}

// ==========================
// DROPDOWN MENU (ROBUST FIX)
// ==========================
const dropdown = document.querySelector(".dropdown");
const dropdownToggle = document.querySelector(".dropdown > a");

if (dropdown && dropdownToggle) {

    dropdownToggle.addEventListener("click", (e) => {
        e.preventDefault();
        dropdown.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("active");
        }
    });

    document.querySelectorAll(".dropdown-menu a").forEach(item => {
        item.addEventListener("click", () => {
            dropdown.classList.remove("active");
        });
    });
}

// ==========================
// SCROLL REVEAL (OPTIMISED)
// ==========================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ==========================
// CONTACT MESSAGE
// ==========================
function contactJOAT(event) {
    event.preventDefault();
    alert("Please contact JOAT Technologies for more information.");
}

// ==========================
// MOTION ADVERT ROTATOR
// ==========================
const adMessages = [
    "WELCOME TO JOAT ReportPro",
    "Manage Your School with Ease",
    "Designed for Educators in the 21st Century",
    "Generate Professional Report Cards Instantly",
    "Generate Accurate Transcripts with Ease",
    "Generate SBA Reports with Precision",
    "Automated Attendance Management System",
    "Real-Time Academic Analytics Dashboard",
    "Multi-School Management Support",
    "Secure Data Backup & Protection",
    "Digitalise Your Entire School Workflow",
    "Efficiency starts here — go fully digital"
];

const adText = document.getElementById("adText");
let adIndex = 0;

function rotateAdText() {
    if (!adText) return;

    adText.classList.add("ad-fade");

    setTimeout(() => {
        adIndex = (adIndex + 1) % adMessages.length;
        adText.textContent = adMessages[adIndex];

        adText.classList.remove("ad-fade");
    }, 400);
}

if (adText) {
    setInterval(rotateAdText, 3000);
}
