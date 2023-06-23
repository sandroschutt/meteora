import React from "react";
import styles from "./PopularProducts.module.scss";
import Product from "../Product";
import card_camiseta from "./img/card_camiseta.png";
import card_calca from "./img/card_calca.png";
import card_tenis from "./img/card_tenis.png";
import card_jaqueta_jeans from "./img/card_jaqueta_jeans.png";
import card_oculos from "./img/card_oculos.png";
import card_bolsa from "./img/card_bolsa.png";
import { Col, Container, Row } from "bootstrap-4-react/lib/components/layout";

const cards = [
  {
    image: card_camiseta,
    title: "Camiseta Conforto",
    description:
      "Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.",
    price: "70,00",
  },
  {
    image: card_calca,
    title: "Calça Alfaiataria",
    description:
      "Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!",
    price: "180,00",
  },
  {
    image: card_tenis,
    title: "Tênis Chunky",
    description:
      "Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.",
    price: "250,00",
  },
  {
    image: card_jaqueta_jeans,
    title: "Jaqueta Jeans",
    description:
      "Modelo unissex oversized com gola de camurça. Atemporal e autêntica!",
    price: "150,00",
  },
  {
    image: card_oculos,
    title: "Óculos Redondo",
    description:
      "Armação metálica em grafite com lentes arredondadas. Sem erro!",
    price: "120,00",
  },
  {
    image: card_bolsa,
    title: "Bolsa coringa",
    description:
      "Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!",
    price: "120,00",
  },
];

function createCard(card = Object.JSON) {
  return (
    <Col xs={12} sm={12} md={6} lg={4} xl={4}>
      <Product
        image={card.image}
        title={card.title}
        description={card.description}
        price={card.price}
      />
    </Col>
  );
}

export default function PopularProducts() {
  return (
    <section className={styles.popular}>
      <h3>Produtos que estão bombando!</h3>
      <Container className={styles.pp_container}>
        <Row className={styles.pp_row}>{cards.map((card) => createCard(card))}</Row>
      </Container>
    </section>
  );
}
