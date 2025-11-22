export const PROJECT_CATEGORIES = [
    { value: 'all', label: 'All Projects' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'hospitality', label: 'Hospitality' },
    { value: 'cultural', label: 'Cultural' },
  ];
  
  export const getCategoryLabel = (value) => {
    const category = PROJECT_CATEGORIES.find(cat => cat.value === value);
    return category ? category.label : value;
  };