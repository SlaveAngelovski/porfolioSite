import './styles.scss';
import { 
  updateArrowVisibility, 
  setupKeyboardNavigation, 
  prefetchImages 
} from './gallery-utils';
import { toggleClass } from './scripts/scripts';

document.addEventListener('DOMContentLoaded', () => {
  const parentEl = document.querySelector('.galleryContainer');
  const dialog = document.querySelector<HTMLDialogElement>('dialog');
  const fullsizeImage = document.querySelector<HTMLImageElement>('.popupContent img');
  const thumbnails = document.querySelectorAll<HTMLImageElement>('.galleryContainer img');
  
  if (!parentEl || !dialog || !fullsizeImage || thumbnails?.length < 1) return;

  const closeButton = dialog.querySelector<HTMLButtonElement>('button .closeButton');
  const leftArrow = dialog.querySelector<HTMLElement>('.arrowLeft');
  const rightArrow = dialog.querySelector<HTMLElement>('.arrowRight');
  
  // Initial prefetch of all images using shared utility
  prefetchImages(thumbnails);
  
  let currentIndex = 0;

  // Setup keyboard navigation with dialog mode enabled
  setupKeyboardNavigation(leftArrow, rightArrow, true, dialog);

  parentEl.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;

    if (target.tagName === 'IMG' && target.classList.contains('galleryThumbnail')) {
      const thumbnail = target as HTMLImageElement;
      const thumbnailSrcToFullSrc = thumbnail.src.replace(/\/thumbs\//, '/original/');

      // Find the index of the clicked thumbnail
      currentIndex = Array.from(thumbnails).indexOf(thumbnail);

      fullsizeImage.src = thumbnailSrcToFullSrc;
      // dialog.showModal();
      openImageModal(thumbnail, fullsizeImage, dialog);

      // Update arrow visibility when opening dialog
      updateArrowVisibility(currentIndex, thumbnails.length, leftArrow, rightArrow);
    }
  });
  
  closeButton?.addEventListener('click', () => {
    fullsizeImage.src = '';
    dialog.close();
  });
  
  leftArrow?.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;

      const prevThumb = thumbnails[currentIndex];

      openImageModal(prevThumb, fullsizeImage, dialog);
      updateArrowVisibility(currentIndex, thumbnails.length, leftArrow, rightArrow);
    }
  });
  
  rightArrow?.addEventListener('click', () => {
    if (currentIndex < thumbnails.length - 1) {
      currentIndex++;

      const nextThumb = thumbnails[currentIndex];

      openImageModal(nextThumb, fullsizeImage, dialog);
      updateArrowVisibility(currentIndex, thumbnails.length, leftArrow, rightArrow);
    }
  });
  
  // Close when clicking outside the content area
  dialog.addEventListener('click', (e: Event) => {
    const target = e.target as HTMLElement;
    if (target?.offsetParent === dialog || target === dialog) {
      dialog.close();
    }
  });
});

function openImageModal(
  thumbnail: HTMLImageElement, 
  fullsizeImage: HTMLImageElement,
  dialog: HTMLDialogElement
): void {
  const thumbSrc = thumbnail.src;
  const fullSrc = thumbSrc.replace(/\/thumbs\//, '/original/');
  
  // Show loading indicator
  dialog.classList.add('loading');
  toggleClass(fullsizeImage, 'active', 'remove');
  toggleClass(fullsizeImage, 'hidden', 'add');
  
  // Remove any existing error messages
  const errorMsg = dialog.querySelector('.error-message');
  if (errorMsg) errorMsg.remove();
  
  // Load the image
  const img = new Image();
  img.onload = () => {
    fullsizeImage.src = fullSrc;
    fullsizeImage.alt = thumbnail.alt || 'Gallery image';
    dialog.classList.remove('loading');
    
    // Fade in the image once loaded
    setTimeout(() => {
      toggleClass(fullsizeImage, 'hidden', 'remove');
      toggleClass(fullsizeImage, 'active', 'add');
    }, 50);
  };
  
  img.onerror = () => {
    dialog.classList.remove('loading');
    dialog.classList.add('error');
    
    // Show error message if image fails to load
    
    // Create error message element
    const errorMsg = document.createElement('div');
    errorMsg.className = 'error-message';
    errorMsg.textContent = 'Image could not be loaded';
    
    // Insert after the image
    const popupContent = dialog.querySelector('.popupContent');
    if (popupContent) {
      popupContent.insertBefore(errorMsg, fullsizeImage.nextSibling);
    }
  };
  
  img.src = fullSrc;
  dialog.showModal();
}