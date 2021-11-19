const btnDark = document.querySelector('.dark')
const btnGlow = document.querySelector('.glow')

// header
const header = document.querySelector('.header__wrapper')
const logo = document.querySelector('.header__wrapper__logo-name')
const inputHeader = document.querySelector('.header__wrapper__input-search')
const inputIcon = document.querySelector('.header__wrapper__input i')
const userIcon = document.querySelector('.header__wrapper__user-icon')

// Navigation

const navigation = document.querySelector('.main__wrapper__navigation')
const navIconHouse = document.querySelector('.main__wrapper__navigation__sec-one #list-01 #list-01__icon')
const navTextHouse = document.querySelector('.main__wrapper__navigation__sec-one #list-01 #list-01__paragraph')
const navIconMessage = document.querySelector('.main__wrapper__navigation__sec-one #list-02 #list-02__icon')
const navTextMessage = document.querySelector('.main__wrapper__navigation__sec-one #list-02 #list-02__paragraph')
const navIconMap = document.querySelector('#list-03__icon')
const navTextMap = document.querySelector('#list-03__paragraph')
const navIconConfig = document.querySelector('.main__wrapper__navigation__sec-two #list-01 #list-01__icon')
const navTextConfig = document.querySelector('.main__wrapper__navigation__sec-two #list-01 #list-01__paragraph')
const navIconExit = document.querySelector('.main__wrapper__navigation__sec-two #list-02 #list-02__icon')
const navTextExit = document.querySelector('.main__wrapper__navigation__sec-two #list-02 #list-02__paragraph')

// House
const house = document.querySelector('.main__wrapper__house')
const houseSearchInput = document.querySelector('.main__wrapper__house__search input')
const houseTitle = document.querySelector('.main__wrapper__house__title')
const houseSpText = document.querySelector('.main__wrapper__house-sp-text')
const houseSpParagrph = document.querySelector('.main__wrapper__house-sp-information-paragraph')
const houseSpBtn = document.querySelector('.main__wrapper__house-sp-btn')
const houseMiamiText = document.querySelector('.main__wrapper__house-miami-text')
const houseMiamiParagrph = document.querySelector('.main__wrapper__house-miami-information-paragraph')
const houseMiamiBtn = document.querySelector('.main__wrapper__house-miami-btn')
const houseLondresText = document.querySelector('.main__wrapper__house-londres-text')
const houseLondresParagrph = document.querySelector('.main__wrapper__house-londres-information-paragraph')
const houseLondresBtn = document.querySelector('.main__wrapper__house-londres-btn')
const houseOrlandoText = document.querySelector('.main__wrapper__house-orlando-text')
const houseOrlandoParagrph = document.querySelector('.main__wrapper__house-orlando-information-paragraph')
const houseOrlandoBtn = document.querySelector('.main__wrapper__house-orlando-btn')

