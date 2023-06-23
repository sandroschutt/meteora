import React from "react";
import styles from "./SearchCtegory.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import camiseta from "./img/camiseta.png";
import bolsas from "./img/bolsas.png";
import calcados from "./img/calcados.png";
import calcas from "./img/calcas.png";
import casacos from "./img/casacos.png";
import oculos from "./img/oculos.png";

export default function SearchCategory() {
  return (
    <section className={styles.categories}>
      <Container>
        <Row className="text-center gx-5" style={{marginLeft: "0", marginRight: "0"}}>
          <h3>Busque por categoria:</h3>
        </Row>
        <Row className="text-center">
            <Col xs={6} md={4} lg={2} className={styles.col} id={styles.category_1} >
                <img src={camiseta} className={styles.image} width="100%" alt="Categorias - camisetas"/>
                <div className={styles.categoryStrip}>
                    <span>Camisetas</span>
                </div>
            </Col>
            <Col xs={6} md={4} lg={2} className={styles.col} id={styles.category_2}>
                <img src={bolsas} className={styles.image} width="100%" alt="Categorias - bolsas"/>
                <div className={styles.categoryStrip}>
                    <span>Bolsas</span>
                </div>
            </Col>
            <Col xs={6} md={4} lg={2} className={styles.col} id={styles.category_3}>
                <img src={calcados} className={styles.image} width="100%" alt="Categorias - calcados"/>
                <div className={styles.categoryStrip}>
                    <span>Calçados</span>
                </div>
            </Col>
            <Col xs={6} md={4} lg={2} className={styles.col} id={styles.category_4}>
                <img src={calcas} className={styles.image} width="100%" alt="Categorias - calcas"/>
                <div className={styles.categoryStrip}>
                    <span>Calças</span>
                </div>
            </Col>
            <Col xs={6} md={4} lg={2} className={styles.col} id={styles.category_5}>
                <img src={casacos} className={styles.image} width="100%" alt="Categorias - casacos"/>
                <div className={styles.categoryStrip}>
                    <span>Casacos</span>
                </div>
            </Col>
            <Col xs={6} md={4} lg={2} className={styles.col} id={styles.category_6}>
                <img src={oculos} className={styles.image} width="100%" alt="Categorias - oculos"/>
                <div className={styles.categoryStrip}>
                    <span>Óculos</span>
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  );
}
