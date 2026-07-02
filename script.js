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

    // Close mobile menu when clicking any nav link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });
}

// ==========================
// DROPDOWN MENU (ROBUST FIX)
// ==========================
const dropdown = document.querySelector(".dropdown");
const dropdownToggle = document.querySelector(".dropdown > a");

if (dropdown && dropdownToggle) {

    // toggle dropdown
    dropdownToggle.addEventListener("click", (e) => {
        e.preventDefault();
        dropdown.classList.toggle("active");
    });

    // close when clicking outside
    document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("active");
        }
    });

    // close when clicking inside menu items
    document.querySelectorAll(".dropdown-menu a").forEach(item => {
        item.addEventListener("click", () => {
            dropdown.classList.remove("active");
        });
    });
}

// ==========================
// SCROLL REVEAL (OPTIMISED + SAFE)
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

// run on scroll + load
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
// MOTION ADVERT (SAFE ROTATOR)
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

    // fade out
    adText.classList.add("ad-fade");

    setTimeout(() => {
        adIndex = (adIndex + 1) % adMessages.length;
        adText.textContent = adMessages[adIndex];

        // fade in
        adText.classList.remove("ad-fade");
    }, 400);
}

// start only if element exists
if (adText) {
    setInterval(rotateAdText, 3000);
}
