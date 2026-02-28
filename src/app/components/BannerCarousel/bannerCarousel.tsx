"use client";

import Link from "next/link";

export default function Banner() {
  return (
    <div
      id="homeCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="2500"
    >
      <div className="carousel-inner">

        {/* SLIDE 1 */}
        <div className="carousel-item active">
          <div
            style={{
              minHeight: "350px",
              background: "linear-gradient(135deg, #0f172a, #1e293b)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "40px 20px",
            }}
          >
            <div>
              <h1 className="fw-bold mb-2">Welcome to ShopZone</h1>
              <p className="mb-3 opacity-75">
                Smart shopping starts here. Best deals, every day.
              </p>
              <Link href="/products" className="btn btn-light px-4 fw-semibold">
                Shop Now
              </Link>
            </div>
          </div>
        </div>

        {/* SLIDE 2 */}
        <div className="carousel-item">
          <div
            style={{
              minHeight: "350px",
              background: "linear-gradient(135deg, #1e40af, #3b82f6)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "40px 20px",
            }}
          >
            <div>
              <h1 className="fw-bold mb-2">Electronics Mega Sale</h1>
              <p className="mb-3 opacity-75">
                Up to 50% OFF on top gadgets
              </p>
              <Link
                href="/products?category=electronics"
                className="btn btn-outline-light px-4 fw-semibold"
              >
                Explore Deals
              </Link>
            </div>
          </div>
        </div>

        {/* SLIDE 3 */}
        <div className="carousel-item">
          <div
            style={{
              minHeight: "350px",
              background: "linear-gradient(135deg, #4c1d95, #7c3aed)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "40px 20px",
            }}
          >
            <div>
              <h1 className="fw-bold mb-2">Fashion & Lifestyle</h1>
              <p className="mb-3 opacity-75">
                Trendy styles for women
              </p>
              <Link
                href="/products?category=women's clothing"
                className="btn btn-light px-4 fw-semibold"
              >
                View Collection
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* CONTROLS */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#homeCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#homeCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}