const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const catImagesUrls = [
    "https://media1.tenor.com/m/JSc7XPKDSSoAAAAC/saltobears.gif",
    "https://media1.tenor.com/m/z2q67cgXiSMAAAAC/hitydj-teddy-bear.gif",
    "https://media1.tenor.com/m/YNqzKzPOLTsAAAAC/emote.gif",
    "https://media1.tenor.com/m/mBeE2mUaj74AAAAC/sad-reactions.gif",
    "https://media1.tenor.com/m/JbT4JqfvxyEAAAAd/dudu-cry-hay-nako-reika.gif",
    "https://media1.tenor.com/m/WBSLQl3rI4oAAAAC/aham-sithi-sithi-sarker.gif",
    "https://media1.tenor.com/m/jjM8wEXXNqwAAAAd/kiss.gif",
    "https://media1.tenor.com/m/yYKgHmYQMBIAAAAC/mocha-bear-mocha-kiss.gif",
    "https://media1.tenor.com/m/rqzLI-c28-YAAAAC/me-waiting-patiently.gif"
];

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    if (noCount <= catImagesUrls.length) {
      changeImage(noCount - 1);
    }
    resizeYesButton();
    updateNoButtonText();
    if (noCount === catImagesUrls.length) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  catImg.src = "https://media1.tenor.com/m/i-EiA87Hy4QAAAAd/kiss-day.gif";
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.5;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function changeImage(index) {
  if (index < catImagesUrls.length) {
    catImg.src = catImagesUrls[index];
  } else {
    // Optionally handle the case where no more images are available
  }
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}

function generateMessage(noCount) {
  const messages = [
    "Are you sure?",
    "Segura Segura?",
    "Te dare otra oportunidad :(",
    "Don't do this to me :(",
    "You're breaking my heart",
    "I'm gonna cry...",
    "Babe ...",
    "Te dare muchos besitos virtuales",
    "Ya que clickea no pues :(",
  ];

  const messageIndex = Math.min(noCount, messages.length) - 1;
  return messages[messageIndex];
}

function makeButtonMove() {
  noButton.addEventListener('mouseover', function() {
    if (noCount >= 8) {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const newX = Math.random() * (viewportWidth - this.offsetWidth);
      const newY = Math.random() * (viewportHeight - this.offsetHeight);
  
      this.style.position = 'fixed';
      this.style.left = `${newX}px`;
      this.style.top = `${newY}px`;
    }
  });
}


makeButtonMove();