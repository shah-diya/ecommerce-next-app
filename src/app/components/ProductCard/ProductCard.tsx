import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
      <div className="card product-card h-100 text-center">

        {/* Image Section */}
        <div className="product-image-wrapper">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="product-image"
          />
        </div>

        {/* Content */}
        <div className="card-body d-flex flex-column">
          <h6 className="product-title">
            {product.title.length > 40
              ? product.title.substring(0, 40) + "..."
              : product.title}
          </h6>

          <p className="product-price mb-3">
            $ {product.price}
          </p>

          {/* Push button to bottom */}
          <div className="mt-auto">
            <Link
              href={`/products/${product.id}`}
              className="btn btn-dark w-100"
            >
              View Details
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}