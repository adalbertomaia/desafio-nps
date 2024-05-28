import React, { useState, useEffect } from "react";
import { Layout } from "../layouts";
import styles from "../styles/sendForm.module.css";
import "../styles/icons.css";

const sendForm = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = "#FE008A";
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      document.body.style.backgroundColor = "#FFF";
    };
  }, []);

  return (
    <Layout siteTitle="Envio">
      <div className={styles.container}>
        <div className={styles.header}>
          <img src="./images/logo-serasa.svg" alt="logo serasa"></img>
        </div>
        <div className={styles.icon}>
          <i className={isLoading ? styles.hidden : " icon-circle-check"}></i>
        </div>
        <div aria-live="polite">
          {isLoading ? (
            <div className={styles.message}>
              <p className={styles.title}>Aguarde</p>
              <p className={styles.text}>Estamos enviando sua avaliação</p>
            </div>
          ) : (
            <div className={styles.message}>
              <p className={styles.title}>Avaliação Enviada</p>
              <p className={styles.text}>
                Obrigado por avaliar nossos serviços
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default sendForm;
