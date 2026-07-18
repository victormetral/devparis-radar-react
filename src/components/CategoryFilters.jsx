import { categories } from "../data/categories.js"

const CategoryFilters = ({
  categorieSelectionnee,
  setCategorieSelectionnee,
  compteCategories,
}) => {
  return (
    <div className="category-filters">
      {categories.map((categorie) => {
        const nombre =
          compteCategories[categorie.label] || 0

        const estActive =
          categorieSelectionnee === categorie.label

        return (
          <button
            key={categorie.label}
            type="button"
            className={
              estActive
                ? "category-button is-active"
                : "category-button"
            }
            aria-pressed={estActive}
            onClick={() =>
              setCategorieSelectionnee(
                categorie.label
              )
            }
          >
            {categorie.label}

            <span className="category-button__count">
              {nombre}
            </span>
          </button>
        )
      })}
    </div>
  )
}

export default CategoryFilters