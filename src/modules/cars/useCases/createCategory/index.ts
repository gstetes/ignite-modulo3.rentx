import { CategoriesReposity } from "../../repositories/implementations/CategoriesReposity";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default (): CreateCategoryController => {
  const categoriesRepository = new CategoriesReposity();

  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

  const createCategoryController = new CreateCategoryController(createCategoryUseCase);

  return createCategoryController;
};