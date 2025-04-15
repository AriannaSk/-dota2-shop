const treasures = [
   
    { name: "Crownfall 2024 Collector's Cache", image: "images/Crownfall 2024 Collector's Cache.png" },
    { name: "Crownfall 2024 Collector's Cache II", image: "images/Crownfall 2024 Collector's Cache II.png" },
    { name: "Winter 2024 Heroes Hoard", image: "images/Winter 2024 Heroes' Hoard.png" },
  
    { name: "August 2023 Collector's Cache", image: "images/August 2023 Collector's Cache.png" },
  
    { name: "Diretide 2022 Collector's Cache", image: "images/Diretide 2022 Collector's Cache.png" },
    { name: "Diretide 2022 Collector's Cache II", image: "images/Diretide 2022 Collector's Cache II.png" },
  
    { name: "Aghanim's 2021 Collector's Cache", image: "images/Aghanim's 2021 Collector's Cache.png" },
    { name: "Nemestice 2021 Collector's Cache", image: "images/Nemestice 2021 Collector's Cache.png" },

    { name: "The International 2020 Collector's Cache", image: "images/The International 2020 Collector's Cache.png" },
    { name: "The International 2020 Collector's Cache II", image: "images/The International 2020 Collector's Cache II.png" },
  
    { name: "Collector's Cache 2019", image: "images/Collector's Cache 2019.png" },
    { name: "Collector's Cache II 2019", image: "images/Collector's Cache II 2019.png" },
  
    { name: "The International 2018 Collector's Cache", image: "images/The International 2018 Collector's Cache.png" },
    { name: "The International 2018 Collector's Cache II", image: "images/The International 2018 Collector's Cache II.png" },
  
    { name: "The International 2017 Collector's Cache", image: "images/The International 2017 Collector's Cache.png" },
  
    { name: "The International 2016 Collector's Cache", image: "images/The International 2016 Collector's Cache.png" },

    { name: "The International 2015 Collector's Cache", image: "images/The International 2015 Collector's Cache.png" }
  ];
  
  const catalog = document.getElementById("catalog");

  treasures.forEach(treasure => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${treasure.image}" alt="${treasure.name}">
      <h3>${treasure.name}</h3>
    `;
    card.addEventListener("click", () => {
      window.location.href = `treasure.html?id=${encodeURIComponent(treasure.name)}`;
    });
    catalog.appendChild(card);
  });
  