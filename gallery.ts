import './styles.scss';
import { 
  updateArrowVisibility, 
  setupKeyboardNavigation, 
  prefetchImages 
} from './gallery-utils';

document.addEventListener('DOMContentLoaded', () => {
  const parentEl = document.querySelector('.galleryContainer');
  const dialog = document.querySelector<HTMLDialogElement>('dialog');
  const fullsizeImage = document.querySelector<HTMLImageElement>('.popupContent img');
  const thumbnails = document.querySelectorAll<HTMLImageElement>('.galleryContainer img');
  
  if (!parentEl || !dialog || !fullsizeImage || thumbnails?.length < 1) return;

  const closeButton = dialog.querySelector<HTMLButtonElement>('.closeButton');
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
      fullsizeImage.classList.add('loading');

      const thumbnail = target as HTMLImageElement;
      const thumbnailSrcToFullSrc = thumbnail.src.replace(/\/thumbs\//, '/original/');

      // Find the index of the clicked thumbnail
      currentIndex = Array.from(thumbnails).indexOf(thumbnail);

      fullsizeImage.src = thumbnailSrcToFullSrc;
      dialog.showModal();

      // Update arrow visibility when opening dialog
      updateArrowVisibility(currentIndex, thumbnails.length, leftArrow, rightArrow);

      fullsizeImage.onload = () => {
        fullsizeImage.classList.remove('loading');
      }
    }
  });
  
  closeButton?.addEventListener('click', () => {
    fullsizeImage.src = '';
    dialog.close();
  });
  
  // Navigate using arrows
  leftArrow?.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;

      const prevThumb = thumbnails[currentIndex];

      fullsizeImage.classList.add('loading');

      openImageModal(prevThumb, fullsizeImage, dialog);
      updateArrowVisibility(currentIndex, thumbnails.length, leftArrow, rightArrow);
    }
  });
  
  rightArrow?.addEventListener('click', () => {
    if (currentIndex < thumbnails.length - 1) {
      currentIndex++;

      const nextThumb = thumbnails[currentIndex];

      fullsizeImage.classList.add('loading');

      openImageModal(nextThumb, fullsizeImage, dialog);
      updateArrowVisibility(currentIndex, thumbnails.length, leftArrow, rightArrow);
    }
  });
  
  // Close when clicking outside the content area
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
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
  fullsizeImage.style.opacity = '0';
  
  // Remove any existing error messages
  const errorMsg = dialog.querySelector('.error-message');
  if (errorMsg) errorMsg.remove();
  
  // Reset image display in case it was hidden from a previous error
  fullsizeImage.style.display = '';
  
  // Load the image
  const img = new Image();
  img.onload = () => {
    fullsizeImage.src = fullSrc;
    fullsizeImage.alt = thumbnail.alt || 'Gallery image';
    dialog.classList.remove('loading');
    
    // Fade in the image once loaded
    setTimeout(() => {
      fullsizeImage.style.opacity = '1';
    }, 50);
  };
  
  img.onerror = () => {
    dialog.classList.remove('loading');
    dialog.classList.add('error');
    
    // Show error message if image fails to load
    fullsizeImage.style.display = 'none'; // Hide the image
    
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