import React from "react";
import Product from "./Product";
import Title from "./Title";
//import { storeProducts } from "../data";
import { ProductConsumer } from "../context";

const ProductList = () => {
  return (
    // this is padding (top and bottom) for the whole product list
    <div className="py-5">
      <div className="container">
        {/* Imported title component is patched here. */}
        <Title name="Our" title="products" />
        <div className="row">
          <ProductConsumer>
            {valueFromPoductContextProviderOfContextJS => {
              return valueFromPoductContextProviderOfContextJS.products.map(
                product => {
                  return <Product key={product.id} product={product} />;
                  {
                    /* Here, 'product' attribute is a prop which is used in Product.js as 'this.props.product'*/
                  }
                }
              );
            }}
          </ProductConsumer>
        </div>{" "}
        {/* this row is for the product list */}
      </div>
    </div>

    //  <Product />
  );
};

export default ProductList;
