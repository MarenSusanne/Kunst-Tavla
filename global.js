// function drawCategories(){
//     let html = "";

// }


     
  function printOptions(){
    let print = "<option value=null>Velg Kategori</option>";
    for (let i = 0; i < model.data.categories.length; i++) {
      if(model.inputs.chosenCategory == i){
      print += /*HTML*/`
        <option selected value="${i}">${model.data.categories[i]}</option>
      `;
    }
      else{
        print += /*HTML*/`
        <option value="${i}">${model.data.categories[i]}</option>
      `;
      }
    }
    return print
  }

  function printSalesOptions(){
    let print = /*HTML*/`<option value=null>Skal denne til... </option>`;
    for (let i = 0; i < model.data.newInputCategories.length; i++) {
      if(model.inputs.chosenInputCategory == i){
      print += /*HTML*/`
        <option selected value="${i}">${model.data.newInputCategories[i]}</option>
      `;
    }
      else{
        print += /*HTML*/`
        <option value="${i}">${model.data.newInputCategories[i]}</option>
      `;
      }
    }
    return print
  }
  function chooseInputCategory(filter){
    model.inputs.chosenInputCategory = filter;
    updateView();
    splitSalesObject();
  }


function updateView() {
//changePage('')
    switch (model.app.page) {
        case 'main':
          updateMainView();
          updateInnerMainView();
            break;
        case 'addNewItem':
            addNewItem();
            break;
        case 'editProfile':
            editProfile();
            break;
        case 'editUsers':
            editUsers();
            break;
        case 'editBuyNow':
            editBuyNow();
            break;
        case 'editAuctions':
            editAuctions();
            break;
        case 'footerGallery':
            updateFooterGalleryRealView();
            break;
        case 'footerContact':
            updateFooterContactView();
            break;
        case 'footerAbout':
            updateFooterAboutView();
            break;
        case '':
            
            break;
        case '':

            break;
        case '':

            break;
        case '':

            break;
        case 'artists':
          updateArtistView();
            break;
        case 'addSaleObject':
          addSaleObjekt();
          break;
        case 'auctionOnly':
          updateAuctionOnly();
            break;
        case 'buyAndAuction':
          updateBuyAndAuction();
            break;
        case 'buyOnly':
          updateBuyOnly();
            break;
        case 'galleryAndArchive':
          updateGalleryAndArchiveView();
            break;
        case 'galleryOnly':
          updateGalleryView();
            break;
        case 'archiveOnly':
          updateArchiveView();
            break;
        case 'registrationAndLogIn':
          updateRegistrationAndLogInView();
            break;
        case 'singleArtwork':
          updateSingleArtworkpieceProfileView();
            break;
        case 'profile':
          userProfileView();
            break;
        case 'admin':
            updateAdminView();
            break;
        case 'adminCheckpoint':
            updateAdminCheckpointView();
            break;
        default:
            updateInnerMainView();
            break;
    }
    
  }