const CreateCardBtn = (props) => {
return(
    <>
    {/* He quitado disabled del button */}
    <button
    className="form__submit js-submit"
    type="submit"
    disabled={props.isDisabled()}
    onClick={props.handleClickBtn}
  >
    <i className="form__submit--icon far fa-address-card"></i>
    crear tarjeta
  </button>
  {/* <p >{props.dataApi.success === false ? "Por favor, completa todos los campos." : ''}</p> */}
  </>
)
};

export default CreateCardBtn;