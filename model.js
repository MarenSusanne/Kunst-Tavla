let app = document.getElementById("app")
const model = {
    app: {
        user: null,
        page: 'profile',
    },
    inputs: {
        searchBar: null, //'artItems','artists','detailed search',
        chosenFilter: 'null',
        loginView: {
          errorMessage: '',
          userName: null,
          password: null,
          
        },

        registerUser: {
          userName: '',
          password: '',
          fullName: '',
          profilePicture: '',
          email: '',
          artist: '',
        },

        auctionView: {
          bidAmount: null,
          newBid: [
            {currentBid:''},
            {currentBidder:''},
            // max and minimum price-input
          ],
        },
    },
    data: {

      users:[
        {
        userNameInput: 'AdminMartini',
        passwordInput: 'admin123',
        fullNameInput: 'Martin Ingolfsrud Innvær',
        profilePicture: 'https://hips.hearstapps.com/hmg-prod/images/martini-recipe-1657532229.jpg?crop=1.00xw:0.334xh;0,0.189xh&resize=1024:*',
        email: '',
      },
      {
        userNameInput: 'kimmi',
        passwordInput: 'abc123',
        fullNameInput: 'Kim H. Thoresen',
        profilePicture: 'https://image.spreadshirtmedia.net/image-server/v1/compositions/T828A525PA1779PT32X21Y0D177544343W7893H7893/views/1,width=550,height=550,appearanceId=525,backgroundColor=CAED60,noPt=true/doggo-meme-belteveske.jpg',
        email: '',
      },
      {
        userNameInput: 'marshan',
        passwordInput: 'xyz789',
        fullNameInput: 'Maren S. Tveit',
        profilePicture: 'https://img.pokemondb.net/artwork/large/mareep.jpg',
        email: '',
      }, 
      {
        userNameInput: 'bennyboy',
        passwordInput: 'tihihi456',
        fullNameInput: 'Benjamin M. Søiland',
        profilePicture: 'https://cdn.discordapp.com/attachments/1103497924215840818/1232620633637257238/thats_all_folks.png?ex=662a1eec&is=6628cd6c&hm=31f003cbfae27221a0424593b393ed6575788d4914c7ed4a79a4f3e5bea9df34&',
        email: '',
      }, 
      {
        userNameInput: 'morris',
        passwordInput: 'm',
        fullNameInput: 'Martin M. Ristvedt',
        profilePicture: 'https://i.ytimg.com/vi/Oan1YaBSoY0/maxresdefault.jpg',
        email: '',
      },
    ],

      newInputSalesObjekt: {
        seller: '',
        artId: '',
        aboutPictureText: '',
        category: '',
        artistName: '',
        price: '',
      },

      categories: ["maleri","treverk","fotografi","litteratur","avantgarde/eksperimentelt",
      "skulptur", "strikketøy","rosemaling", "collage"],
      artObject: [
        {
          artId: 'The Wave',
          artPicture: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Kanagawa-oki_nami-ura_-_huge_wave_against_human.jpg', /*Vannskulpturinnstallasjon*/
          aboutPictureText: 'En interaktiv dialog om japonisme, orientalisme, og oksidentalisme mellom Japan og Holland.',
          category: 5,
          artistName: "Martini the Drink",
        },
        {
          artId: 'to the desert',
          artPicture: 'https://64.media.tumblr.com/9e47ebb3beaf20d2b35adf0ebf40f29e/tumblr_mveet3Uiez1qczwklo2_1280.jpg', /*Setninger av lys på vegger*/
          aboutPictureText: 'Et bevegelig dikt skapt med metall som klipper skygger og lys på veggene, om tapt kjærlighet og meningen med det.',
          category: 4,
          artistName: "Rebecka a baguette-eater",
        },
        {
          artId: 'strandsstudie',
          artPicture: 'https://64.media.tumblr.com/b52b7365d06d5c251ab071c52d820ecc/49bdba3aae5b17a7-b2/s1280x1920/b079dffd45795882f78d497152a82c148a6e690e.jpg', /*Bilder av vannmalingsstudie*/
          aboutPictureText: 'Et tidligere vannmalinggstudie som jeg har klippet opp. En lang stund var ingen interreserte i kunsten min, og så ble dette av alle verkene mine bemerket: et studie.',
          category: 2,
          artistName: "Marius in Boots",
        },
      ],
      ourArtists:[ // For å hente så må man bruke model.data.ourArtits[3]
      // FUNKSJONSSPØRSMÅL: hvordan opprettholder vi galleriet hvis enkeltobjekter blir trukket vekk?
      // IDE: fjerne innholdet men ikke objektet; send den til gravplassen
        {
         artistId: 'Martini the Drink',
         profilePicture: 'A lily',
         aboutText: '',
       },
       {
         artistId: 'Rebecka a baguette-eater',
         profilePicture: 'A rottweiler with a beret',
         aboutText: '',
       },
       {
         artistId: 'Marius in boots',
         profilePicture: 'popcat.png',
         aboutText: '',
       },
      ],
      auctionObjects:[
        {
          seller: 'Kim',
          artId: 'https://media.snl.no/media/19962/standard_compressed_712px-Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpg',
          aboutPictureText:'Det kjente skrik',
          category: 0,
          artistName:'Edvard Munch',
          timeLeft: '',
          activeBid: '202',
          newBid: '',
          bidders: ['Mona'],
          previousBids: ['200'],
        },
        {
          seller: 'Nikoline',
          artId: 'https://kunstnerforbundet.no/media/images/works/cover/xlarge/c86814b7866699f947aa5fab42e9180fa561ae91.jpg',
          aboutPictureText:'Sjalu(2007)',
          category: 5,
          artistName:'Nico Widerberg',
          timeLeft: '',
          activeBid: '34000',
          newBid: '',
          bidders: ['Lisa','Morten','Beate'],
          previousBids: ['25000','28000','32000'],
        },
      ],
      salesObjects:[
        {
          seller: 'Marius',
          artId: 'https://i.ebayimg.com/images/g/iYMAAOSw269jXD2D/s-l1600.jpg',
          aboutPictureText: 'Katt i Olje farger',
          category: 0,
          artistName: 'gardenartsstudio',
          price: '1000',
        },
        {
          seller: 'Sofie',
          artId: 'https://museumforartinwood.org/wp-content/uploads/2015/05/1996-11-16-001gsm-1000x858.jpg',
          aboutPictureText: 'Dancing Tryclops',
          category: 1,
          artistName: 'Michael Brolly',
          price: '23000',
        },
        {
          seller: 'Lars',
          artId: 'https://d7hftxdivxxvm.cloudfront.net/?quality=80&resize_to=width&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FfEGQAdZu5CZyVpOnC3NWMQ%2Fnormalized.jpg&width=910',
          aboutPictureText: 'Strikke Sykkel',
          category: 6,
          artistName: 'Olek',
          price: '14000',
        },
        {
          seller: 'Francesca',
          artId: 'https://www.singulart.com/blog/wp-content/uploads/2019/08/the-persistence-of-memory-1931.jpg',
          aboutPictureText: '«Hukommelsens utholdenhet»',
          category: 4,
          artistName: 'Salvador Dali',
          price: '1000',
        },
        {
          seller: 'Katrine',
          artId: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Mus%C3%A9e_Rodin_1.jpg/220px-Mus%C3%A9e_Rodin_1.jpg',
          aboutPictureText: 'Tenkeren',
          category: 5,
          artistName: 'Auguste Rodin',
          price: '500000',
        },
        {
          seller: 'Tobias',
          artId: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/%C3%98lbolle_malt_av_Even_Lande%2C_Norsk_Folkemuseum_NF.1897-0044.jpg',
          aboutPictureText: 'Even Lande signerte denne store ølbollen i 1809.',
          category: 7,
          artistName: 'Even Thorkildsen Lande',
          price: '70000',
        },
      ],
      newsObject:[
        {
        articleTitle:'',
        articleImg: '',
        articleOverview:'',
        articleText: '',
        },
      ],
      salesObjectsToCheck:[
        {
          seller: 'Karl',
          artId: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Kanagawa-oki_nami-ura_-_huge_wave_against_human.jpg',
          aboutPictureText: 'Hav bølger',
          category: 0,
          artistName: 'Heidi',
          price: '70000',
        },
        {
          seller: 'Karl',
          artId: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Kanagawa-oki_nami-ura_-_huge_wave_against_human.jpg',
          aboutPictureText: 'Hav bølger',
          category: 0,
          artistName: 'Heidi',
          price: '70000',
        },
       
      ],
      auctionObjectsToCheck:[
        {
          seller: '',
          artId: '',
          timeLeft: '',
          activeBid: '',
          newBid: '',
          bidders: [''],
          previousBids: [''],
        },
      ],
    },

    // hei hei 
  }
    // konstant synelig i alle skjermbilder
    // navBar: {
    //     startPage: {
    
    //     },
    //     buyAndAuction: {
    //         //link to buyAndAuctionPageView ("Kjøp og auksjon")
    //     },
    //     ourArtists: {
    //         //link to artistPageView ("Kunstnerne Våre")
    //     },
    
    //     galleryAndArchives: {
    //         //link to galleryAndArchivePageView ("Galleri og arkiv")
    //     },

    //     registrationAndProfile: {
    //     },
    // },

        // footer: {
        //   aboutPage,
        //   contactAdmin,
        //   galleryAdress,
        //   termsOfPolicyAndCopyright,

        //   //Galleriadresse og kontaktinformasjon.
        //   //Vil gjerne ha informasjon til about-page: admin burde ha kontroll over dette.
  
        // },

    // hjemmesiden
    // startPageView: {
    //     auctionsBox: {
    //       // h1 Auksjoner = link til auksjonssiden
    //         auctionPage: [],
    //     },
    //     newsBox:{
    //       // h1 Nyheter = link til nyhetside
    //         newsPage: [],
    //         // eksempel på nyheter: gallerivisning, åpen dag, workshop, etc., bla. Månedens Kunstner
    //         // skal kunstnere og brukere kunne legge inn andre nyheter?
    //     },
    //     staticBox:{
    //         none:'',
    //     },
    // },

    // buyOrBidOurArtPageView:{
    //     // link to buying now
    //     // link to active auctions
    // },

    // buyNowOrNevermore:{
    //     // h1 Kjøp
    //     artItems: [],
    // },

    // bidNowAndBidAgain:{
        // h1 Auksjoner

        /*  Hvordan skal folk kunne kjøpe ting på nettsiden? Via galleriet, via vipps, annet?

        Hva slags type auksjon var det snakk om? Individuell auksjon som på ebay eller samlet auksjon der hovedadministratøren skal kunne kontrollere som i en auksjon i virkeligheten?
            */
    // },

    // Kunstnerne v åre siden
    // artistPageView: {
    //     ourArtists:[
    //        {
    //         artistId: 'Martini the Drink',
    //         profilePicture: 'A lily',
    //         aboutText: '',
    //       },
    //       {
    //         artistId: 'Rebecka a baguette-eater',
    //         profilePicture: 'A rottweiler with a beret',
    //         aboutText: '',
    //       },
    //       {
    //         artistId: 'Marius in boots',
    //         profilePicture: 'popcat.png',
    //         aboutText: '',
    //       },
    //     ],
    // },

    // Galleri og Arkiv siden
    // galleryAndArchivePageView: {
        
    //   // 3-4 onclick divver for navigering til nye sider

    // },

    // galleryImagesPageView: {
    //     // h1 Galleri

    //     allArtImgs: [
    //       {
    //         artId: 'The Wave',
    //         artPicture: 'Vannskulpturinnstallasjon',
    //         aboutPictureText: 'En interaktiv dialog om japonisme, orientalisme, og oksidentalisme mellom Japan og Holland.',
    //       },
    //       {
    //         artId: 'to the desert',
    //         artPicture: 'Setninger av lys på vegger',
    //         aboutPictureText: 'Et bevegelig dikt skapt med metall som klipper skygger og lys på veggene, om tapt kjærlighet og meningen med det.',
    //       },
    //       {
    //         artId: 'strandsstudie',
    //         artPicture: 'Collage av vannmalingsstudie',
    //         aboutPictureText: 'Et tidligere vannmalinggstudie som jeg har klippet opp. En lang stund var ingen interreserte i kunsten min, og så ble dette av alle verkene mine bemerket: et studie.',
    //       },

    //     ],
    // },
   

    // registrationAndProfilePageView: {
    //     inputs:{
    //         //new profile / log in
    //     },
    // },

    // searchItemsPageView: {
    //     inputs: {

    //     },

        //detailed search
    //     tags: [{maleri},{treverk},{fotografi},{tekst},{avantgarde}],
    // },




