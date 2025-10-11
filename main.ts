// This is the main entry point for Vite
import './scripts/scripts.ts';
import './styles.scss'; 
import { initializeSkillTree } from './skill-tree';
import { initializePortfolio } from './portfolio-slide';

initializePortfolio();
initializeSkillTree();