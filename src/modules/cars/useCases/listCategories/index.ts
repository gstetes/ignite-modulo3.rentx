import { CategoriesReposity } from "../../repositories/CategoriesReposity";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesReposity = new CategoriesReposity();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesReposity);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export { listCategoriesController };