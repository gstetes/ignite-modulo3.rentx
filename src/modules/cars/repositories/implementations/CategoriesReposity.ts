import { Category } from "../../entities/Category";
import { ICategoriesReposity, ICreateCategoryDTO } from "../ICategoriesReposity";
import { getRepository, Repository } from 'typeorm';

class CategoriesReposity implements ICategoriesReposity {
  private repository: Repository<Category>;

  private static INSTANCE: CategoriesReposity;

  private constructor() {
    this.repository = getRepository(Category);
  };

  public static getInstance(): CategoriesReposity {
    if (!CategoriesReposity.INSTANCE) {
      CategoriesReposity.INSTANCE = new CategoriesReposity();
    };
    return CategoriesReposity.INSTANCE;
  };

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name
    })

    await this.repository.save(category);
  };

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  };

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name });
    return category;
  };
};

export { CategoriesReposity };