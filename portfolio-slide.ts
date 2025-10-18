import { updateArrowVisibility, setupKeyboardNavigation } from './gallery-utils';

type PortfolioElements = {
  images: NodeListOf<HTMLImageElement>;
  description: NodeListOf<HTMLElement>;
  arrowLeft: HTMLElement | null;
  arrowRight: HTMLElement | null;
};

export function initializePortfolio(): void {
  document.addEventListener('DOMContentLoaded', () => {
    const parent = document.querySelector('[data-portfolio]');

    if (parent === null) return;

    let currentIndex = 0;

    const elements: PortfolioElements = {
      images: document.querySelectorAll('[data-portfolio] img'),
      description: document.querySelectorAll('[data-portfolio-item]'),
      arrowLeft: parent.querySelector('[data-arrow-left]'),
      arrowRight: parent.querySelector('[data-arrow-right]'),
    };

    if (hasValidElements(elements) === false) return;

    const totalItems = elements.images.length;

    setupKeyboardNavigation(elements.arrowLeft, elements.arrowRight);

    elements.arrowLeft.addEventListener('click', () => {
      currentIndex == 0 ? currentIndex = 0 : currentIndex--;

      updateDisplay(currentIndex, elements);
      updateArrowVisibility(currentIndex, totalItems, elements.arrowLeft, elements.arrowRight);
    });

    elements.arrowRight.addEventListener('click', () => {
      currentIndex >= totalItems - 1 ? currentIndex = totalItems - 1 : currentIndex++;

      updateDisplay(currentIndex, elements);
      updateArrowVisibility(currentIndex, totalItems, elements.arrowLeft, elements.arrowRight);
    });

    updateArrowVisibility(currentIndex, totalItems, elements.arrowLeft, elements.arrowRight);
  });
}

function hasValidElements(elements: PortfolioElements): elements is PortfolioElements & {
  arrowLeft: HTMLElement;
  arrowRight: HTMLElement;
} {
  return !!elements.images.length && 
         !!elements.description.length && 
         elements.arrowLeft !== null && 
         elements.arrowRight !== null;
}

function updateDisplay(index: number, elements: PortfolioElements): void {
  elements.images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });

  elements.description.forEach((desc, i) => {
    desc.classList.toggle('active', i === index);
  });
}