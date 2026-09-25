/**
 * Ver Burgueros Neza - Interactive Scripts
 * WhatsApp phone: 5655263382
 */

const WHATSAPP_PHONE = '525655263382';

// Menu data with real items, descriptions, and prices in MXN
const menuData = [
  {
    id: 1,
    category: 'hamburguesas',
    name: 'Burger Clásica Neza',
    desc: 'Doble carne smash 100% res, queso cheddar derretido, tocino crujiente, lechuga fresca, jitomate y aderezo especial de la casa en pan brioche artesanal.',
    price: 110,
    badge: 'La más pedida',
    img: 'assets/menu-burger.png'
  },
  {
    id: 2,
    category: 'hamburguesas',
    name: 'Nezayork Doble Bacon',
    desc: 'Doble jugosa carne smash, cuádruple tocino ahumado glaseado, doble queso amarillo, cebolla caramelizada y salsa BBQ secreta.',
    price: 135,
    badge: 'Favorita Neza',
    img: 'assets/menu-burger.png'
  },
  {
    id: 3,
    category: 'hamburguesas',
    name: 'La Malandra Habanero',
    desc: 'Para los que no tienen miedo: Doble carne, queso gouda derretido, tiras de jalapeño tatemado, aderezo cremoso de habanero y guacamole.',
    price: 130,
    badge: 'Picante Sabroso',
    img: 'assets/menu-burger.png'
  },
  {
    id: 4,
    category: 'hamburguesas',
    name: 'Mega Burguera Monchosa',
    desc: 'Triple carne smash con una capa de macarrones con queso cheddar fundido, lluvia de tocino y aderezo Burgueros.',
    price: 160,
    badge: 'Ultra Especial',
    img: 'assets/menu-burger.png'
  },
  {
    id: 5,
    category: 'papas',
    name: 'Papas Burgueros Clásicas',
    desc: 'Papas corte recto súper doraditas y crujientes por fuera, suaves por dentro, sazonadas con nuestra mezcla de sal de mar y paprika.',
    price: 55,
    badge: 'Siempre Crujientes',
    img: 'assets/menu-fries.png'
  },
  {
    id: 6,
    category: 'papas',
    name: 'Papas Monchosas Cheddar & Bacon',
    desc: 'Porción generosa de papas crujientes bañadas en abundante salsa cheddar caliente, lluvia de tocino crocante y cebollín.',
    price: 85,
    badge: 'Para Compartir',
    img: 'assets/menu-fries.png'
  },
  {
    id: 7,
    category: 'papas',
    name: 'Papas Estilo Nezayork',
    desc: 'Papas fritas cubiertas de pulled pork BBQ, queso fundido, aderezo ranch y un toque de chiles jalapeños encurtidos.',
    price: 110,
    badge: 'Bomba de Sabor',
    img: 'assets/menu-fries.png'
  },
  {
    id: 8,
    category: 'bebidas',
    name: 'Refresco Vaso Gigante 1L',
    desc: 'Coca-Cola, Sprite, Sidral Mundet o Fanta bien fría con hielo frappé en vaso temático de Burgueros.',
    price: 45,
    badge: 'Súper Frío',
    img: 'assets/menu-drinks.png'
  },
  {
    id: 9,
    category: 'bebidas',
    name: 'Malteada Artesanal de Chocolate',
    desc: 'Helado cremoso premium de chocolate con chispas, jarabe de chocolate de la casa y crema batida espesa.',
    price: 70,
    badge: 'Artesanal',
    img: 'assets/menu-drinks.png'
  },
  {
    id: 10,
    category: 'bebidas',
    name: 'Malteada de Vainilla & Caramelo',
    desc: 'Elaborada con helado de vainilla mexicana, caramelo salado y topping de galleta triturada.',
    price: 70,
    badge: 'Cremosa',
    img: 'assets/menu-drinks.png'
  },
  {
    id: 11,
    category: 'extras',
    name: 'Boneless Crujientes (8 pzas)',
    desc: 'Trozos de pechuga de pollo empanizados al momento, bañados en salsa Buffalo picante, BBQ dulce o Mango Habanero.',
    price: 95,
    badge: 'Crujientes',
    img: 'assets/menu-extras.png'
  },
  {
    id: 12,
    category: 'extras',
    name: 'Chicken Tenders Artesanales (5 pzas)',
    desc: 'Tiras gigantes de pollo crispy con receta secreta de especias, acompañadas de aderezo honey mustard y aderezo chipotle.',
    price: 90,
    badge: 'Top Seller',
    img: 'assets/menu-extras.png'
  },
  {
    id: 13,
    category: 'extras',
    name: 'Dedos de Queso Mozzarella (6 pzas)',
    desc: 'Crujientes palitos rellenos de queso derretido que se estira, servidos con salsa pomodoro italiana con especias.',
    price: 75,
    badge: 'Quesoso',
    img: 'assets/menu-extras.png'
  }
];

