import "../styles/App.scss";
import logo from "../images/dont-be-undefined-logo.svg";
import logoAdalab from "../images/logo-adalab.png";

function App() {
  return (
    <div id= "root">
      <main className="cards__main--wrapper">
        <header className="header">
          <a href="./index.html">
            <img className="image_header" src={logo} alt="tarjetas" />
          </a>
        </header>
        <section className="card__wrapper">
          <section className="section__cards">
            <div className="card__preview">
              <button
                style={{cursor: "pointer"}}
                className="preview__reset js-reset"
                type="reset"
              >
                <p className="preview__reset--text">Reset</p>
                <i className="far fa-trash-alt preview__reset--icon"></i>
              </button>
              <div className="card__preview--default">
                <div className="preview__text js-borderleft">
                  <h3 className="preview__text--name js-preview-name">
                    Nombre Apellido
                  </h3>
                  <h4 className="preview__text--role js-preview-job">
                    Front-End Developer
                  </h4>
                </div>
                <div className="preview__image js__profile-image"></div>
                <div className="preview__links">
                  <a
                    href="#"
                    className="preview__links--social js-preview-phone js-border"
                    title="Phone"
                    target="_self"
                  >
                    <i className="fas fa-mobile-alt preview__links--icon js-icons"></i>
                  </a>
                  <a
                    href="#"
                    className="preview__links--social js-preview-email js-border"
                    title="Email"
                    target="_self"
                  >
                    <i className="far fa-envelope preview__links--icon js-icons"></i>
                  </a>
                  <a
                    href="#"
                    className="preview__links--social js-preview-linkedin js-border"
                    title="Linkedin"
                    target="_self"
                  >
                    <i className="fab fa-linkedin-in preview__links--icon js-icons"></i>
                  </a>
                  <a
                    href="#"
                    className="preview__links--social js-preview-github js-border"
                    title="GitHub"
                    target="_self"
                  >
                    <i className="fab fa-github-alt preview__links--icon js-icons"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <form action="#" method="get" className="form js-form">
            <fieldset className="form__design">
              <legend className="form__title js-design__title">
                <ul>
                  <i className="form__title--icon icon-light far fa-object-ungroup"></i>
                </ul>
                <h2 className="form__title--text">Diseña</h2>
                <ul>
                  <i className="form__title--chevron icon-medium far fa-chevron-up"></i>
                </ul>
              </legend>
              <div className="form__design--wrapper">
                <label
                  htmlFor="chooseColor"
                  className="form__label form__label--color"
                >
                  Colores
                </label>
                <div className="form__input--wrapper">
                  <div className="form__radio--color--wrapper js-palette">
                    <input
                      className="form__radio js-radio"
                      type="radio"
                      name="chooseColor"
                      id="chooseColor1"
                      value="1"
                      defaultChecked
                      style={{cursor: "pointer"}}
                    />
                    <div className="form__radio--color--palette">
                      <div className="form__radio--color colorA1"></div>
                      <div className="form__radio--color colorB1"></div>
                      <div className="form__radio--color colorC1"></div>
                    </div>
                  </div>
                  <div className="form__radio--color--wrapper js-palette">
                    <input
                      className="form__radio js-radio"
                      type="radio"
                      name="chooseColor"
                      id="chooseColor2"
                      value="2"
                      style={{cursor: "pointer"}}
                    />
                    <div className="form__radio--color--palette">
                      <div className="form__radio--color colorA2"></div>
                      <div className="form__radio--color colorB2"></div>
                      <div className="form__radio--color colorC2"></div>
                    </div>
                  </div>
                  <div className="form__radio--color--wrapper js-palette">
                    <input
                      className="form__radio js-radio"
                      type="radio"
                      name="chooseColor"
                      id="chooseColor3"
                      value="3"
                      style={{cursor: "pointer"}}
                    />
                    <div className="form__radio--color--palette">
                      <div className="form__radio--color colorA3"></div>
                      <div className="form__radio--color colorB3"></div>
                      <div className="form__radio--color colorC3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="form__fill collapsed">
              <legend className="form__title js-fill__title">
                <i className="form__title--icon far fa-keyboard"></i>
                <h2 className="form__title--text">Rellena</h2>
                <i
                  style={{cursor: "pointer"}}
                  className="form__title--chevron icon-medium far fa-chevron-down"
                ></i>
              </legend>
              <div className="form__fill--wrapper">
                <label htmlFor="fullname" className="form__label">
                  Nombre Completo<span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ej: Mrs. Chanandler Bong"
                  pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}"
                  className="form__input js-name js-input"
                  spellCheck="false"
                  required
                />
                <label htmlFor="job" className="form__label">
                  Puesto<span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="job"
                  name="job"
                  placeholder="Ej: Front-end turkey"
                  pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}"
                  className="form__input js-job js-input"
                  spellCheck="false"
                  required
                />
                <label htmlFor="profilepicture" className="form__label">
                  Imagen de perfil<span className="required">*</span>
                </label>
                <div className="form__photosection">
                  <label
                    htmlFor="photo"
                    className="form__photobutton js__profile-trigger"
                  >
                    Añadir imagen
                  </label>
                  <input
                    className="form__photoinput js__profile-upload-btn js-photo hidden"
                    type="file"
                    name="photo"
                    id="photo"
                    required
                  />
                  <span className="form__photothumb js__profile-preview"></span>
                </div>
                <label htmlFor="email" className="form__label">
                  Email<span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ej: sally-hill@gmail.com"
                  className="form__input js-email js-input"
                  spellCheck="false"
                  required
                />
                <label htmlFor="phone" className="form__label">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Ej: 555-55-55-55"
                  className="form__input js-phone js-input"
                  spellCheck="false"
                />
                <label htmlFor="linkedin" className="form__label">
                  Linkedin<span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="linkedin"
                  name="linkedin"
                  placeholder="Ej: linkedin.com/in/sally.hill"
                  className="form__input js-linkedin js-input"
                  spellCheck="false"
                  required
                />
                <label htmlFor="github" className="form__label">
                  Github<span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="github"
                  name="github"
                  placeholder="Ej: @sally-hill"
                  className="form__input js-github js-input"
                  spellCheck="false"
                  required
                />
              </div>
            </fieldset>
            <fieldset className="form__share collapsed">
              <legend className="form__title js-share__title">
                <i className="form__title--icon fas fa-share-alt"></i>
                <h2 className="form__title--text">Comparte</h2>
                <i
                  style={{cursor: "pointer"}}
                  className="form__title--chevron icon-medium far fa-chevron-down"
                ></i>
              </legend>
              <div className="form__share--wrapper">
                <button
                  style={{cursor: "pointer"}}
                  className="form__submit js-submit"
                  type="submit"
                  disabled
                >
                  <i className="form__submit--icon far fa-address-card"></i>
                  crear tarjeta
                </button>
                <p className="js-text-error text__error"></p>
                <div className="js-link-card form__card"></div>
                <div className="js-twitter form__twitter"></div>
              </div>
            </fieldset>
          </form>
        </section>
        <footer className="footer">
          <div className="footer__container">
            <section className="footer__copy">
              u<span className="required">·</span>n
              <span className="required">·</span>d
              <span className="required">·</span>e
              <span className="required">·</span>f
              <span className="required">·</span>i
              <span className="required">·</span>n
              <span className="required">·</span>e
              <span className="required">·</span>d &copy; 2021
            </section>
          </div>
          <section className="footer__logo">
            <a href="https://adalab.es/" target="_blank">
              <img className="img" src={logoAdalab} alt="Logo Adalab" />
            </a>
          </section>
        </footer>
      </main>
    </div>
  );
}

export default App;
