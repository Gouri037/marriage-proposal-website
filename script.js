function submitResponse() {
  const response = document.getElementById('userResponse').value.trim();
  const responseMessage = document.getElementById('responseMessage');
  
  if (response.toLowerCase() === 'yes') {
    responseMessage.innerHTML = "Yay! I can't wait to spend forever with you! 💖💍";
    responseMessage.style.color = "#32CD32"; // Green for happiness
  } else if (response.toLowerCase() === 'no') {
    responseMessage.innerHTML = "It's okay, my love. I'll always cherish you. 💖";
    responseMessage.style.color = "#ff6347"; // Red for sadness
  } else if (response.length > 0) {
    responseMessage.innerHTML = `You said: ${response}. That's sweet! 💖`;
    responseMessage.style.color = "#ff1493"; // Pink for sweetness
  } else {
    responseMessage.innerHTML = "Please enter your response!";
    responseMessage.style.color = "#ff6347"; // Red for error
  }
}
