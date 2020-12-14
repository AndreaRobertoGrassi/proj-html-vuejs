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
      //prima colonna
      logo: "img/logo_footer.png", //immagine logo footer
      info: [
        //indirizzo e contatti
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

    seconda_col: {
      //seconda colonna
      titolo: "TOP RATED PRODUCTS",
      info: [
        {
          descrizione: "Leather Gloves",
          price: "$45", //prezzo articolo
          articolo: "img/articoli-5.jpg", //immagine articolo
        },

        {
          descrizione: "Black Leather Jacket",
          discount: "$235",
          price: "$200",
          articolo: "img/articoli-2.jpg",
        },

        {
          descrizione: "Spring Printed Dress",
          price: "$47",
          articolo: "img/articoli-7.jpg",
        },
      ],
    },

    terza_col: {
      //terza colonna
      titolo: "RECENT POST",
      info: [
        "Anean lobortis sapien enim viverra",
        "Duis ac massa semper maximus",
        "Nunc fermint nulla eu justo sem id",
        "Aliquam posuere magna eget nibh",
        "Cras ac nulla ac consecte rutrum",
        "Fusce mattis nunc ut aliquam",
      ],
    },

    quarta_col: {
      //quarta colonna
      titolo: "TAGS",
      tags:[
        ["Black", "boots", "Brown", "Casual"],
        ["D&G", "Fabric", "flowers", "Grey"],
        ["hat", "Hipster", "lines"],
        ["multi-purpose", "New York"],
        ["Outdors", "red", "responsive"],
        ["summer", "sweater", "Travel"],
        ["Warm", "White", "winter"],
      ]
    },

    // sezione copyright
    copy: [
      "",
      " Avada Theme by Theme Fusion |",
      " All Rights Ressrved |",
      " Powered by Wordrepss",
    ],
    pagamenti: "img/pagamenti.png",
  },
});
 