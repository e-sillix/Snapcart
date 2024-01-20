import React from "react";
import { useParams } from "react-router-dom";
import all_product from "../../Components/Assets/AllProducts";

const mainsize = 350;
const localsize = 100;
export default function Product() {
  const { productId } = useParams();
  const theProduct = all_product.filter((i) => i.id === parseInt(productId))[0];
  return (
    <div>
      <div>
        <img
          src={theProduct.image}
          alt="product"
          width={mainsize}
          height={mainsize}
        />
      </div>
      <div>{theProduct.name}</div>
      <p>
        Description:
        <br />
        {theProduct.description}
      </p>
      <p>Rs.{theProduct.prices}</p>
      <p>Rs.{theProduct.oldPrices}</p>

      <p>Rating: 4/5</p>
      <button>Add To Cart</button>
      <div>
        <div>
          <img
            src={theProduct.image1}
            alt="product"
            width={localsize}
            height={localsize}
          />
        </div>
        <div>
          <img
            src={theProduct.image2}
            alt="product"
            width={localsize}
            height={localsize}
          />
        </div>
        <div>
          <img
            src={theProduct.image3}
            alt="product"
            width={localsize}
            height={localsize}
          />
        </div>
      </div>
    </div>
  );
}
