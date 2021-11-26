import { ICategoriesReposity } from "../../repositories/ICategoriesReposity";

interface IRequest {
  name: string;
  description: string;
};

class CreateCategoryUseCase {
  constructor(private categoriesReposity: ICategoriesReposity) {
  };

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesReposity.findByName(name);

    if(categoryAlreadyExists) {
      throw new Error("Category already exists!");
    };
    
    this.categoriesReposity.create({ name, description });
  };
};

export { CreateCategoryUseCase };