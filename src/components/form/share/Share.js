const Share = () => {
  return (
    <fieldset className="form__share">
      {/* linea 225 clase collapsed*/}
      <legend className="form__title js-share__title">
        <i className="form__title--icon fas fa-share-alt"></i>
        <h2 className="form__title--text">Comparte</h2>
        <i className="form__title--chevron icon-medium far fa-chevron-down"></i>
      </legend>
      <div className="form__share--wrapper">
        <button className="form__submit js-submit" type="submit" disabled>
          <i className="form__submit--icon far fa-address-card"></i>
          crear tarjeta
        </button>
        <p className="js-text-error text__error"></p>
        <div className="js-link-card form__card"></div>
        <div className="js-twitter form__twitter"></div>
      </div>
    </fieldset>
  );
};
export default Share;