// Abode 
const abode = document.querySelector('.main__wrapper__abode')
const abodeFavorSp1 = document.querySelector('.main__wrapper__abode__favorSp-01')
const abodeFavorSp1Description = document.querySelector('.main__wrapper__abode__favorSp-01-description')
const abodeFavorSp1BoldH1 = document.querySelector('.main__wrapper__abode__favorSp-01-description h1 span#bold')
const abodeFavorSp1BoldH2 = document.querySelector('.main__wrapper__abode__favorSp-01-description h2 span#bold')
const abodeFavorSp1BoldH3 = document.querySelector('.main__wrapper__abode__favorSp-01-description h3 span#bold')
const abodeFavorSp1BoldP = document.querySelector('.main__wrapper__abode__favorSp-01-description p span#bold')
const abodeFavorSp2 = document.querySelector('.main__wrapper__abode__favorSp-02')
const abodeFavorSp2Description = document.querySelector('.main__wrapper__abode__favorSp-02-description')
const abodeFavorSp2BoldH1 = document.querySelector('.main__wrapper__abode__favorSp-02-description h1 span#bold')
const abodeFavorSp2BoldH2 = document.querySelector('.main__wrapper__abode__favorSp-02-description h2 span#bold')
const abodeFavorSp2BoldH3 = document.querySelector('.main__wrapper__abode__favorSp-02-description h3 span#bold')
const abodeFavorSp2BoldP = document.querySelector('.main__wrapper__abode__favorSp-02-description p span#bold')
const abodeFavorSp3 = document.querySelector('.main__wrapper__abode__favorSp-03')
const abodeFavorSp3Description = document.querySelector('.main__wrapper__abode__favorSp-03-description')
const abodeFavorSp3BoldH1 = document.querySelector('.main__wrapper__abode__favorSp-03-description h1 span#bold')
const abodeFavorSp3BoldH2 = document.querySelector('.main__wrapper__abode__favorSp-03-description h2 span#bold')
const abodeFavorSp3BoldH3 = document.querySelector('.main__wrapper__abode__favorSp-03-description h3 span#bold')
const abodeFavorSp3BoldP = document.querySelector('.main__wrapper__abode__favorSp-03-description p span#bold')
const abodeFavorSp4 = document.querySelector('.main__wrapper__abode__favorSp-04')
const abodeFavorSp4Description = document.querySelector('.main__wrapper__abode__favorSp-04-description')
const abodeFavorSp4BoldH1 = document.querySelector('.main__wrapper__abode__favorSp-04-description h1 span#bold')
const abodeFavorSp4BoldH2 = document.querySelector('.main__wrapper__abode__favorSp-04-description h2 span#bold')
const abodeFavorSp4BoldH3 = document.querySelector('.main__wrapper__abode__favorSp-04-description h3 span#bold')
const abodeFavorSp4BoldP = document.querySelector('.main__wrapper__abode__favorSp-04-description p span#bold')
const abodeFavorMiami1 = document.querySelector('.main__wrapper__abode__favorMiami-01')
const abodeFavorMiami1Description = document.querySelector('.main__wrapper__abode__favorMiami-01-description')
const abodeFavorMiami1H1 = document.querySelector('.main__wrapper__abode__favorMiami-01-description h1 span#bold')
const abodeFavorMiami1H2 = document.querySelector('.main__wrapper__abode__favorMiami-01-description h2 span#bold')
const abodeFavorMiami1H3 = document.querySelector('.main__wrapper__abode__favorMiami-01-description h3 span#bold')
const abodeFavorMiami1P = document.querySelector('.main__wrapper__abode__favorMiami-01-description p span#bold')
const abodeFavorMiami2 = document.querySelector('.main__wrapper__abode__favorMiami-02')
const abodeFavorMiami2Description = document.querySelector('.main__wrapper__abode__favorMiami-02-description')
const abodeFavorMiami2H1 = document.querySelector('.main__wrapper__abode__favorMiami-02-description h1 span#bold')
const abodeFavorMiami2H2 = document.querySelector('.main__wrapper__abode__favorMiami-02-description h2 span#bold')
const abodeFavorMiami2H3 = document.querySelector('.main__wrapper__abode__favorMiami-02-description h3 span#bold')
const abodeFavorMiami2P = document.querySelector('.main__wrapper__abode__favorMiami-02-description p span#bold')
const abodeFavorMiami3 = document.querySelector('.main__wrapper__abode__favorMiami-03')
const abodeFavorMiami3Description = document.querySelector('.main__wrapper__abode__favorMiami-03-description')
const abodeFavorMiami3H1 = document.querySelector('.main__wrapper__abode__favorMiami-03-description h1 span#bold')
const abodeFavorMiami3H2 = document.querySelector('.main__wrapper__abode__favorMiami-03-description h2 span#bold')
const abodeFavorMiami3H3 = document.querySelector('.main__wrapper__abode__favorMiami-03-description h3 span#bold')
const abodeFavorMiami3P = document.querySelector('.main__wrapper__abode__favorMiami-03-description p span#bold')
const abodeFavorMiami4 = document.querySelector('.main__wrapper__abode__favorMiami-04')
const abodeFavorMiami4Description = document.querySelector('.main__wrapper__abode__favorMiami-04-description')
const abodeFavorMiami4H1 = document.querySelector('.main__wrapper__abode__favorMiami-04-description h1 span#bold')
const abodeFavorMiami4H2 = document.querySelector('.main__wrapper__abode__favorMiami-04-description h2 span#bold')
const abodeFavorMiami4H3 = document.querySelector('.main__wrapper__abode__favorMiami-04-description h3 span#bold')
const abodeFavorMiami4P = document.querySelector('.main__wrapper__abode__favorMiami-04-description p span#bold')
const abodeFavorLondres1 = document.querySelector('.main__wrapper__abode__favorLondres-01')
const abodeFavorLondres1Description = document.querySelector('.main__wrapper__abode__favorLondres-01-description')
const abodeFavorLondres1H1 = document.querySelector('.main__wrapper__abode__favorLondres-01-description h1 span#bold')
const abodeFavorLondres1H2 = document.querySelector('.main__wrapper__abode__favorLondres-01-description h2 span#bold')
const abodeFavorLondres1H3 = document.querySelector('.main__wrapper__abode__favorLondres-01-description h3 span#bold')
const abodeFavorLondres1P = document.querySelector('.main__wrapper__abode__favorLondres-01-description p span#bold')
const abodeFavorLondres2 = document.querySelector('.main__wrapper__abode__favorLondres-02')
const abodeFavorLondres2Description = document.querySelector('.main__wrapper__abode__favorLondres-02-description')
const abodeFavorLondres2H1 = document.querySelector('.main__wrapper__abode__favorLondres-02-description h1 span#bold')
const abodeFavorLondres2H2 = document.querySelector('.main__wrapper__abode__favorLondres-02-description h2 span#bold')
const abodeFavorLondres2H3 = document.querySelector('.main__wrapper__abode__favorLondres-02-description h3 span#bold')
const abodeFavorLondres2P = document.querySelector('.main__wrapper__abode__favorLondres-02-description p span#bold')
const abodeFavorLondres3 = document.querySelector('.main__wrapper__abode__favorLondres-03')
const abodeFavorLondres3Description = document.querySelector('.main__wrapper__abode__favorLondres-03-description')
const abodeFavorLondres3H1 = document.querySelector('.main__wrapper__abode__favorLondres-03-description h1 span#bold')
const abodeFavorLondres3H2 = document.querySelector('.main__wrapper__abode__favorLondres-03-description h2 span#bold')
const abodeFavorLondres3H3 = document.querySelector('.main__wrapper__abode__favorLondres-03-description h3 span#bold')
const abodeFavorLondres3P = document.querySelector('.main__wrapper__abode__favorLondres-03-description p span#bold')
const abodeFavorLondres4 = document.querySelector('.main__wrapper__abode__favorLondres-04')
const abodeFavorLondres4Description = document.querySelector('.main__wrapper__abode__favorLondres-04-description')
const abodeFavorLondres4H1 = document.querySelector('.main__wrapper__abode__favorLondres-04-description h1 span#bold')
const abodeFavorLondres4H2 = document.querySelector('.main__wrapper__abode__favorLondres-04-description h2 span#bold')
const abodeFavorLondres4H3 = document.querySelector('.main__wrapper__abode__favorLondres-04-description h3 span#bold')
const abodeFavorLondres4P = document.querySelector('.main__wrapper__abode__favorLondres-04-description p span#bold')
const abodeFavorOrlando1 = document.querySelector('.main__wrapper__abode__favorOrlando-01')
const abodeFavorOrlando1Description = document.querySelector('.main__wrapper__abode__favorOrlando-01-description')
const abodeFavorOrlando1Bold = document.querySelector('.main__wrapper__abode__favorOrlando-01-description #bold')
const abodeFavorOrlando2 = document.querySelector('.main__wrapper__abode__favorOrlando-02')
const abodeFavorOrlando2Description = document.querySelector('.main__wrapper__abode__favorOrlando-02-description')
const abodeFavorOrlando2Bold = document.querySelector('.main__wrapper__abode__favorOrlando-02-description #bold')
const abodeFavorOrlando3 = document.querySelector('.main__wrapper__abode__favorOrlando-03')
const abodeFavorOrlando3Description = document.querySelector('.main__wrapper__abode__favorOrlando-03-description')
const abodeFavorOrlando3Bold = document.querySelector('.main__wrapper__abode__favorOrlando-03-description #bold')
const abodeFavorOrlando4 = document.querySelector('.main__wrapper__abode__favorOrlando-04')
const abodeFavorOrlando4Description = document.querySelector('.main__wrapper__abode__favorOrlando-04-description')
const abodeFavorOrlando4Bold = document.querySelector('.main__wrapper__abode__favorOrlando-04-description #bold')

