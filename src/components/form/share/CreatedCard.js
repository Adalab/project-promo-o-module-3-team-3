const CreateCard = (props) => {
  return (
    <>
      <div className="js-link-card form__card">
        <p className="share__result--title">La tarjeta ha sido creada:</p>
        <a
          href={props.shareUrl}
          className="share__result--link js_share_link"
          target="_blank"
          rel="noreferrer"
        >
          {props.shareUrl}
        </a>
      </div>
      
      <div className="js-twitter form__twitter">
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
      </div>
    </>
  );
};

export default CreateCard;
