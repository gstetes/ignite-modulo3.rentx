import { ICategoriesReposity } from "../../repositories/ICategoriesReposity";

interface IRequest {
  name: string;
  description: string;
};

class CreateCategoryUseCase {
  constructor(private categoriesReposity: ICategoriesReposity) {
  };

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesReposity.findByName(name);

    if(categoryAlreadyExists) {
      throw new Error("Category already exists!");
    };
    
    this.categoriesReposity.create({ name, description });
  };
};

export { CreateCategoryUseCase };