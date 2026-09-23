//SWIPER SLIDER

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const cart = [
  { name: 'Roll Dragón Especial', price: 14.5, quantity: 2, image: 'images/sushi1.jpeg' },
  { name: 'Nigiri Salmón (4 pcs)', price: 9, quantity: 1, image: 'images/sushi2.jpeg' },
];

const cartButton = document.querySelector('#cart-btn');
const cartDrawer = document.querySelector('#cart-drawer');
const cartBackdrop = document.querySelector('#cart-backdrop');
const cartItems = document.querySelector('#cart-items');

const money = (amount) => `$${amount.toFixed(2)}`;

function renderCart() {
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const service = subtotal * 0.1;

  document.querySelector('#cart-count').textContent = itemCount;
  document.querySelector('#drawer-count').textContent = itemCount;
  document.querySelector('#cart-subtotal').textContent = money(subtotal);
  document.querySelector('#cart-service').textContent = money(service);
  document.querySelector('#cart-total').textContent = money(subtotal + service);
  cartItems.innerHTML = cart.map((item, index) => `
    <article class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <div class="cart-item-line"><h3>${item.name}</h3><strong>${money(item.price * item.quantity)}</strong></div>
        <div class="quantity-control">
          <button type="button" data-action="decrease" data-index="${index}" aria-label="Reducir cantidad">-</button>
          <span>${item.quantity}</span>
          <button type="button" data-action="increase" data-index="${index}" aria-label="Aumentar cantidad">+</button>
        </div>
      </div>
    </article>
  `).join('');
}

function setCartOpen(isOpen) {
  cartDrawer.classList.toggle('is-open', isOpen);
  cartBackdrop.classList.toggle('is-visible', isOpen);
  cartButton.setAttribute('aria-expanded', String(isOpen));
  cartDrawer.setAttribute('aria-hidden', String(!isOpen));
}

cartButton.addEventListener('click', () => setCartOpen(true));
cartBackdrop.addEventListener('click', () => setCartOpen(false));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setCartOpen(false);
});

cartItems.addEventListener('click', (event) => {
  const control = event.target.closest('button[data-action]');
  if (!control) return;

  const item = cart[Number(control.dataset.index)];
  if (control.dataset.action === 'increase') item.quantity += 1;
  if (control.dataset.action === 'decrease') item.quantity = Math.max(1, item.quantity - 1);
  renderCart();
});

document.querySelectorAll('.add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const existingItem = cart.find((item) => item.name === button.dataset.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name: button.dataset.name, price: Number(button.dataset.price), quantity: 1, image: button.dataset.image });
    }
    renderCart();
    setCartOpen(true);
  });
});

renderCart();