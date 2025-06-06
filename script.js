async function handleQuery() {
  const input = document.getElementById('userInput').value;
  const responseBox = document.getElementById('responseBox');
  responseBox.innerText = "Thinking...";

  try {
    const res = await fetch('https://your-backend-url/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();
    responseBox.innerText = data.reply || "No response received.";
  } catch (err) {
    responseBox.innerText = "Error connecting to assistant.";
  }
}
