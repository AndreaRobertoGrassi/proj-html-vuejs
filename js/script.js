var header= new Vue({      //per l'header
  el:'#header',
  data:{
    //INIZIO NAV
    socials:[   // icone per social
      {social:'fab fa-facebook-f', link:'https://it-it.facebook.com/'},
      {social:'fab fa-twitter', link:'https://twitter.com/login?lang=it'},
      {social:'fab fa-instagram', link:'https://www.instagram.com/'},
      {social:'fab fa-youtube', link:'https://www.youtube.com/?hl=it&gl=IT'}
    ],

    profilo:[    // opzioni profilo account
      {str:'Shopping Cart'},
      {str:'My Account', dropdown:'fas fa-angle-down'},
      {cart:'fas fa-shopping-cart',str:'CART',dropdown:'fas fa-angle-down'}
    ],

    logo:'img/logo_header.png',   // logo

    menu:[  //menu nav
      {str:'Home', dropdown:'fas fa-angle-down'},
      {str:'Shop', dropdown:'fas fa-angle-down'},
      {str:'Products', dropdown:'fas fa-angle-down'},
      {str:'Categories', dropdown:'fas fa-angle-down'},
      {str:'News'},
      {str:'Elements', dropdown:'fas fa-angle-down'},
    ],

    button:'SHOP NOW!',  //bottone nav
    search:'fas fa-search'   //icona search
    //FINE NAV

  }
});



var footer = new Vue({
  // per il footer
  el: "#footer",
  data: {
    // sezione avada classic shop
    prima_col: {
      logo: "img/logo_footer.png",
      info: [
        "12345 North Main Street,",
        "New York, NY 55555",
        "Phone: 1.800.555.6789",
        "Email:info@company.com",
        "Web: Theme-Fusion.com",
      ],
      socials: [
        // icone per social
        { social: "fab fa-facebook-f", link: "https://it-it.facebook.com/" },
        { social: "fab fa-twitter", link: "https://twitter.com/login?lang=it" },
        { social: "fab fa-instagram", link: "https://www.instagram.com/" },
        {
          social: "fab fa-youtube",
          link: "https://www.youtube.com/?hl=it&gl=IT",
        },
      ],
    },

    seconda_col: [
      "TOP RATED PRODUCTS",
      {
        descrizione: "Leather Gloves",
        stars: [
          "fas fa-star",
          "fas fa-star",
          "fas fa-star",
          "fas fa-star",
          "fas fa-star",
        ],
        price: "$45",
        articolo: "img/articoli-5.jpg",
      },

      {
        descrizione: "Black Leather Jacket",
        stars: [
          "fas fa-star",
          "fas fa-star",
          "fas fa-star",
          "fas fa-star",
          "fas fa-star",
        ],
        price: "$45",
        articolo: "img/articoli-2.jpg",
      },

      {
        descrizione: "Spring Printed Dress",
        stars: [
          "fas fa-star",
          "fas fa-star",
          "fas fa-star",
          "fas fa-star",
          "fas fa-star",
        ],
        price: "$45",
        articolo: "img/articoli-7.jpg",
      },
    ],

    terza_col: [
      "RECENT POST",
      {
        arrow: "fas fa-angle-right",
        str: "Anean lobortis sapien enim viverra",
      },
      { arrow: "fas fa-angle-right", str: "Duis ac massa semper maximus" },
      {
        arrow: "fas fa-angle-right",
        str: "Nunc fermint nulla eu justo sem id",
      },
      { arrow: "fas fa-angle-right", str: "Aliquam posuere magna eget nibh" },
      { arrow: "fas fa-angle-right", str: "Cras ac nulla ac consecte rutrum" },
      { arrow: "fas fa-angle-right", str: "Fusce mattis nunc ut aliquam" },
    ],

    quarta_col: [
      "TAGS",
      ["Black", "boots", "Brown", "Casual"],
      ["D&G", "Fabric", "flowers", "Grey"],
      ["hat", "Hipster", "lines"],
      ["multi-purpose", "New York"],
      ["Outdors", "red", "responsive"],
      ["summer", "sweater", "Travel"],
      ["Warm", "White", "winter"],
    ],

    // sezione copyright
    copy: [
      "",
      " Avada Theme by Theme Fusion |",
      " All Rights Ressrved |",
      " Powered by Wordrepss",
    ],
    pagamenti: "img/pagamenti.png",
  }
});
 