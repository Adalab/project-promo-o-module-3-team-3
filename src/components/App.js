import "../styles/App.scss";

import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./form/Form";

function App() {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const [data, setData] = useState({
    name: "",
    job: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    photo: "",
    palette: "1",
  });
  {
    /* Metemos en una constante el input sobre el que está actuando la usuaria con el ev.currentTarget.name. Llamamos a esa constante para cambiar el valor de la propiedad del objeto data */
  }
  const handleInput = (name, value) => {
    const inputChanged = name;
    setData({
      ...data,
      [inputChanged]: value,
    });
    
  };
  {
    /* Al hacer click en el reset, llamamos a handleReset que vacía todas las propiedades del objeto */
  }
  const handleReset = () => {
    setData({
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      photo: "",
      palette: "1",
    });
  };

  // const handleClick = (ev) =>{
  //   const clickButton = ev.currentTarget;

  //   // if (clickButton === )
  // }

  return (
    <div>
      <main className="cards__main--wrapper">
        <Header />

        <section className="card__wrapper">
          <section className="section__cards">
            <div className="card__preview">
              <button
                className="preview__reset js-reset"
                type="reset"
                onClick={handleReset}
              >
                <p className="preview__reset--text">Reset</p>
                <i className="far fa-trash-alt preview__reset--icon"></i>
              </button>
              <div className="card__preview--default">
                <div
                  className={`preview__text js-borderleft border-text${data.palette}`}
                >
                  <h3
                    className={`preview__text--name js-preview-name text${data.palette}`}
                  >
                    {data.name || "Nombre Apellido"}
                  </h3>
                  <h4 className="preview__text--role js-preview-job">
                    {data.job || "Front-End Developer"}
                  </h4>
                </div>
                <div className="preview__image js__profile-image"></div>
                <div className="preview__links">
                  <a
                    href={data.phone || "#"}
                    className={`preview__links--social js-preview-phone  js-border border-icon${data.palette}`}
                    title={data.phone ? `Phone: ${data.phone}` : `Phone`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className={`fas fa-mobile-alt preview__links--icon js-icons icon${data.palette}`}
                    ></i>
                  </a>
                  <a
                    href={data.email ? `mailto:${data.email}` : "#"}
                    className={`preview__links--social js-preview-email js-border border-icon${data.palette}`}
                    title={data.email ? `Email: ${data.email}` : `Email`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className={`far fa-envelope preview__links--icon js-icons icon${data.palette}`}
                    ></i>
                  </a>
                  <a
                    href={
                      data.linkedin
                        ? `https://www.linkedin.com/in/${data.linkedin}`
                        : "#"
                    }
                    className={`preview__links--social js-preview-linkedin js-border border-icon${data.palette}`}
                    title={
                      data.linkedin ? `Linkedin: ${data.linkedin}` : `Linkedin`
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className={`fab fa-linkedin-in preview__links--icon js-icons icon${data.palette}`}
                    ></i>
                  </a>
                  <a
                    href={
                      data.github ? `https://github.com/${data.github}` : "#"
                    }
                    className={`preview__links--social js-preview-github js-border border-icon${data.palette}`}
                    title={data.github ? `Github: ${data.github}` : `Github`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className={`fab fa-github-alt preview__links--icon js-icons icon${data.palette}`}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <Form data={data} handleInput={handleInput}/>
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
