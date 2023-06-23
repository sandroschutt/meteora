import React from "react";
import styles from "./FormEmail.module.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function Newsletter() {
  return (
    <section className={styles.newsletter}>
      <div className={styles.nl_container}>
        <p>
          Quer receber nossas novidades, promoções exclusivas e 10% OFF na
          primeira compra? Cadastre-se!
        </p>
        <div className={styles.input_field}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button 
                variant="outline-secondary"
                id="button-addon2">
              Button
            </Button>
          </InputGroup>
        </div>
      </div>
    </section>
  );
}
