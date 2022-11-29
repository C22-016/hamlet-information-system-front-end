import {
  Container, Row, Col, Button, Form,
} from 'react-bootstrap';
import './LandingPage.css';

const Contact = () => {
  return (
    <section id="contact" className="pt-4">
      <Container>
        <h2 className="section-title text-center pb-4">Kontak Kami</h2>
        <Row className="pt-4">
          <Col md={6} lg={8} className=" mb-5">
            <div
              className="alert alert-success alert-dismissible fade show d-none alert-message text-center fw-semibold"
              role="alert"
            >
              Pesan kamu sudah kami terima!
              <Button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
              </Button>
            </div>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label for="name" className="contact-us">
                  Nama
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan nama anda..."
                  className="form-control border-input border-opacity-25"
                  id="name"
                  aria-describedby="name"
                  name="name"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label for="email" className="contact-us">
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  className="form-control border-input border-opacity-25"
                  id="email"
                  aria-describedby="email"
                  name="email"
                  placeholder="Masukkan email anda..."
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label for="message" className="contact-us">
                  Pesan
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="border-input border-opacity-25"
                  id="message"
                  name="message"
                  placeholder="Masukkan pesan anda..."
                />
              </Form.Group>

              <Button type="submit" className="btn btn-form btn-send">
                <i className="bi bi-envelope"></i> Kirim
              </Button>

              <Button
                className="btn btn-loading btn-form d-none"
                type="button"
                disabled
              >
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                >
                </span>
                Mengirim...
              </Button>
            </Form>
          </Col>

          <Col lg={4} md={6} className="d-block">
            <div className="contact-image">
              <img
                src="./images/kontak-kami.svg"
                class="d-block w-100 img-fluid vector-about d-none d-md-block"
                alt="Gambar Kontak Kami"
              />
              <div className="d-flex">
                <i className="bi bi-geo-alt"></i>
                <p className="fw-semibold ps-2 contact-us">
                  Jakarta, Indonesia
                </p>
              </div>
              <div className="d-flex">
                <i className="bi bi-telephone"></i>
                <p className="fw-semibold ps-2 contact-us">+62xxxxxxxxx</p>
              </div>
              <div className="d-flex">
                <i className="bi bi-envelope"></i>
                <p className="fw-semibold ps-2 contact-us">hamlet@gmail.com</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          className="svg-footer"
          fill="#00aa95"
          fill-opacity="1"
          d="M0,160L48,165.3C96,171,192,181,288,192C384,203,480,213,576,197.3C672,181,768,139,864,138.7C960,139,1056,181,1152,192C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        >
        </path>
      </svg>
    </section>
  );
};

export default Contact;
