import { CategoriesReposity } from "../repositories/CategoriesReposity";

interface IRequest {
  name: string;
  description: string;
};

class CreateCategoryService {
  constructor(private categoriesReposity: CategoriesReposity) {
  };

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesReposity.findByName(name);

    if(categoryAlreadyExists) {
      throw new Error("Category already exists!");
    };
    
    this.categoriesReposity.create({ name, description });
  };
};

export { CreateCategoryService };