const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));

const gallery = document.getElementById('gallery');
for (let i = 1; i <= 20; i++) {
  const num = String(i).padStart(2, '0');
  const a = document.createElement('a');
  a.href = `assets/images/pagina-${num}.jpg`;
  a.target = '_blank';
  a.innerHTML = `<img src="assets/images/pagina-${num}.jpg" alt="Página ${i} del PDF"><span>Página ${i}</span>`;
  gallery.appendChild(a);
}
