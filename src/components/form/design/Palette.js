const Palette = (props) => {
	return (
		<div className="form__radio--color--wrapper js-palette">
			<input
				className="form__radio js-radio"
				type="radio"
				name="palette"
				id={"chooseColor" + props.paletteColor}
				value={props.paletteColor}
				// onChange={handleInput}
				//ponemos defaultchecked par que no salga el warning, comprobar si desaparece dejando solo 'checked' al poner la función Onchange.
				defaultChecked={props.data.palette === "1"}
			/>
			<div className="form__radio--color--palette">
				<div className={"form__radio--color colorA" + props.paletteColor}></div>
				<div className={"form__radio--color colorB" + props.paletteColor}></div>
				<div className={"form__radio--color colorC" + props.paletteColor}></div>
			</div>
		</div>
	);
};

export default Palette;
