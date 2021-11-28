import { CategoriesReposity } from "../../repositories/implementations/CategoriesReposity";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = CategoriesReposity.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController };