import React from "react";
import styles from "./Product.module.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Product(props) {
  return (
    <Card className={styles.productCard}>
      <Card.Img variant="top" src={props.image} className={styles.cardImage}/>
      <Card.Body className={styles.productData}>
        <Card.Title className={styles.cardTitle}>{props.title}</Card.Title>
        <Card.Text className={styles.cardDescription}>
          {props.description}
        </Card.Text>
        <h4>R${props.price}</h4>
        <Button className={styles.cardButton}>Ver mais</Button>
      </Card.Body>
    </Card>
  );
}