btnDark.addEventListener('click', () => {
  // Header Variables
  header.classList.toggle('dark-mode')
  logo.classList.toggle('dark-mode')
  inputHeader.classList.toggle('dark-mode')
  inputIcon.classList.toggle('dark-mode')
  userIcon.classList.toggle('dark-mode')

  // Navigation Variables
  navigation.classList.toggle('dark-mode')
  navIconHouse.classList.toggle('dark-mode')
  navTextHouse.classList.toggle('dark-mode')
  navIconMessage.classList.toggle('dark-mode')
  navTextMessage.classList.toggle('dark-mode')
  navIconMap.classList.toggle('dark-mode')
  navTextMap.classList.toggle('dark-mode')
  navIconConfig.classList.toggle('dark-mode')
  navTextConfig.classList.toggle('dark-mode')
  navIconExit.classList.toggle('dark-mode')
  navTextExit.classList.toggle('dark-mode')

  // House Variables 
  house.classList.toggle('dark-mode')
  houseSearchInput.classList.toggle('dark-mode')
  houseTitle.classList.toggle('dark-mode')
  houseSpText.classList.toggle('dark-mode')
  houseSpParagrph.classList.toggle('dark-mode')
  houseSpBtn.classList.toggle('dark-mode')
  houseMiamiText.classList.toggle('dark-mode')
  houseMiamiParagrph.classList.toggle('dark-mode')
  houseMiamiBtn.classList.toggle('dark-mode')
  houseLondresText.classList.toggle('dark-mode')
  houseLondresParagrph.classList.toggle('dark-mode')
  houseLondresBtn.classList.toggle('dark-mode')
  houseOrlandoText.classList.toggle('dark-mode')
  houseOrlandoParagrph.classList.toggle('dark-mode')
  houseOrlandoBtn.classList.toggle('dark-mode')

  // Aborde Variables
  abode.classList.toggle('dark-mode')
  abodeFavorSp1.classList.toggle('dark-mode')
  abodeFavorSp1Description.classList.toggle('dark-mode')
  abodeFavorSp1BoldH1.classList.toggle('dark-mode')
  abodeFavorSp1BoldH2.classList.toggle('dark-mode')
  abodeFavorSp1BoldH3.classList.toggle('dark-mode')
  abodeFavorSp1BoldP.classList.toggle('dark-mode')
  abodeFavorSp2.classList.toggle('dark-mode')
  abodeFavorSp2Description.classList.toggle('dark-mode')
  abodeFavorSp2Bold.classList.toggle('dark-mode')
  abodeFavorSp3.classList.toggle('dark-mode')
  abodeFavorSp3Description.classList.toggle('dark-mode')
  abodeFavorSp3Bold.classList.toggle('dark-mode')
  abodeFavorSp4.classList.toggle('dark-mode')
  abodeFavorSp4Description.classList.toggle('dark-mode')
  abodeFavorSp4Bold.classList.toggle('dark-mode')
  abodeFavorMiami1.classList.toggle('dark-mode')
  abodeFavorMiami1Description.classList.toggle('dark-mode')
  abodeFavorMiami1Bold.classList.toggle('dark-mode')
  abodeFavorMiami2.classList.toggle('dark-mode')
  abodeFavorMiami2Description.classList.toggle('dark-mode')
  abodeFavorMiami2Bold.classList.toggle('dark-mode')
  abodeFavorMiami3.classList.toggle('dark-mode')
  abodeFavorMiami3Description.classList.toggle('dark-mode')
  abodeFavorMiami3Bold.classList.toggle('dark-mode')
  abodeFavorMiami4.classList.toggle('dark-mode')
  abodeFavorMiami4Description.classList.toggle('dark-mode')
  abodeFavorMiami4Bold.classList.toggle('dark-mode')
  abodeFavorLondres1.classList.toggle('dark-mode')
  abodeFavorLondres1Description.classList.toggle('dark-mode')
  abodeFavorLondres1Bold.classList.toggle('dark-mode')
  abodeFavorLondres2.classList.toggle('dark-mode')
  abodeFavorLondres2Description.classList.toggle('dark-mode')
  abodeFavorLondres2Bold.classList.toggle('dark-mode')
  abodeFavorLondres3.classList.toggle('dark-mode')
  abodeFavorLondres3Description.classList.toggle('dark-mode')
  abodeFavorLondres3Bold.classList.toggle('dark-mode')
  abodeFavorLondres4.classList.toggle('dark-mode')
  abodeFavorLondres4Description.classList.toggle('dark-mode')
  abodeFavorLondres4Bold.classList.toggle('dark-mode')
  abodeFavorOrlando1.classList.toggle('dark-mode')
  abodeFavorOrlando1Description.classList.toggle('dark-mode')
  abodeFavorOrlando1Bold.classList.toggle('dark-mode')
  abodeFavorOrlando2.classList.toggle('dark-mode')
  abodeFavorOrlando2Description.classList.toggle('dark-mode')
  abodeFavorOrlando2Bold.classList.toggle('dark-mode')
  abodeFavorOrlando3.classList.toggle('dark-mode')
  abodeFavorOrlando3Description.classList.toggle('dark-mode')
  abodeFavorOrlando3Bold.classList.toggle('dark-mode')
  abodeFavorOrlando4.classList.toggle('dark-mode')
  abodeFavorOrlando4Description.classList.toggle('dark-mode')
  abodeFavorOrlando4Bold.classList.toggle('dark-mode')
})