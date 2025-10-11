export function initializeSkillTree(): void {
  document.addEventListener('DOMContentLoaded', () => {

    const elements = {
      titles: document.querySelectorAll('[data-category]'),
      categories: document.querySelectorAll('[data-category-description]'),
    };

    elements.titles.forEach(title => {
      title.addEventListener('click', () => {
        const skillId = title.getAttribute('data-category');

        if (!skillId) return;

        elements.titles.forEach(t => t.classList.remove('active'));
        title.classList.add('active');

        showSkillContent(skillId, elements.categories);
      });
    });
  });
}

// /**
//  * Show the selected skill content and hide others
//  */
function showSkillContent(categoryId: string, elements: NodeListOf<Element>): void {
  elements.forEach(content => {
    // First, mark all non-matching elements as inactive
    const contentDataId = content.getAttribute('data-category-description');

    if (contentDataId !== categoryId) {
      content.classList.remove('active');
    } else {
      setTimeout(() => {
        content.classList.add('active');
      }, 100);
    }
  });
}