// Helper to construct WhatsApp link with custom message
function getWhatsAppUrl(customText) {
  const encoded = encodeURIComponent(customText || '¡Hola Burgueros Neza! Quiero hacer un pedido 🍔🔥');
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
}

// Open modal with specific category pre-selected
function openMenuModal(category = 'todas') {
  const modal = document.getElementById('menu-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  renderMenuItems(category);

  // Update active tab styling
  const tabs = document.querySelectorAll('.menu-tab-btn');
  tabs.forEach(tab => {
    if (tab.dataset.category === category) {
      tab.classList.add('bg-[#FDCC02]', 'text-black', 'font-bold');
      tab.classList.remove('bg-neutral-800', 'text-white');
    } else {
      tab.classList.remove('bg-[#FDCC02]', 'text-black', 'font-bold');
      tab.classList.add('bg-neutral-800', 'text-white');
    }
  });
}

function closeMenuModal() {
  const modal = document.getElementById('menu-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

// Render filtered menu items inside modal
function renderMenuItems(category = 'todas') {
  const container = document.getElementById('modal-items-container');
  if (!container) return;

  const filtered = category === 'todas' 
    ? menuData 
    : menuData.filter(item => item.category === category);

  container.innerHTML = filtered.map(item => {
    const waLink = getWhatsAppUrl(`¡Hola Burgueros Neza! Quiero ordenar: ${item.name} ($${item.price} MXN) 🍔`);
    return `
      <div class="bg-[#18181b] border border-neutral-800 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-[#FDCC02]/40 transition-colors">
        <div class="flex gap-4 items-start">
          <img src="${item.img}" alt="${item.name}" class="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover bg-neutral-900 border border-neutral-700 shrink-0">
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 flex-wrap mb-1">
              <span class="text-xs bg-[#FDCC02] text-black font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">${item.badge}</span>
              <span class="text-xs text-neutral-400 uppercase tracking-widest">${item.category}</span>
            </div>
            <h4 class="font-comic text-white text-lg sm:text-xl leading-tight">${item.name}</h4>
            <p class="text-xs sm:text-sm text-neutral-400 mt-1 line-clamp-2">${item.desc}</p>
          </div>
        </div>
        <div class="flex items-center justify-between mt-4 pt-3 border-t border-neutral-800/80">
          <div class="text-[#FDCC02] font-comic text-xl sm:text-2xl">$${item.price} <span class="text-xs text-neutral-400 font-sans">MXN</span></div>
          <a href="${waLink}" target="_blank" rel="noopener noreferrer" 
             class="bg-[#FDCC02] hover:bg-[#e5b802] text-black font-bold text-xs sm:text-sm px-4 py-2 rounded-full inline-flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
            Pedir por WhatsApp
          </a>
        </div>
      </div>
    `;
  }).join('');
}

// Setup event listeners once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileClose = document.getElementById('mobile-drawer-close');

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });
  }
  if (mobileClose && mobileDrawer) {
    mobileClose.addEventListener('click', () => {
      mobileDrawer.classList.add('hidden');
    });
  }

  // Close mobile drawer when clicking a link
  document.querySelectorAll('#mobile-drawer a').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileDrawer) mobileDrawer.classList.add('hidden');
    });
  });

  // Modal category tabs click
  const tabs = document.querySelectorAll('.menu-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const cat = tab.dataset.category;
      openMenuModal(cat);
    });
  });

  // Close modal button
  const modalCloseBtn = document.getElementById('modal-close-btn');
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeMenuModal);
  }

  // Close modal clicking outside
  const modal = document.getElementById('menu-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeMenuModal();
      }
    });
  }

  // Escape key closes modal & drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenuModal();
      if (mobileDrawer) mobileDrawer.classList.add('hidden');
    }
  });

  // Initialize branch live status
  updateBranchStatus();
});

