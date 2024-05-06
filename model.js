let app = document.getElementById("app")
const model = {
    app: {
        user: '',
        page: 'singleArtwork',
    },
    inputs: {
        searchBar: null, //'artItems','artists','detailed search',
        chosenCategory: 'null',
        chosenInputCategory: 'null',
        loginView: {
          errorMessage: '',
          userName: null,
          password: null,
          
        },

        registerUser: {
          userNameInput: '',
          passwordInput: '',
          fullNameInput: '',
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

        chosenArtwork: "",
        chosenArtworkSalesType: "",
    },
    data: {

      users:[
        {
        userNameInput: 'AdminMartini',
        passwordInput: 'admin123',
        fullNameInput: 'Martin Ingolfsrud Innvær',
        profilePicture: 'https://hips.hearstapps.com/hmg-prod/images/martini-recipe-1657532229.jpg?crop=1.00xw:0.334xh;0,0.189xh&resize=1024:*',
        email: '',
        artist: '',
        userDescription: '',
      },
      {
        userNameInput: 'kimmi',
        passwordInput: 'abc123',
        fullNameInput: 'Kim H. Thoresen',
        profilePicture: 'https://image.spreadshirtmedia.net/image-server/v1/compositions/T828A525PA1779PT32X21Y0D177544343W7893H7893/views/1,width=550,height=550,appearanceId=525,backgroundColor=CAED60,noPt=true/doggo-meme-belteveske.jpg',
        email: '',
        artist: '',
        userDescription: '',
      },
      {
        userNameInput: 'marshan',
        passwordInput: 'xyz789',
        fullNameInput: 'Maren S. Tveit',
        profilePicture: 'https://img.pokemondb.net/artwork/large/mareep.jpg',
        email: '',
        artist: '',
        userDescription: '',
      }, 
      {
        userNameInput: 'bennyboy',
        passwordInput: 'tihihi456',
        fullNameInput: 'Benjamin M. Søiland',
        profilePicture: 'https://i.pinimg.com/564x/ec/49/54/ec495479942e197a14b3f8fcf0adc448.jpg',
        email: '',
        artist: '',
        userDescription: '',
      }, 
      {
        userNameInput: 'morris',
        passwordInput: 'm',
        fullNameInput: 'Martin M. Ristvedt',
        profilePicture: 'https://i.ytimg.com/vi/Oan1YaBSoY0/maxresdefault.jpg',
        email: '',
        artist: '',
        userDescription: '',
      },
    ],

      newInputSalesObjekt: {
        seller: '',
        artId: '',
        aboutPictureText: '',
        category: '',
        artistName: '',
        price: '',
        inputtedDate: '',
      },

      newInputCategories: ["Auksjon", "Salg", "Galleri"],

      newsObjekts: [
        {
          newsTitle: "Skulpturkurs med Maria Skulptør",
          newsDate: "10.mai 2024, 10:00-14:00",
          newsLocation: "Skulpturgata 16, 2. etasje (tredje dør)",
        },
        {
          newsTitle: "Kunstloppemarked",
          newsDate: "12-15.mai",
          newsLocation: "Utenfor studiogalleriet",
        },
        {
          newsTitle: "Åpent Galleri",
          newsDate: "12-16.mai",
          newsLocation: "Studiogalleriet",
        },
        {
          newsTitle: "17.Mai samling",
          newsDate: "17. mai",
          newsLocation: "17. mai-sletta",
        },
        {
          newsTitle: "Teaterstykke",
          newsDate: "20.mai",
          newsLocation: "Kunstnaboskolen",
        },
      ],

      categories: ["maleri","treverk","fotografi","litteratur","avantgarde/eksperimentelt",
      "skulptur", "strikketøy","rosemaling", "collage"],
      artObject: [
        {
          id:0,
          artId: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Kanagawa-oki_nami-ura_-_huge_wave_against_human.jpg',
          artName: 'The Wave', /*Vannskulpturinnstallasjon*/
          aboutPictureText: 'En interaktiv dialog om japonisme, orientalisme, og oksidentalisme mellom Japan og Holland.',
          category: 5,
          artistName: "marshan",
        },
        {
          id:1,
          artId: 'https://64.media.tumblr.com/9e47ebb3beaf20d2b35adf0ebf40f29e/tumblr_mveet3Uiez1qczwklo2_1280.jpg',
          artName: 'to the desert', /*Setninger av lys på vegger*/
          aboutPictureText: 'Et bevegelig dikt skapt med metall som klipper skygger og lys på veggene, om tapt kjærlighet og meningen med det.',
          category: 4,
          artistName: "kimmi",
        },
        {
          id:2,
          artId: 'https://64.media.tumblr.com/b52b7365d06d5c251ab071c52d820ecc/49bdba3aae5b17a7-b2/s1280x1920/b079dffd45795882f78d497152a82c148a6e690e.jpg',
          artName: 'strandsstudie', /*Bilder av vannmalingsstudie*/
          aboutPictureText: 'Et tidligere vannmalinggstudie som jeg har klippet opp. En lang stund var ingen interreserte i kunsten min, og så ble dette av alle verkene mine bemerket: et studie.',
          category: 2,
          artistName: "morris",
        },
      ],
      ourArtists:[ // For å hente så må man bruke model.data.ourArtits[3]
      // FUNKSJONSSPØRSMÅL: hvordan opprettholder vi galleriet hvis enkeltobjekter blir trukket vekk?
      // IDE: fjerne innholdet men ikke objektet; send den til gravplassen
        {
         artistId: 'Martin Ingolfsrud Innvær',
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
          id:0,
          seller: 'Kim',
          artId: 'https://media.snl.no/media/19962/standard_compressed_712px-Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpg',
          aboutPictureText:'Det kjente skrik',
          aboutPictureDescription:`Skrik: ikke bokstavelig, men angsten. Munch beskrev
          maleriet at det var landskapet han referte til i tittelen, og om angsten
          han plutselig erfarte på stedet og som han umulig kunne uttrykke, selv
          med venner.`,
          category: 0,
          artistName:'Edvard Munch',
          auctionEndTime: 'Sat May 08 2024 14:00:50 GMT+0200 (Central European Summer Time)'
          ,
          activeBid: 202,
          newBid: '',
          bidders: ['Mona'],
          previousBids: [200],
        },
        {
          id:1,
          seller: 'Nikoline',
          artId: 'https://kunstnerforbundet.no/media/images/works/cover/xlarge/c86814b7866699f947aa5fab42e9180fa561ae91.jpg',
          aboutPictureText:'Sjalu(2007)',
          aboutPictureDescription:`En statue om sjalusi. Merk deg ikke
          bare fargen, men teksturen som minner om hvordan følelsen
          flyter ut og gjennom hvert bein og hver muskel i deg. Lemmer er
          vekk eller forsonet til én lodrett figur.`,
          category: 5,
          artistName:'Nico Widerberg',
          auctionEndTime: 'Fri May 10 2024 14:00:50 GMT+0200 (Central European Summer Time)'
          ,
          activeBid: 34000,
          newBid: '',
          bidders: ['Lisa','Morten','Beate'],
          previousBids: [25000,28000,32000],
        },
        {
          id:2,
          seller: 'Nikoline',
          artId: 'https://kunstnerforbundet.no/media/images/works/cover/xlarge/c86814b7866699f947aa5fab42e9180fa561ae91.jpg',
          aboutPictureText:'Sjalu(2007)',
          aboutPictureDescription:'',
          category: 5,
          artistName:'Nico Widerberg',
          auctionEndTime: 'Fri May 06 2024 13:00:50 GMT+0200 (Central European Summer Time)'
          ,
          activeBid: 34000,
          newBid: '',
          bidders: ['Lisa','Morten','Beate'],
          previousBids: [25000,28000,32000],
        },
        {
          id:3,
          seller: 'Nikoline',
          artId: 'https://kunstnerforbundet.no/media/images/works/cover/xlarge/c86814b7866699f947aa5fab42e9180fa561ae91.jpg',
          aboutPictureText:'Sjalu(2007)',
          aboutPictureDescription:'',
          category: 5,
          artistName:'Nico Widerberg',
          auctionEndTime: 'Fri May 07 2024 13:00:00 GMT+0200 (Central European Summer Time)'
          ,
          activeBid: 34000,
          newBid: '',
          bidders: ['Lisa','Morten','Beate'],
          previousBids: [25000,28000,32000],
        },
        {
          id:4,
          seller: 'Nikoline',
          artId: 'https://kunstnerforbundet.no/media/images/works/cover/xlarge/c86814b7866699f947aa5fab42e9180fa561ae91.jpg',
          aboutPictureText:'Sjalu(2007)',
          aboutPictureDescription:'',
          category: 5,
          artistName:'Nico Widerberg',
          auctionEndTime: 'Fri May 07 2024 12:55:50 GMT+0200 (Central European Summer Time)'
          ,
          activeBid: 34000,
          newBid: '',
          bidders: ['Lisa','Morten','Beate'],
          previousBids: [25000,28000,32000],
        },
        {
          id:5,
          seller: 'Nikoline',
          artId: 'https://kunstnerforbundet.no/media/images/works/cover/xlarge/c86814b7866699f947aa5fab42e9180fa561ae91.jpg',
          aboutPictureText:'Sjalu(2007)',
          aboutPictureDescription:'',
          category: 5,
          artistName:'Nico Widerberg',
          auctionEndTime: 'Fri May 21 2024 14:00:50 GMT+0200 (Central European Summer Time)'
          ,
          activeBid: 34000,
          newBid: '',
          bidders: ['Lisa','Morten','Beate'],
          previousBids: [25000,28000,32000],
        },
      ],
      salesObjects:[
        {
          id: 0,
          seller: 'Marius',
          artId: 'https://i.ebayimg.com/images/g/iYMAAOSw269jXD2D/s-l1600.jpg',
          aboutPictureText: 'Katt i Olje farger',
          category: 0,
          artistName: 'gardenartsstudio',
          price: 1000,
        },
        {
          id: 1,
          seller: 'Sofie',
          artId: 'https://museumforartinwood.org/wp-content/uploads/2015/05/1996-11-16-001gsm-1000x858.jpg',
          aboutPictureText: 'Dancing Tryclops',
          category: 1,
          artistName: 'Michael Brolly',
          price: 23000,
        },
        {
          id: 2,
          seller: 'Lars',
          artId: 'https://d7hftxdivxxvm.cloudfront.net/?quality=80&resize_to=width&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FfEGQAdZu5CZyVpOnC3NWMQ%2Fnormalized.jpg&width=910',
          aboutPictureText: 'Strikke Sykkel',
          category: 6,
          artistName: 'Olek',
          price: 14000,
        },
        {
          id: 3,
          seller: 'Francesca',
          artId: 'https://www.singulart.com/blog/wp-content/uploads/2019/08/the-persistence-of-memory-1931.jpg',
          aboutPictureText: '«Hukommelsens utholdenhet»',
          category: 4,
          artistName: 'Salvador Dali',
          price: 1000,
        },
        {
          id: 4,
          seller: 'Katrine',
          artId: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Mus%C3%A9e_Rodin_1.jpg/220px-Mus%C3%A9e_Rodin_1.jpg',
          aboutPictureText: 'Tenkeren',
          category: 5,
          artistName: 'Auguste Rodin',
          price: 500000,
        },
        {
          id: 5,
          seller: 'Tobias',
          artId: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/%C3%98lbolle_malt_av_Even_Lande%2C_Norsk_Folkemuseum_NF.1897-0044.jpg',
          aboutPictureText: 'Even Lande signerte denne store ølbollen i 1809.',
          category: 7,
          artistName: 'Even Thorkildsen Lande',
          price: 70000,
        },
      ],
      salesObjectsToCheck:[
        {
          seller: 'Karl',
          artId: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Kanagawa-oki_nami-ura_-_huge_wave_against_human.jpg',
          aboutPictureText: 'Hav bølger',
          category: 0,
          artistName: 'Heidi',
          price: 70000,
        },
        {
          seller: 'Karl',
          artId: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Kanagawa-oki_nami-ura_-_huge_wave_against_human.jpg',
          aboutPictureText: 'Hav bølger',
          category: 0,
          artistName: 'Heidi',
          price: 70000,
        },
      
      ],
      auctionObjectsToCheck:[
        {
          seller: '',
          artId: '',
          auctionEndTime: '',
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




