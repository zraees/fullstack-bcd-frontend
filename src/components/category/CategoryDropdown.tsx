import { useEffect, useState } from "react";
import { ICategory, ICategoryProp } from "../../types/types";
import LookupService from "../../services/lookup-service";

const CategoryDropdown: React.FC<ICategoryProp> = ({ value, onChange }) => {
    const INITIAL: ICategory[] = [];
  const [categories, setCategories] = useState(INITIAL);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res: ICategory[] = await LookupService.getCategories();
        setCategories(Array.isArray(res) ? res : INITIAL);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <select
        className="form-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        id="categoryId"
        required
      >
        <option value="0">Select Category</option>
        {categories.map((category) => (
          <option key={category.categoryId} value={category.categoryId}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDropdown;
