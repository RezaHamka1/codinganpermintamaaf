const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const container = document.querySelector('.container');

// Event listener untuk tombol "Ya"
yesButton.addEventListener('click', () => {
  const waMessage = encodeURIComponent('Aku mau balikan sayang❤️');
  const waNumber = '6282331414358'; // Ganti dengan nomor WhatsApp tujuan
  window.location.href = `https://wa.me/${waNumber}?text=${waMessage}`;
});

// Event listener untuk tombol "Tidak"
noButton.addEventListener('mouseover', () => {
  const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = 'absolute';
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});

// Event listener untuk klik tombol "Tidak"
noButton.addEventListener('click', () => {
  const message = document.createElement('p');
  message.textContent = 'Yeee Harus mau dong!';
  message.style.color = '#ff0000';
  message.style.fontSize = '18px';
  message.style.marginTop = '20px';
  container.appendChild(message);

  // Menghapus pesan setelah 2 detik
  setTimeout(() => {
    container.removeChild(message);
  }, 2000);
});