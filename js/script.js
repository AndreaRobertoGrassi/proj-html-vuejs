var header= new Vue({      //per l'header
  el:'#header',
  data:{
    socials:[   // icone per social
      {social:'fab fa-facebook-f', link:'https://it-it.facebook.com/'},
      {social:'fab fa-twitter', link:'https://twitter.com/login?lang=it'},
      {social:'fab fa-instagram', link:'https://www.instagram.com/'},
      {social:'fab fa-youtube', link:'https://www.youtube.com/?hl=it&gl=IT'}
    ],

    profilo:[
      {str:'Shopping Cart'},
      {str:'My Account', dropdown:'fas fa-angle-down'},
      {cart:'fas fa-shopping-cart',str:'CART',dropdown:'fas fa-angle-down'}
    ]
  }
});






var footer= new Vue({   // per il footer
  el:'#footer',
  data:{

  }
});
