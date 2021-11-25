import { Category } from "../model/Category";
import { ICategoriesReposity, ICreateCategoryDTO } from "./ICategoriesReposity";

class PostgresCategoriesRespository implements ICategoriesReposity{
  findByName(name: string): Category {
    console.log(name);
    return null;
  };

  list(): Category[] {
    return null;
  };

  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description);
  };

}

export { PostgresCategoriesRespository };