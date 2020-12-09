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



var footer= new Vue({   // per il footer
  el:'#footer',
  data:{

  }
});
