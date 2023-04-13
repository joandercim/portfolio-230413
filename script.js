const gridBox = document.querySelector('.grid-box');
const boxes = document.querySelectorAll('.card');

const refInfo = [
  {
    title: 'Ekonomikontoret',
    body: 'En webbsida jag gjorde till min nuvarande arbetsgivare för ett par år sedan. Jag skrev all HTML och CSS lokalt och konverterade sedan allt till ett Worpress-tema för att få tillgång till deras CMS.',
    gifUrl: 'https://josiasmusik.se/ekogif.gif',
    gitUrl: '',
  },
  {
    title: 'Testimonials Project',
    body: 'En utmaning från Frontend Mentor jag gjorde för att fräscha upp mina kunskaper om CSS Grid.',
    gifUrl: 'img/testim-2.png',
    gitUrl: 'https://github.com/joandercim/testimonials-challenge',
  },
  {
    title: 'Flixx App',
    body: 'En app som hämtar filmer och serier från The Movie Database API. Jag har inte skrivit all HTML och CSS, men däremot all JavaScript.',
    gifUrl: 'https://josiasmusik.se/flixx-gif.gif',
    gitUrl: 'https://github.com/joandercim/flixx-app',
  },
  {
    title: 'Results Challenge',
    body: 'Ännu en utmaning från Frontend Mentor. Responsiv sida som hämtar resultatsiffror från en lokal API.',
    gifUrl: 'img/results-2.png',
  },
  {
    title: 'Shopping List',
    body: 'En enkel shoppinglista jag gjorde för att lära mig om local storage. Sidan låter användaren lägga till, ta bort och redigera varor i inköpslistan. Varor som läggs till i listan sparas också i local storage.',
    gifUrl: 'https://josiasmusik.se/shop-2.gif',
    gitUrl: 'https://github.com/joandercim/dark-shopping-list',
  },
];

function scaleBoxes() {
  boxes.forEach((card, index) => {
    setTimeout(() => {
      card.style.scale = '1';
    }, index * 150);
  });
}

function rollIn() {
  document.querySelector('.info').hidden = true;
  setTimeout(() => {
    gridBox.style.margin = '0px auto';
  }, 150);
  setTimeout(() => {
    gridBox.style.opacity = '1';
    document.querySelector('h1').style.opacity = '1';
  }, 200);
  scaleBoxes();
}

function showInfo(e) {
  if (e.target.parentElement.classList.contains('card')) {
    const clicked = e.target.parentElement;
    switch (Number(clicked.id)) {
      case 1:
        document.querySelector('.info').innerHTML = `
          <h2>${refInfo[0].title}</h2>
          <p>Klicka för att öppna webbsidan i nytt fönster</p>`;
        document.querySelector(
          '.info'
        ).innerHTML = `<h2>EKONOMIKONTORET I HJO</h2><br>
          ${refInfo[0].body}
          <img src="${refInfo[0].gifUrl}" alt="Ekonomikontoret" class="gif">`;
        break;
      case 2:
        document.querySelector(
          '.info'
        ).innerHTML = `<h2>${refInfo[2].title}</h2>
          <p>${refInfo[2].body}</p>
          <img src="${refInfo[2].gifUrl}" alt="Testimonials" class="gif">
          <p>Visa på </p>  <a href="${refInfo[2].gitUrl}" target="_blank"><img src="img/GitHub_Logo.png" alt="GitHub Logo" width="80px"></a>`;
        break;
      case 3:
        document.querySelector(
          '.info'
        ).innerHTML = `<h2>${refInfo[1].title}</h2>
          <p>${refInfo[1].body}</p>
          <img src="${refInfo[1].gifUrl}" alt="${refInfo[1].title}" class="gif">
          <p>Visa på </p>  <a href="${refInfo[1].gitUrl}" target="_blank"><img src="img/GitHub_Logo.png" alt="GitHub Logo" width="80px"></a>`;
        break;
      case 5:
        document.querySelector(
          '.info'
        ).innerHTML = `<h2>${refInfo[4].title}</h2>
          <p>${refInfo[4].body}</p>
          <img src="${refInfo[4].gifUrl}" alt="${refInfo[4].title}" class="gif">
          <p>Visa på </p><a href="${refInfo[4].gitUrl}" target="_blank"><img src="img/GitHub_Logo.png" alt="GitHub Logo" width="80px"></a>`;
        break;
      case 4:
        console.log('fem');
        break;
      default:
        console.log('något funkarnte');
    }
    showBox();
  }
}

// function positionInformation(e) {
//   const left = 10 + e.pageX;
//   const top = 10 + e.pageY;
//   document.querySelector('.information').style.left = left + 'px';
//   document.querySelector('.information').style.top = top + 'px';
// }

// function hideInformation(e) {
//   if (e.target.parentElement.classList.contains('card')) {
//     document.querySelector('.information').style.opacity = '0';
//   }
// }

// function showInformation() {
//   document.querySelector('.information').style.opacity = '.95';
// }

function reDirect(e) {
  if (e.target.parentElement.classList.contains('card')) {
    const clicked = e.target.parentElement;
    switch (Number(clicked.id)) {
      case 1:
        window.open('http://ekonomikontorethjo.se', '_blank');
        break;
      case 2:
        window.open('https://luminous-yeot-69c4c0.netlify.app/', '_blank');
        break;
      case 3:
        window.open('https://gleeful-parfait-cccb6a.netlify.app/', '_blank');
        break;
      case 4:
        console.log('Undefined');
        break;
      case 5:
        window.open('https://classy-pony-5cf246.netlify.app/', '_blank');
        break;
    }
  }
}

function showBox() {
  document.querySelector('.info').hidden = false;
}

gridBox.addEventListener('mouseover', showInfo);
// gridBox.addEventListener('mousemove', positionInformation);
gridBox.addEventListener('click', reDirect);
// gridBox.addEventListener('mouseout', hideInformation);
window.addEventListener('DOMContentLoaded', rollIn);
