window.addEventListener("load", () => {
  const introToggle = document.querySelector("[data-id='introToggle']");
  const introEl = document.querySelector("[data-id='introEl']");
  const contactEl = document.querySelector("[data-id='contactEl']");
  const description = document.querySelector('.description');

  const handlers = [
  {
    el: introToggle,
    handler: (entry: IntersectionObserverEntry) => {
      if (!entry.isIntersecting) {
        toggleClass(introEl, 'introShowDescription', 'add');
        toggleClass(description, 'hidden', 'remove');
      } else {
        toggleClass(introEl, 'introShowDescription', 'remove');
        toggleClass(description, 'hidden', 'add');
      }
    },
  },
  {
    el: contactEl,
    handler: (entry: IntersectionObserverEntry) => {
      const condition = entry.isIntersecting ? 'add' : 'remove';
      toggleClass(contactEl, 'showHouses', condition);
    }
  }
];

  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: "0px",
    threshold: 0.5
  };

  const elementHandlers = new Map();

  const introObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const handler = elementHandlers.get(entry.target);
      if (handler) handler(entry);
    });
  }, observerOptions);

  handlers.forEach(({ el, handler }) => {
    if (!el || typeof handler !== "function") return;
    
    elementHandlers.set(el, handler);
    introObserver.observe(el);
  });
  
});

function toggleClass(el: Element | null, classesToToggle: string, method: 'add' | 'remove'): void {
  if (el === null) return;
  
  classesToToggle.split(' ').forEach((cls) => {
    if (cls) {
      if (method === 'add') el.classList.add(cls);
      else el.classList.remove(cls);
    }
  });
}