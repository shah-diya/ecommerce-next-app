export default function AboutUs() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">About ShopZone</h2>

      <p className="text-center mb-5">
        ShopZone is a modern e-commerce platform built to provide quality
        products at the best prices. We focus on simplicity, trust, and a
        smooth shopping experience.
      </p>

      <div className="row text-center">
        <div className="col-md-4 mb-3">
          <div className="border rounded p-4 h-100 shadow">
            <h5>✔ Quality Products</h5>
            <p>
              We carefully select products to ensure quality and reliability.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="border rounded p-4 h-100 shadow">
            <h5>🚚 Fast Delivery</h5>
            <p>
              Quick and safe delivery to your doorstep with trusted partners.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="border rounded p-4 h-100 shadow">
            <h5>💬 24/7 Support</h5>
            <p>
              Our support team is always ready to help you anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}