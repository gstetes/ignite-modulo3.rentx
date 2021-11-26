import { Category } from "../../model/Category";
import { ICategoriesReposity } from "../../repositories/ICategoriesReposity";

class ListCategoriesUseCase {
  constructor(private categoriesReposity: ICategoriesReposity) {
  };

  execute(): Category[] {
    const categories = this.categoriesReposity.list();

    return categories;
  };
};

export { ListCategoriesUseCase };