import { Router } from 'express';
import { CategoriesReposity } from '../modules/cars/repositories/CategoriesReposity';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const categoriesRoutes = Router();
const categoriesReposity = new CategoriesReposity;

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  const all = categoriesReposity.list();

  return response.json(all);
});

export { categoriesRoutes };