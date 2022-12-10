import { Container, Row, Col } from 'react-bootstrap';
import './LandingPage.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  FiturEvent,
  FiturLaporan,
  FiturPengumuman,
  FiturPesan,
} from '../../materials';

const Features = () => {
  return (
    <section id="features" className="pt-4">
      <Container>
        <h2 className="section-title text-center pb-4">Fitur</h2>
        <Row>
          <Col lg={3} md={6} sm={12} className="p-2">
            <div className="card text-center shadow-lg">
              <div className="card-header">Pengumuman</div>
              <div className="card-body">
                <LazyLoadImage
                  src={FiturPengumuman}
                  className="card-img-top "
                  alt="Fitur Pengumuman"
                />
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} className="p-2">
            <div className="card text-center shadow-lg">
              <div className="card-header">Pesan</div>
              <div className="card-body">
                <LazyLoadImage
                  src={FiturPesan}
                  className="card-img-top "
                  alt="Fitur Pesan"
                />
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} className="p-2">
            <div className="card text-center shadow-lg">
              <div className="card-header">Laporan</div>
              <div className="card-body">
                <LazyLoadImage
                  src={FiturLaporan}
                  className="card-img-top "
                  alt="Fitur Laporan"
                />
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} className="p-2">
            <div className="card text-center shadow-lg">
              <div className="card-header">Event</div>
              <div className="card-body">
                <LazyLoadImage
                  src={FiturEvent}
                  className="card-img-top"
                  alt="Fitur Event"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          className="svg-features"
          fill="#ffffff"
          fill-opacity="1"
          d="M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,224C672,245,768,267,864,240C960,213,1056,139,1152,128C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        >
        </path>
      </svg>
    </section>
  );
};

export default Features;
