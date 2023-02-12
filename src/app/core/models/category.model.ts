import {AccessLevel, ActionModel} from "./action.model";

export interface CategoryModel {
  id: string,
  name: string,
  productId?: string,
  children: CategoryModel[]

  // local variables
  opened: boolean,
  actions?: ActionModel[],
  selectedAccess: AccessLevel
}
