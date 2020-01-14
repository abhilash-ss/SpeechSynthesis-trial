window.onload = () => {

  const text = document.getElementById('text-area');
  const button = document.getElementById('btn');

  button.addEventListener('click', (e) => {
    
    const textToSay = text.value;
    const message = new SpeechSynthesisUtterance(textToSay);
    
    message.lang='en-US';
    speechSynthesis.speak(message);
    
  });
};
