import { CategoriesReposity } from "../../repositories/implementations/CategoriesReposity";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesReposity = CategoriesReposity.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesReposity);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export { listCategoriesController };