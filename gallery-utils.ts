/**
 * Shared gallery utility functions
 * Used by both portfolio slider and gallery components
 */

/**
 * Updates visibility of navigation arrows based on current position
 */
export function updateArrowVisibility(
  index: number,
  total: number,
  leftArrow: HTMLElement | null,
  rightArrow: HTMLElement | null
): void {
    leftArrow?.classList.toggle('hidden', index === 0);
    rightArrow?.classList.toggle('hidden', index === total - 1);
}

export function setupKeyboardNavigation(
  leftArrow: HTMLElement | null,
  rightArrow: HTMLElement | null,
  isDialogMode: boolean = false,
  dialogElement?: HTMLDialogElement | null
): void {
  document.addEventListener('keydown', (e) => {
    // Only process keyboard events if dialog is open (when in dialog mode)
    if (isDialogMode && dialogElement && !dialogElement.open) {
      return;
    }
    
    if (e.key === 'ArrowLeft') {
      leftArrow?.click();
    } else if (e.key === 'ArrowRight') {
      rightArrow?.click();
    }
  });
}

/**
 * Adds prefetch link to document head for image optimization
 */
export function addPrefetchLink(url: string): void {
  // Check if prefetch link already exists
  if (!document.querySelector(`link[href="${url}"][rel="prefetch"]`)) {
    const link = document.createElement('link');

    link.rel = 'prefetch';
    link.href = url;
    link.as = 'image';

    document.head.appendChild(link);
  }
}

export function prefetchImages(
  thumbnails: NodeListOf<HTMLImageElement>, 
  sourcePathRegex: RegExp = /\/thumbs\//,
  targetPath: string = '/original/'
): void {
  thumbnails.forEach((thumbnail) => {
    const thumbSrc = thumbnail.src;
    const fullSrc = thumbSrc.replace(sourcePathRegex, targetPath);

    addPrefetchLink(fullSrc);
  });
}