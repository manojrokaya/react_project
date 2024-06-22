import React from 'react'

function CategorieSelector({selectedCategory, onCategoyChange})  
{
    const categories =[
        {value :'business', label : 'Business'},
        {value :'entertainment', label : 'Entertainment'},
        {value :'general', label : 'Geneal'},
        {value :'health', label : 'Health'},
        {value :'scince', label : 'Science'},
        {value :'tecnology', label : 'Techonology'},
        {value :'sports', label : 'Sports'},
    ];
    return (
      <div className="btn-group mb-3" role="group">
        {categories.map(category => (
            <button key={category.value} type="button" className={`btn btn-outline-primary ${selectedCategory === category.value ? 'active' : ''}`}
              onClick={() => onCategoyChange(category.value)}>
                {category.label}
            </button>
        ))}
      </div>
    )
}

export default CategorieSelector;
