import React from "react";
import styles from "./Conveniences.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Union from "./img/Union.png";
import Loop from "./img/Loop.png";
import Flower from "./img/Flower.png";
import { Container } from "bootstrap-4-react/lib/components/layout";

const conveniecesData = [
  {
    img: Union,
    title: "PAGUE PELO PIX",
    description: "Ganhe 5% OFF em pagamentos via PIX",
    alt: "ícone do PIX"
  },
  {
    img: Loop,
    title: "TROCA GRÁTIS",
    description: "Fique livre para trocar em até 30 dias",
    alt: "ícone de loop"
  },
  {
    img: Flower,
    title: "SUSTENTABILIDADE",
    description: "Moda responsável, que respeita o meio ambiente",
    alt: "ícone de flor"
  },
];

function convenienceCard(img, title, description, alt) {
  return (
    <Col className={styles.cols} xs={12} sm={12} md={12} lg={4} xl={4}>
      <Row>
        <Col xs={3} sm={2} md={2} lg={3}>
          <img src={img} alt={alt} />
        </Col>
        <Col xs={8} sm={10} md={10} lg={9}>
          <h4>{title}</h4>
          <p>{description}</p>
        </Col>
      </Row>
    </Col>
  );
}

export default function Conveniences() {
  return (
    <section className={styles.conveniences}>
      <h3>Conheça todas as nossas facilidades</h3>
      <Container>
        <Row className={styles.rows}>
          {conveniecesData.map(data => convenienceCard(data.img, data.title, data.description, data.alt))}
        </Row>
      </Container>
    </section>
  );
}
