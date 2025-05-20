import './functions/header.js';
import { handleSections, handleTooltips, handleViewMore, showFilters, hiddeFilters, hiddenToolTips } from './functions/filters.js';

document.addEventListener('DOMContentLoaded', function() {
  handleSections();
  handleTooltips();
  handleViewMore();
  showFilters();
  hiddeFilters();
  hiddenToolTips();
    
});