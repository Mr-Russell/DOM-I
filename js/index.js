const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



// ============ NAVIGATION =================

const links = document.querySelectorAll('a')

for (let i = 0; i < links.length; i++){
  const linkLabels = Object.values(siteContent.nav)
  links[i].textContent = linkLabels[i]
  links[i].style.color = 'green'
}

const navLinks = document.querySelector('nav')
navLinks.style.padding = '2%'
const newLink = document.createElement('a')
newLink.textContent = 'Survey'
newLink.style.color = 'green'
navLinks.appendChild(newLink)

const otherNewLink = document.createElement('a')
otherNewLink.textContent = "Raffle"
otherNewLink.style.color = 'green'
navLinks.appendChild(otherNewLink)



//================ CTA ===========================

const ctaH1 = document.querySelector('h1')
ctaH1.textContent = siteContent['cta']['h1']
// ctaH1.style.width = '200px'
// ctaH1.style.display = 'flex'
// ctaH1.style.flexFlow = 'column'
// ctaH1.style.alignItems = 'center'
ctaH1.style.border = '4px solid goldenrod'
ctaH1.style.padding = "5%"
ctaH1.style.color ='deeppink'
ctaH1.style.backgroundColor = 'darkred'


const ctaBtn = document.querySelector('button')
ctaBtn.textContent = siteContent['cta']['button']


const ctaImg = document.querySelector('#cta-img')
ctaImg.src = siteContent['cta']['img-src']



//=============== MIDDLE TEXT ===================

const features = document.querySelector('.top-content .text-content:first-child h4')
features.textContent = siteContent['main-content']['features-h4']

const featTxt = document.querySelector('.top-content .text-content:first-child p')
featTxt.textContent = siteContent['main-content']['features-content']



const about = document.querySelector('.top-content .text-content:last-child h4')
about.textContent = siteContent['main-content']['about-h4']

const aboutTxt = document.querySelector('.top-content .text-content:last-child p')
aboutTxt.textContent = siteContent['main-content']['about-content']



//============== MIDDLE IMAGE ====================

const midImg = document.querySelector('#middle-img')
midImg.src = siteContent['main-content']['middle-img-src']



//================ BOTTOM TEXT =====================

// const btmCnt = document.querySelectorAll('.bottom-content .text-content')
// const btmTxt = btmCnt.children

const services = document.querySelector('.bottom-content .text-content:first-child h4')
services.textContent = siteContent['main-content']['services-h4']

const servText = document.querySelector('.bottom-content .text-content:first-child p')
servText.textContent = siteContent['main-content']['services-content']



const product = document.querySelector('.bottom-content .text-content:nth-child(2) h4')
product.textContent = siteContent['main-content']['product-h4']

const prodText = document.querySelector('.bottom-content .text-content:nth-child(2) p')
prodText.textContent = siteContent['main-content']['product-content']



const vision = document.querySelector('.bottom-content .text-content:last-child h4')
vision.textContent = siteContent['main-content']['vision-h4']

const visTxt = document.querySelector('.bottom-content .text-content:last-child p')
visTxt.textContent = siteContent['main-content']['vision-content']


//================ CONTACT INFO =====================

const contact = document.querySelector('.contact h4')
contact.textContent = siteContent['contact']['contact-h4']

const address = document.querySelector('.contact p:nth-child(2)')
address.textContent = siteContent['contact']['address']

const phone = document.querySelector('.contact p:nth-child(3)')
phone.textContent = siteContent['contact']['phone']

const email = document.querySelector('.contact p:last-child')
email.textContent = siteContent['contact']['email']


//=================== COPYRIGHT ====================

const copyRight = document.querySelector('footer p')
copyRight.textContent = siteContent['footer']['copyright']









//================== STYLING ======================

const bodyColor = document.querySelector('body')
bodyColor.style.backgroundColor = 'lemonchiffon'

const headerColor = document.querySelector('header')
headerColor.style.backgroundColor = 'mistyrose'
// headerColor.style.margin = '4%'
headerColor.style.padding = '3%'
// headerColor.style.alignContent = 'center'

const divColor = document.querySelectorAll('.text-content')
for (let i = 0; i < divColor.length; i++){
  divColor[i].style.border = "3px solid palevioletred"
  divColor[i].style.padding = '1%'
  divColor[i].style.backgroundColor = 'darkslateblue'
}

const h4Color = document.querySelectorAll('h4')
for (let i = 0; i < h4Color.length; i++){
  h4Color[i].style.color ='deeppink'
}

const pColor = document.querySelectorAll('p')
for (let i = 0; i < pColor.length; i++){
  pColor[i].style.color ='mediumvioletred'
}