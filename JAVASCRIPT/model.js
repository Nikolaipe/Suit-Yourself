const model = {
  view: document.getElementById("app"),

  clothing: [
    //TODO legg til mange plagg med forskjellige kriterier, gjerne 2 eller 3 alternativer per
    //kategori for hver sesong med forskjellige sesong- og værkriterier.
    //{
      //plaggets navn
      //name: "Jeans",
      //TODO finn noen bilder. Helst i samme artstyle, men ikke nødvendig
      //img: "bilde av jeans",
      //tops, bottoms, headwear, socks, shoes
      // category: "bottoms",
      //sesong den kan brukes
      // season: ["spring", "fall"],
      //anbefalt for type vær. sunny, cloudy, windy, rainy
      // weather: ["sunny", "cloudy", "windy"],
    //},
    {
      name: "Acid-wached jacket",
      img: "IMG/Tops/Acid-wached jacket.png",
      category: "tops",
      season: ["spring","summer","fall",],
      weather: ["cloudy", "rainy",],
    },
    {
      name: "After-school jacket",
      img: "IMG/Tops/After-school jacket.png",
      category: "tops",
      season: ["spring","summer","fall",],
      weather: ["cloudy", "rainy",],
    },
    {
      name: "Biker jacket",
      img: "IMG/Tops/Biker jacket.png",
      category: "tops",
      season: ["spring","summer","fall",],
      weather: ["cloudy", "rainy",],
    },
    {
      name: "Career jacket",
      img: "IMG/Tops/Career jacket.png",
      category: "tops",
      season: ["spring","summer","fall",],
      weather: ["sunny", "cloudy",],
    },
    {
      name: "Checkered chesterfield coat",
      img: "IMG/Tops/Checkered chesterfield coat.png",
      category: "tops",
      season: ["fall", "winter",],
      weather: ["sunny", "cloudy", "rainy"],
    },
    {
      name: "Checkered chesterfield coat 2",
      img: "IMG/Tops/Checkered chesterfield coat 2.png",
      category: "tops",
      season: ["fall", "winter",],
      weather: ["sunny", "cloudy", "rainy"],
    },
    {
      name: "Cycling shirt",
      img: "IMG/Tops/Cycling shirt.png",
      category: "tops",
      season: ["summer",],
      weather: ["sunny", "cloudy",],
    },
    {
      name: "Denim jacket",
      img: "IMG/Tops/Denim jacket.png",
      category: "tops",
      season: ["fall",],
      weather: ["sunny",],
    },
    {
      name: "Dodo Air Lines tee",
      img: "IMG/Tops/Dodo Air Lines tee.png",
      category: "tops",
      season: ["summer",],
      weather: ["sunny",],
    },
    {
      name: "Dotted raincoat",
      img: "IMG/Tops/Dotted raincoat.png",
      category: "tops",
      season: ["spring", "summer",],
      weather: ["rainy",],
    },
    {
      name: "Fitness tank",
      img: "IMG/Tops/Fitness tank.png",
      category: "tops",
      season: ["summer",],
      weather: ["sunny",],
    },
    {
      name: "Groovy shirt",
      img: "IMG/Tops/Groovy shirt.png",
      category: "tops",
      season: ["spring", "fall",],
      weather: ["sunny",],
    },
    {
      name: "Labelle coat",
      img: "IMG/Tops/Labelle coat.png",
      category: "tops",
      season: ["winter",],
      weather: ["cloudy", "rainy"],
    },
    {
      name: "Basketball shorts",
      img: "IMG/Bottoms/Basketball shorts.png",
      category: "bottoms",
      season: ["summer",],
      weather: ["sunny", "cloudy",],
    },
    {
      name: "Belted wraparound skirt",
      img: "IMG/Bottoms/Belted wraparound skirt.png",
      category: "bottoms",
      season: ["fall",],
      weather: ["sunny", "cloudy",],
    },
    {
      name: "Career skirt",
      img: "IMG/Bottoms/Career skirt.png",
      category: "bottoms",
      season: ["spring", "summer", "fall",],
      weather: ["sunny", "cloudy",],
    },
    {
      name: "Denim pants",
      img: "IMG/Bottoms/Denim pants.png",
      category: "bottoms",
      season: ["spring", "summer", "fall", "winter",],
      weather: ["sunny", "cloudy", "rainy",],
    },
    {
      name: "Denim skirt 2",
      img: "IMG/Bottoms/Denim skirt 2.png",
      category: "bottoms",
      season: ["spring", "summer",],
      weather: ["sunny", "cloudy",],
    },
    {
      name: "Embellished denim pants 2",
      img: "IMG/Bottoms/Embellished denim pants 2.png",
      category: "bottoms",
      season: ["spring", "summer", "fall", "winter",],
      weather: ["sunny", "cloudy", "rainy",],
    },
    {
      name: "Embellished denim pants",
      img: "IMG/Bottoms/Embellished denim pants.png",
      category: "bottoms",
      season: ["spring", "summer", "fall", "winter",],
      weather: ["sunny", "cloudy", "rainy",],
    },
    {
      name: "Fringe skirt",
      img: "IMG/Bottoms/Fringe skirt.png",
      category: "bottoms",
      season: ["spring", "summer", "fall",],
      weather: ["sunny", "cloudy",],
    },
    {
      name: "Jogging shorts",
      img: "IMG/Bottoms/Jogging shorts.png",
      category: "bottoms",
      season: ["summer",],
      weather: ["sunny", "cloudy",],
    },
    {
      name: "Long denim skirt",
      img: "IMG/Bottoms/Long denim skirt.png",
      category: "bottoms",
      season: ["spring", "fall",],
      weather: ["sunny", "cloudy",],
    },
    {
      name: "Sailor skirt",
      img: "IMG/Bottoms/Sailor skirt.png",
      category: "bottoms",
      season: ["spring", "summer",],
      weather: ["sunny", "cloudy",],
    },
    {
      name: "Sailor skirt 2",
      img: "IMG/Bottoms/Sailor skirt 2.png",
      category: "bottoms",
      season: ["spring", "summer",],
      weather: ["sunny", "cloudy",],
    },
    {
      name: "Sailor skirt 3",
      img: "IMG/Bottoms/Sailor skirt 3.png",
      category: "bottoms",
      season: ["spring", "summer",],
      weather: ["sunny", "cloudy",],
    },
    {
      name: "Tweed frilly skirt 2",
      img: "IMG/Bottoms/Tweed frilly skirt 2.png",
      category: "bottoms",
      season: ["spring", "summer",],
      weather: ["sunny", "cloudy"],
    },
    {
      name: "Tweed frilly skirt",
      img: "IMG/Bottoms/Tweed frilly skirt.png",
      category: "bottoms",
      season: ["spring", "summer",],
      weather: ["sunny", "cloudy"],
    },
    {
      name: "Two-tone pants",
      img: "IMG/Bottoms/Two-tone pants.png",
      category: "bottoms",
      season: ["spring", "summer", "fall", "winter",],
      weather: ["sunny", "cloudy", "rainy",],
    },
    {
      name: "Beret",
      img: "IMG/Headwear/Beret.png",
      category: "headwear",
      season: ["fall", "winter",],
      weather: ["cloudy", "rainy"],
    },
    {
      name: "Bowler hat with ribbon",
      img: "IMG/Headwear/Bowler hat with ribbon.png",
      category: "headwear",
      season: ["fall", "winter",],
      weather: ["sunny", "cloudy", "rainy"],
    },
    {
      name: "Bowler hat with ribbon 2",
      img: "IMG/Headwear/Bowler hat with ribbon 2.png",
      category: "headwear",
      season: ["fall", "winter",],
      weather: ["sunny", "cloudy", "rainy"],
    },
    {
      name: "Bowler hat with ribbon 3",
      img: "IMG/Headwear/Bowler hat with ribbon 3.png",
      category: "headwear",
      season: ["fall", "winter",],
      weather: ["sunny", "cloudy", "rainy"],
    },
    {
      name: "Crown",
      img: "IMG/Headwear/Crown.png",
      category: "headwear",
      season: ["spring", "summer", "fall", "winter",],
      weather: ["sunny", "cloudy", "rainy",],
    },
    {
      name: "Dandy hat",
      img: "IMG/Headwear/Dandy hat.png",
      category: "headwear",
      season: ["spring", "summer"],
      weather: ["sunny", "cloudy"],
    },
    {
      name: "Denim cap",
      img: "IMG/Headwear/Denim cap.png",
      category: "headwear",
      season: ["spring", "summer"],
      weather: ["sunny", "cloudy"],
    },
    {
      name: "Detective hat",
      img: "IMG/Headwear/Detective hat.png",
      category: "headwear",
      season: ["fall",],
      weather: ["sunny", "rainy", "cloudy",],
    },
    {
      name: "Fedora",
      img: "IMG/Headwear/Fedora.png",
      category: "headwear",
      season: ["spring", "summer", "fall", "winter",],
      weather: ["sunny", "cloudy", "rainy",],
    },
    {
      name: "Giant ribbon",
      img: "IMG/Headwear/Giant ribbon.png",
      category: "headwear",
      season: ["spring", "summer",],
      weather: ["sunny", "cloudy",],
    },
    {
      name: "Outdoor hat",
      img: "IMG/Headwear/Outdoor hat.png",
      category: "headwear",
      season: ["spring", "summer", "fall", "winter",],
      weather: ["rainy",],
    },
    {
      name: "Outdoor hat 2",
      img: "IMG/Headwear/Outdoor hat 2.png",
      category: "headwear",
      season: ["spring", "summer", "fall", "winter",],
      weather: ["rainy",],
    },
    {
      name: "Steampunk hat",
      img: "IMG/Headwear/Steampunk hat.png",
      category: "",
      season: ["spring", "summer", "fall", "winter",],
      weather: ["sunny", "cloudy", "rainy",],
    },
    {
      name: "Steampunk hat 2",
      img: "IMG/Headwear/Steampunk hat 2.png",
      category: "",
      season: ["spring", "summer", "fall", "winter",],
      weather: ["sunny", "cloudy", "rainy",],
    },
    {
      name: "Plain cap",
      img: "IMG/Headwear/Plain cap.png",
      category: "headwear",
      season: ["spring", "summer", "fall", "winter",],
      weather: ["sunny", "cloudy", "rainy",],
    },
    {
      name: "Wide-brim strawhat",
      img: "IMG/Headwear/Wide-brim strawhat.png",
      category: "headwear",
      season: ["summer",],
      weather: ["sunny",],
    },
    {
      name: "Argyle crew socks",
      img: "IMG/Socks/Argyle crew socks.png",
      category: "socks",
      season: ["winter",],
      weather: ["sunny", "rainy", "cloudy",],
    },
    {
      name: "Dotted knee-high socks",
      img: "IMG/Socks/Dotted knee-high socks.png",
      category: "socks",
      season: ["spring", "fall",],
      weather: ["sunny", "rainy", "cloudy",],
    },
    {
      name: "Flowery-dot tights",
      img: "IMG/Socks/Flowery-dot tights.png",
      category: "socks",
      season: ["spring", "fall",],
      weather: ["sunny", "rainy", "cloudy",],
    },
    {
      name: "Frilly socks",
      img: "IMG/Socks/Frilly socks.png",
      category: "socks",
      season: ["spring", "summer", "fall",],
      weather: ["sunny", "rainy", "cloudy",],
    },
    {
      name: "Geometric-print socks 2",
      img: "IMG/Socks/Geometric-print socks 2.png",
      category: "socks",
      season: ["winter",],
      weather: ["sunny", "rainy", "cloudy",],
    },
    {
      name: "No-show socks 3",
      img: "IMG/Socks/No-show socks 3.png",
      category: "socks",
      season: ["summer",],
      weather: ["sunny", "rainy", "cloudy",],
    },
    {
      name: "Basic pumps",
      img: "IMG/Shoes/Basic pumps.png",
      category: "shoes",
      season: ["spring", "summer", "fall", "winter",],
      weather: ["sunny", "cloudy", "rainy",],
    },
    {
      name: "Basketball shoes",
      img: "IMG/Shoes/Basketball shoes.png",
      category: "shoes",
      season: ["spring", "summer", "fall",],
      weather: ["sunny", "cloudy"],
    },
    {
      name: "Faux-fur ankle booties",
      img: "IMG/Shoes/Faux-fur ankle booties.png",
      category: "shoes",
      season: ["winter",],
      weather: ["sunny", "cloudy", "rainy",],
    },
    {
      name: "Faux-suede sneakers 3",
      img: "IMG/Shoes/Faux-suede sneakers 3.png",
      category: "shoes",
      season: ["spring", "summer", "fall",],
      weather: ["sunny", "cloudy"],
    },
    {
      name: "High-tops",
      img: "IMG/Shoes/High-tops.png",
      category: "shoes",
      season: ["spring", "summer", "fall",],
      weather: ["sunny", "cloudy"],
    },
    {
      name: "Rain boots",
      img: "IMG/Shoes/Rain boots.png",
      category: "shoes",
      season: ["spring", "summer", "fall",],
      weather: ["rainy",],
    },
    {
      name: "Recycled boots",
      img: "IMG/Shoes/Recycled boots.png",
      category: "shoes",
      season: ["spring", "summer", "fall", "winter",],
      weather: ["rainy",],
    },
    {
      name: "Work boots",
      img: "IMG/Shoes/Work boots.png",
      category: "shoes",
      season: ["fall", "winter",],
      weather: ["sunny", "cloudy", "rainy",],
    },
  ],

  //TODO legg til en haug med weathers. Bruk litt (IKKE MYE!) tid på https://developer.yr.no/
  //for å finne ut hvor vanskelig det er å pulle reelle data. Randomizer funker for test uansett.
  weather: [
    {
      type: "sunny",
      img: "bilde av sol",
    },
    {
      type: "cloudy",
      img: "bilde av sky",
    },
    {
      type: "rainy",
      img: "bilde av regn",
    },
  ],

  //det er kjedelig å vente på riktig årstid, så enten randomizer eller ha en knapp til å velge
  season: [
    {
      type: "spring",
      img: "bilde av vår",
    },
    {
      type: "summer",
      img: "bilde av sommer",
    },
    {
      type: "fall",
      img: "bilde av høst",
    },
    {
      type: "winter",
      img: "bilde av vinter",
    },
  ],
  categories: ["headwear", "tops", "bottoms", "socks", "shoes",],
  tempCategories: [[], [], [], [], [],],
  currentOutfit: [],
  currentCondition: [],
  currentWardrobe: [[], [], [], [],], 
};
