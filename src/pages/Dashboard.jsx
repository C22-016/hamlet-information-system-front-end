import React from 'react';
import Container from 'react-bootstrap/Container';
import Layout from './Layout';

const Dashboard = () => {
  return (
    <Layout>
      <Container className="container-dashboard">
        <h1>Hallo, ini adalah halaman Dashboard</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis cupiditate rerum minima harum, nesciunt, molestiae corrupti magni repudiandae totam, similique adipisci architecto voluptates impedit nostrum iusto libero consequuntur
          perspiciatis ea inventore accusantium fugiat. Explicabo nam temporibus, ex dicta qui sunt pariatur repellendus reprehenderit nostrum voluptatum sit minus amet, doloribus, dolor repudiandae atque ipsum voluptatibus consequatur voluptas eum
          ducimus. Ad aliquam nesciunt ea inventore fugiat totam aliquid cum, quos esse sequi illum similique itaque corrupti facilis officia ex nostrum sunt. Distinctio quo nulla sequi consectetur natus neque quam sit placeat tempora inventore
          magni, doloribus error repellat incidunt ad nobis suscipit commodi!
        </p>
      </Container>
    </Layout>
  );
};

export default Dashboard;
