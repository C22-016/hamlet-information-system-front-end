import { Container, Row, Col } from 'react-bootstrap';
import './LandingPage.css';

const About = () => {
  return (
    <section id="about" className="pt-5">
      <Container>
        <Row>
          <h2 className="mb-5 text-center section-title">
            Tentang Kami
          </h2>
          <Row className="text-center">
            <Col lg={6} md={12} cLassName="about-us">
              <p className="px-2">
                HIS merupakan sebuah solusi bagi lingkungan RT/RW, dengan tujuan
                memberikan Fleksibilitas terhadap masyarakat sekitar dengan
                memberikan solusi berupa Online Base, terhadap Aduan, Kendala
                Lingkungan, kejadian-kejadian Darurat, dan sebagainya.
              </p>
            </Col>
            <Col lg={6} md={12} cLassName="about-us">
              <p className="px-2">
                Hamlet Information System (HIS) adalah sebuah aplikasi berbasis
                web yang ditujukan untuk masyarakat lingkungan RT/RW. Di
                aplikasi ini masyarakat diharapkan bisa mendapat fasilitas
                berupa informasi yang valid dan memberikan laporan berupa
                feedback terkait lingkungan sekitar.
              </p>
            </Col>
          </Row>
        </Row>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          className="svg-about"
          fill="#ccfbf1"
          fill-opacity="1"
          d="M0,224L48,224C96,224,192,224,288,234.7C384,245,480,267,576,261.3C672,256,768,224,864,229.3C960,235,1056,277,1152,272C1248,267,1344,213,1392,186.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        >
        </path>
      </svg>
    </section>
  );
};

export default About;
