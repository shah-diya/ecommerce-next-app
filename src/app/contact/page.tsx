export default function ContactUs() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-2">Contact Us</h2>
      <p className="text-center text-muted mb-4">
        Have questions or need help? We’re here to support you.
      </p>

      <div className="row g-4">
        {/* LEFT INFO */}
        <div className="col-md-5">
          <div className="border rounded p-4 shadow-sm h-100">
            <h5 className="mb-4">Get in Touch</h5>

            <div className="d-flex align-items-start mb-3">
              <span className="me-3 fs-5">📧</span>
              <div>
                <strong>Email</strong>
                <div className="text-muted">support@shopzone.com</div>
              </div>
            </div>

            <div className="d-flex align-items-start mb-3">
              <span className="me-3 fs-5">📞</span>
              <div>
                <strong>Phone</strong>
                <div className="text-muted">+91 98765 43210</div>
              </div>
            </div>

            <div className="d-flex align-items-start mb-3">
              <span className="me-3 fs-5">📍</span>
              <div>
                <strong>Address</strong>
                <div className="text-muted">Kannur, Kerala, India</div>
              </div>
            </div>

            <p className="text-muted mt-3 mb-0">
              We usually respond within 24 hours.
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="col-md-7">
          <div className="border rounded p-4 shadow-sm">
            <form>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows={4}
                  placeholder="Write your message..."
                />
              </div>

              <button type="submit" className="btn btn-dark px-4 py-2">
                📩 Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}