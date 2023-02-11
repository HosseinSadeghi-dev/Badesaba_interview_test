export interface CategoryModel {
  id: string,
  name: string,
  productId?: string,
  children: CategoryModel[]
}
