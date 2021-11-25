import { Router } from 'express';
import { CategoriesReposity } from '../repositories/CategoriesReposity';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesReposity = new CategoriesReposity;

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesReposity);

  createCategoryService.execute({ name, description });

  return response.status(201)
    .send();
});

categoriesRoutes.get('/', (request, response) => {
  const all = categoriesReposity.list();

  return response.json(all);
});

export { categoriesRoutes };