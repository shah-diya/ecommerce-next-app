export const dynamic = "force-dynamic";
import { getAllProducts } from "../services/productServices";
import ProductCard from "../components/ProductCard/ProductCard";

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <div className="container my-5">

      <h1 className="text-center fw-semibold mb-5">
        Products
      </h1>

      <div className="row">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}