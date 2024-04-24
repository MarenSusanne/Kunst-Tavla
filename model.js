let app = document.getElementById("app")
const model = {
    app: {
        user: null,
    },
    inputs: {
        searchBar: null, //'artItems','artists','detailed search',
        chosenFilter: "maleri",
        loginView: {
          userName: null,
          password: null,
        },

        registerUserView: {
          userNameInput: null,
          passwordInput: null,
          fullNameInput: null,
          profilePicture: null,
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
          seller: '',
          artId: '',
          timeLeft: '',
          activeBid: '',
          newBid: '',
          bidders: [''],
          previousBids: [''],
        },
      ],
      salesObjects:[
     
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




