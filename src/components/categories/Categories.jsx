import { useState } from 'react';
import './Categories.css';

const categories = [
  "All",
  "Music",
  "Gaming",
  "Mixes",
  "Live",
  "Comedy",
  "Programing",
  "News",
  "Sports",
  "Learning",
  "Fashion",
  "Beauty",
  "Podcasts",
];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="categories-bar">
      {categories.map((category, index) => (
        <span
          key={index}
          className={`category-chip ${activeCategory === category ? 'active' : ''}`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </span>
      ))}
    </div>
  );
};

export default Categories;
