import CreateCardBtn from "./Button";
import CreateCard from "./CreatedCard";

const Share = (props) => {
  const renderUrl = () => {
    if (!props.isDisabled() && props.shareUrl !== "") {
      return <CreateCard shareUrl={props.shareUrl} />;
    }
  };
  // const handleClickBtn = (ev) => {
  //   ev.preventDefault();
  //   props.handleApi(props.data, props.cardUrl);
  // };
  const renderError = () => {
    if (props.isDisabled()) {
      return <p>Rellena todos los campos</p>;
    }
  };
  return (
    <fieldset className="form__share">
      {/* linea 225 clase collapsed*/}
      <legend className="form__title js-share__title">
        <i className="form__title--icon fas fa-share-alt"></i>
        <h2 className="form__title--text">Comparte</h2>
        <i className="form__title--chevron icon-medium far fa-chevron-down"></i>
      </legend>
      <div className="form__share--wrapper">
        {renderUrl()}
        {renderError()}


        <CreateCardBtn
          data={props.data}
          isDisabled={props.isDisabled}
          handleClickShareBtn={props.handleClickShareBtn}

          //handleApi={props.handleApi}
          // apiData={props.apiData}
        />

        {/* <p className="js-text-error text__error"></p> */}
        {/* <div className="js-link-card form__card">

          <CreateCard shareUrl={props.shareUrl} />

         
        </div> */}
        {/* <div className="js-twitter form__twitter">
          <a
            alt="Comparte tu tarjeta en twitter"
            title="Comparte tu tarjeta en twitter"
            href={`https://twitter.com/intent/tweet?text=%C2%A1Mirad%20qué%20tarjeta%20tan%20chula%21&url=${props.cardUrl}`}
            className="share__result--btn js-twitter"
            target="_blank"
            rel="noreferrer"
          >
            Compartir en twitter
          </a>
        </div> */}
      </div>
    </fieldset>
  );
};
export default Share;
