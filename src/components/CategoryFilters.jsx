import { categories } from "../data/categories.js"

const CategoryFilters = ({
  categorieSelectionnee,
  setCategorieSelectionnee,
}) => {
  return (
    <section
      className="category-filters"
      aria-label="Filtres rapides par catégorie"
    >
      {categories.map((categorie) => (
        <button
          key={categorie.label}
          type="button"
          className={
            categorieSelectionnee === categorie.label
              ? "category-button is-active"
              : "category-button"
          }
          onClick={() => setCategorieSelectionnee(categorie.label)}
        >
          {categorie.label}
        </button>
      ))}
    </section>
  )
}

export default CategoryFilters