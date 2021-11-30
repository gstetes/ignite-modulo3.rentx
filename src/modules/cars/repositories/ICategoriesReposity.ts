import { Category } from "../entities/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
};

interface ICategoriesReposity {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description}: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesReposity, ICreateCategoryDTO };