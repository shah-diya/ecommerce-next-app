import { getProductById } from "../../services/productServices";
import AddToCartButton from "../../components/AddToCartButton/AddToCartButton";

interface ProductDetailProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetail(
  props: ProductDetailProps
) {
  // unwrap params (IMPORTANT in Next 15)
  const { id } = await props.params;

  const product = await getProductById(id);

  return (
    <div className="container my-4 my-md-5">
      <div className="card border-0 shadow-sm rounded-4 p-3 p-md-4">
        <div className="row align-items-center g-4">

          {/* Product Image */}
          <div className="col-12 col-md-6">
            <div className="bg-light rounded-4 d-flex justify-content-center align-items-center p-3 p-md-5">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="img-fluid"
                style={{ maxHeight: "350px", objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="col-12 col-md-6 text-center text-md-start">
            <h1 className="fw-semibold mb-3 fs-4 fs-md-3">
              {product.title}
            </h1>

            <h2 className="text-success fw-bold mb-3">
              $ {product.price}
            </h2>

            <p className="text-muted mb-2">
              ⭐ {product.rating?.rate} | Category: {product.category}
            </p>

            <p className="text-secondary mb-4">
              {product.description}
            </p>

           <div className="mt-4 d-flex gap-3">
              <button className="btn btn-warning px-4 py-2 fw-semibold">
                Buy Now
              </button>

              <AddToCartButton
                product={{
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  thumbnail: product.thumbnail,
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}