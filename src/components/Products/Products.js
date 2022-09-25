import { Fragment } from "react";
import Categories from "../Categories/Categories";
import ProductItem from './ProductItem/ProductItem';
const Products = () => {
  return (
    <Fragment>
      <Categories />
      <ProductItem></ProductItem>
    </Fragment>
  );
};
export default Products;