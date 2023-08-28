import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Product from "./Product";
import { fetchProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="ui grid container">
      <Product />
    </div>
  );
};
export default ProductListing;
