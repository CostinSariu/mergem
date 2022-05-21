




// connecting 2 level "menu" navs - unclean code
function catSelectFunc(event){
  let categoryList = document.querySelectorAll('.xCategoryNavList li');
  let subCategoryList = document.querySelectorAll('.xSubCategoryCont .xServicesPhotoContainer');
  for (var i2 = 0; i2 < categoryList.length; i2++){
    
    if (categoryList[i2].classList.contains('xCatActive')){
      categoryList[i2].classList.remove('xCatActive');
      subCategoryList[i2].classList.remove('xSubCatActive');
    };
  }
  event.target.classList.add("xCatActive");
  
  for(var i3 = 0; i3 < subCategoryList.length; i3++){
    if (categoryList[i3].classList.contains('xCatActive')){
      subCategoryList[i3].classList.add('xSubCatActive');
    };
  }
  let subCatItemsActive = document.querySelectorAll('.xSubCatActive .xSubCatNavList a');
  subCatItemsActive[0].click();
};