// ==============================================================
// GOOGLE MAPS & SUCURSAL INTERACTIVE MODULE
// ==============================================================

// Switch location menu tabs: Ubicación | Horarios | Servicios
function switchLocationTab(tabName) {
  const tabs = ['ubicacion', 'horarios', 'servicios'];
  
  tabs.forEach(name => {
    const btn = document.getElementById(`tab-btn-${name}`);
    const pane = document.getElementById(`pane-${name}`);
    if (!btn || !pane) return;

    if (name === tabName) {
      btn.className = 'location-tab-btn py-2 px-2 rounded-xl text-center transition-all bg-[#FDCC02] text-black shadow font-extrabold flex items-center justify-center gap-1.5 focus:outline-none';
      pane.classList.remove('hidden');
      pane.classList.add('block');
    } else {
      btn.className = 'location-tab-btn py-2 px-2 rounded-xl text-center transition-all text-neutral-400 hover:text-white flex items-center justify-center gap-1.5 focus:outline-none';
      pane.classList.add('hidden');
      pane.classList.remove('block');
    }
  });
}

// Copy branch address to clipboard with animated visual feedback
function copyBranchAddress() {
  const address = 'Lago Constanza 241-b, Agua Azul, 57500 Ciudad Nezahualcóyotl, Méx.';
  const copyBtn = document.getElementById('copy-address-btn');
  const copyText = document.getElementById('copy-text');
  const copyIcon = document.getElementById('copy-icon');

  const onCopied = () => {
    if (copyText) copyText.textContent = '¡Copiada!';
    if (copyBtn) {
      copyBtn.classList.add('bg-emerald-600/30', 'border-emerald-500/60', 'text-emerald-300');
      copyBtn.classList.remove('bg-neutral-800/90', 'text-neutral-200');
    }
    if (copyIcon) {
      copyIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />';
      copyIcon.classList.remove('text-[#FDCC02]');
      copyIcon.classList.add('text-emerald-400');
    }

    setTimeout(() => {
      if (copyText) copyText.textContent = 'Copiar Dirección';
      if (copyBtn) {
        copyBtn.classList.remove('bg-emerald-600/30', 'border-emerald-500/60', 'text-emerald-300');
        copyBtn.classList.add('bg-neutral-800/90', 'text-neutral-200');
      }
      if (copyIcon) {
        copyIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>';
        copyIcon.classList.add('text-[#FDCC02]');
        copyIcon.classList.remove('text-emerald-400');
      }
    }, 2500);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(address).then(onCopied).catch(() => {
      fallbackCopy(address, onCopied);
    });
  } else {
    fallbackCopy(address, onCopied);
  }
}

function fallbackCopy(text, callback) {
  try {
    const input = document.createElement('textarea');
    input.value = text;
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    if (callback) callback();
  } catch (err) {
    console.error('No se pudo copiar el texto', err);
  }
}

// Dynamic branch schedule status calculation
function updateBranchStatus() {
  const badge = document.getElementById('branch-status-badge');
  if (!badge) return;

  try {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 1 is Monday
    const hour = now.getHours();

    if (day === 1) {
      badge.className = 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-bold shrink-0 self-start sm:self-auto shadow-sm';
      badge.innerHTML = '<span class="w-2 h-2 rounded-full bg-red-400"></span><span>🔴 Hoy Cerrado (Descanso) • Abrimos Mañana 2:00 PM</span>';
    } else if (hour >= 14 && hour < 23) {
      badge.className = 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold shrink-0 self-start sm:self-auto shadow-sm';
      badge.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span><span>🟢 Abierto Ahora • ¡Te esperamos!</span>';
    } else {
      badge.className = 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold shrink-0 self-start sm:self-auto shadow-sm';
      badge.innerHTML = '<span class="w-2 h-2 rounded-full bg-amber-400"></span><span>🟡 Abrimos hoy a las 2:00 PM • ¡Pide tu orden!</span>';
    }
  } catch (e) {
    badge.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-400"></span><span>🟢 Martes a Domingo • 2:00 PM – 11:00 PM</span>';
  }
}
