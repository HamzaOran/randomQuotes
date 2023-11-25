const quoteText = document.querySelector('.quote');
quoteBtn = document.querySelector('button');
authorName = document.querySelector('.author .name');
soundBtn = document.querySelector('.sound');

twitterBtn = document.querySelector('.twitter');

function randomQuote() {
  quoteBtn.classList.add('loading');
  quoteBtn.innerText = 'Loading...';
  fetch('https://api.quotable.io/random')
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      quoteText.innerText = result.content;
      authorName.innerText = result.author;
      quoteBtn.innerText = 'New Quote';
      quoteBtn.classList.remove('loading');
    });
}

soundBtn.addEventListener('click', () => {
  let utterance = new SpeechSynthesisUtterance(
    `${quoteText.innerText} by ${authorName.innerText}`
  );
  speechSynthesis.speak(utterance);
});

twitterBtn.addEventListener('click', () => {
  let tweeturl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
  window.open(tweeturl, '_blank');
});

quoteBtn.addEventListener('click', randomQuote);
