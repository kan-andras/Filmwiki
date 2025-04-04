document.addEventListener("DOMContentLoaded", function () {
    function setupScrollMenu(menuId, leftArrowClass, rightArrowClass) {
        const scrollContainer = document.getElementById(menuId);
        const leftArrow = document.querySelector(leftArrowClass);
        const rightArrow = document.querySelector(rightArrowClass);

        function updateArrows() {
            leftArrow.style.display = scrollContainer.scrollLeft > 0 ? "block" : "none";
            rightArrow.style.display = (scrollContainer.scrollLeft + scrollContainer.clientWidth) < scrollContainer.scrollWidth ? "block" : "none";
        }

        function scrollMenu(distance) {
            scrollContainer.scrollBy({ left: distance, behavior: 'smooth' });
        }

        leftArrow.addEventListener("click", () => scrollMenu(-300));
        rightArrow.addEventListener("click", () => scrollMenu(300));
        scrollContainer.addEventListener("scroll", updateArrows);
        updateArrows(); // Alapértelmezett állapot frissítése
    }

    // Két különböző scrollmenü inicializálása
    setupScrollMenu("scrollmenu", ".scroll-left", ".scroll-right");
    setupScrollMenu("scrollmenuketto", ".scroll-bal", ".scroll-jobb");
    setupScrollMenu("scrollmenuharom", ".scroll-bal1", ".scroll-jobb1");
});