import { getAllProduct } from "@/api/product_request";
import ProductsComponent from "@/components/products";
import ProductLayoutComponent from "@/product_layout";
import { ProductType } from "@/types";

type Props = {
  products: ProductType[];
};

// React Server Component
const GasEquipmentSection = async () => {
  const { products } = await getAllProduct("gaz");

  return (
    <ProductLayoutComponent>
      {products &&
        products.map((product: ProductType) => (
          <ProductsComponent key={product._id} product={product} />
        ))}
    </ProductLayoutComponent>
  );
};

export default GasEquipmentSection;
