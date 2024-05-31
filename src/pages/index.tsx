import React, { useState, useEffect } from "react";
import { Layout } from "../layouts";
import styles from "../styles/index.module.css";
import RadioGroup from "../components/radioGroup";
import { useRouter } from "next/router";

const IndexPage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [nameError, setNameError] = useState(false);

  const handleSubmit = () => {
    router.push("/sendForm");
  };

  let isNameValid = name.trim().length >= 3;
  useEffect(() => {
    isNameValid = name.trim().length >= 3;
    if (isNameValid) {
      setNameError(false);
    }
  }, [name]);

  const handleNameBlur = () => {
    setNameError(!isNameValid);
  };
  
  const isButtonDisabled = () => {
    return (!isNameValid || rating.trim() === "");
  };

  const radioOptions = [
    { value: "1", label: "1 estrela" },
    { value: "2", label: "2 estrelas" },
    { value: "3", label: "3 estrelas" },
    { value: "4", label: "4 estrelas" },
    { value: "5", label: "5 estrelas" },
  ]

  return (
    <Layout siteTitle="Avaliação">
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            src="./images/logo-serasa.svg"
            alt="logo serasa"
            className={styles["header__image"]}
          ></img>
        </div>
        <div className={styles.content}>
          <h1 className={styles["content__title"]}>
            Conte para gente quão satisfeito você está com os nossos serviços.
          </h1>
          <p className={styles["content__text"]} aria-hidden="true">
            Avalie de 1 à 5 estrelas
          </p>
          <RadioGroup
            options={radioOptions}
            legend="Avalie de 1 à 5 estrelas"
            onChange={(value) => setRating(value)}
          />
          <div>
            <label className={styles.form__label}>
              <strong>Nome</strong>
              <input
                className={`${styles.form__input} ${nameError ? styles["form__input--error"] : ""}`}
                type="text"
                name="nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={handleNameBlur}
                aria-describedby={nameError ? "nameError" : undefined}
              ></input>{" "}
            </label>
            {nameError && <span className={styles['name--error']} id="nameError">Nome inválido</span>}
            <label className={styles.form__label}>
              <strong>Comentário (opcional)</strong>
              <textarea
                className={styles.form__input}
                name="comentario"
                rows={7}
              ></textarea>
            </label>
          </div>
          <button
            className={`${styles.button} ${
              isButtonDisabled() ? styles["button--disabled"] : ""
            }`}
            onClick={handleSubmit}
            disabled={isButtonDisabled()}
          >
            Enviar
          </button>{" "}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
