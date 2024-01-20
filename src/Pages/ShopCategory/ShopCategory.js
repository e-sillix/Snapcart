import React, { useContext } from "react";
import { productContext } from "../../Context/Context";
import {
  menbanner,
  womenbanner,
  kidbanner,
  watchbanner,
} from "../../Components/Assets/AllProducts";
import ProductCard from "../../Components/ProductCard/ProductCard";

export default function ShopCategory({ category }) {
  const { all_product } = useContext(productContext);

  const getBanner = () => {
    switch (category) {
      case "men":
        return menbanner;
      case "women":
        return womenbanner;
      case "kids":
        return kidbanner;
      case "watch":
        return watchbanner;
      default:
        return "";
    }
  };

  return (
    <div>
      <div>For {category}</div>

      {/* banner */}
      <img src={getBanner()} alt={getBanner()} width="80%" height="200px" />

      <div>
        {/* listing products */}

        {all_product.map((i) => {
          if (i.category === category) return <ProductCard {...i} key={i.id} />;
          else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
