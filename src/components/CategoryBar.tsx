const categories = [
  "🎓 Education",
  "🏥 Healthcare",
  "🍔 Food",
  "🛒 Shopping",
  "🏨 Hotels",
  "⛽ Fuel",
];

function CategoryBar() {
  return (
    <div className="categories">
      {categories.map((category) => (
        <button key={category}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryBar;