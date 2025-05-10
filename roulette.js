const skins = [
    {
      hero: "Anti-Mage",
      skin: "Proselyte of the Sakura Clan",
      image: "images/skins/Crownfall 2024 Collectors Cache/Anti-Mage - Proselyte of the Sakura Clan.png"
    },
    {
      hero: "Grimstroke",
      skin: "Elegy of the Reaper",
      image: "images/skins/Crownfall 2024 Collectors Cache/Grimstroke - Elegy of the Reaper.png"
    },
    {
      hero: "Juggernaut",
      skin: "Ancient Exile",
      image: "images/skins/Crownfall 2024 Collectors Cache/Juggernaut - Ancient Exile (Very Rare).png"
    },
    {
      hero: "Luna",
      skin: "Bloodmoon Stalker",
      image: "images/skins/Crownfall 2024 Collectors Cache/Luna - Bloodmoon Stalker (Rare).png"
    },
    {
      hero: "Marci",
      skin: "Faithful Fortune",
      image: "images/skins/Crownfall 2024 Collectors Cache/Marci - Faithful Fortune.png"
    },
    {
      hero: "Muerta",
      skin: "Blackwing Bandolera",
      image: "images/skins/Crownfall 2024 Collectors Cache/Muerta - Blackwing Bandolera.png"
    }
  ];
  
  const strip = document.getElementById("skin-strip");
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  const popupText = document.getElementById("popup-text");
  
  // Удлиняем ленту скинов
  const repeatCount = 10;
  const extended = Array(repeatCount).fill(skins).flat();
  
  // Наполняем ленту
  function populateStrip() {
    strip.innerHTML = "";
    extended.forEach(skin => {
      const img = document.createElement("img");
      img.src = skin.image;
      img.alt = skin.hero;
      strip.appendChild(img);
    });
  }
  populateStrip();
  
  // При нажатии на кнопку запускаем рулетку
  document.getElementById("open-case").addEventListener("click", () => {
    const skinWidth = 180;
    const visibleSkins = 6;
  
    const stopIndex = Math.floor(Math.random() * skins.length) + skins.length * 4;
    const center = (document.querySelector(".case-window").offsetWidth / 2) - (skinWidth / 2);
    const targetPosition = -(stopIndex * skinWidth - center);
  
    // ⏩ Плавная и быстрая анимация (около 5 секунд)
    strip.style.transition = "transform 5s cubic-bezier(0.25, 1, 0.3, 1)";
    strip.style.transform = `translateX(${targetPosition}px)`;
  
    // После завершения прокрутки — показать победителя
    setTimeout(() => {
      const winningSkin = extended[stopIndex];
      popupImg.src = winningSkin.image;
      popupText.textContent = `${winningSkin.hero} — ${winningSkin.skin} (Скидка 10%)`;
      popup.classList.add("show");
  
      setTimeout(() => popup.classList.remove("show"), 6000);
    }, 5100);
  });
  