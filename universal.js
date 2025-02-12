const scrollContainer = document.getElementById("scrollmenu");
          const leftArrow = document.querySelector(".scroll-left");
          const rightArrow = document.querySelector(".scroll-right");
          function updateArrows() {
              // Megmutatja a balra nyílat, ha elmozdult az eredeti pozícióról. 
              leftArrow.style.display = scrollContainer.scrollLeft > 0 ? "block" : "none";
             
              // Megmutatja a jobbra nyílat, ha van elem a scroll menüben.
              rightArrow.style.display = (scrollContainer.scrollLeft + scrollContainer.clientWidth) < scrollContainer.scrollWidth ? "block" : "none";
          }
          function scrollMenu(distance) {
              scrollContainer.scrollBy({ left: distance, behavior: 'smooth' });
          }
          // Vizsgálja a nyílakat mikor pörgeti a scroll menüt.
          window.onload = updateArrows;
          scrollContainer.addEventListener("scroll", updateArrows);