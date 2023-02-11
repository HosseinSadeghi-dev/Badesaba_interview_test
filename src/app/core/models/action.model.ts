import {ProductModel} from "./product.model";

export interface ActionModel {
  _id: string,
  product: ProductModel,
  name: string,
  category: string,
  level: AccessLevel
}

export enum AccessLevel {
  publish = 100,
  edit = 200,
  read = 300,
}
