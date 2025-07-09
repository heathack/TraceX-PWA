const API = 'https://YOUR_RENDER_URL/api/trace'; // replace with your deployed backend

document.getElementById('traceBtn').onclick = async () => {
  const number = document.getElementById('number').value.trim();
  if (!number) return alert('Enter a phone number');
  const res = await fetch(API, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({number})
  });
  if (!res.ok) return alert('Error tracing number');
  const data = await res.json();
  document.getElementById('result').style.display = 'block';
  document.getElementById('result').innerHTML = `
    <h2>Result for ${data.number}</h2>
    <p><strong>Country:</strong> ${data.country_name}</p>
    <p><strong>Carrier:</strong> ${data.carrier}</p>
    <p><strong>Location:</strong> ${data.location}</p>
    <p><strong>Breached:</strong> ${data.breached ? 'Yes' : 'No'}</p>
  `;
};
