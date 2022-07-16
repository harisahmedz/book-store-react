import useInput from "../../hooks/use-input";
import Button from "../UI/Button";
import classes from "./Css/Checkout.module.css";

const CheckOut = (props) => {
  const {
    value: nameInput,
    isValid: nameisValid,
    hasError: nameIsInValid,
    valueChangeHandler: NameInputHandler,
    valueBlurHandler: NameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredStreet,
    isValid: streetIsValid,
    hasError: streetIsInvalid,
    valueChangeHandler: streetChangeHandler,
    valueBlurHandler: streetBlurHandler,
    reset: resetStreetInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPostalCode,
    isValid: PostalCodeisValid,
    hasError: PostalCodeIsInvalid,
    valueChangeHandler: PostalCodeChangeHandler,
    valueBlurHandler: PostalCodeBlurHandler,
    reset: resetPostalCodeInput,
  } = useInput((value) => value.trim().length === 5);

  const {
    value: enteredCity,
    isValid: cityIsValid,
    hasError: cityIsInvalid,
    valueChangeHandler: cityChangeHandler,
    valueBlurHandler: cityBlurHandler,
    reset: resetCityInput,
  } = useInput((value) => value.trim() !== "");
  const formIsValid =
    nameisValid && streetIsValid && PostalCodeisValid && cityIsValid;
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log("Hi");
    props.onConfirm({
      Name: nameInput,
      City: enteredCity,
      Street: enteredStreet,
      PostalCode: enteredPostalCode,
    });
    console.log(nameInput);
    resetNameInput();
    resetStreetInput();
    resetPostalCodeInput();
    resetCityInput();
  };
  const nameClass = nameIsInValid
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;
  const streetClass = streetIsInvalid
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;
  const postalCodeClass = PostalCodeIsInvalid
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;
  const cityClass = cityIsInvalid
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;

  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <div className={nameClass}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          onChange={NameInputHandler}
          onBlur={NameInputBlurHandler}
          value={nameInput}
        />
        {nameIsInValid && <p>Please Enter Valid Name</p>}
      </div>
      <div className={streetClass}>
        <label htmlFor="Street">Street</label>
        <input
          type="text"
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
          value={enteredStreet}
        />
        {streetIsInvalid && <p>Please Enter Valid Street </p>}
      </div>
      <div className={postalCodeClass}>
        <label htmlFor="PostalCode">Postal Code</label>
        <input
          type="text"
          onChange={PostalCodeChangeHandler}
          onBlur={PostalCodeBlurHandler}
          value={enteredPostalCode}
        />
        {PostalCodeIsInvalid && <p>Please Enter Valid Postal Code</p>}
      </div>
      <div className={cityClass}>
        <label htmlFor="City">City</label>
        <input
          type="text"
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
          value={enteredCity}
        />
        {cityIsInvalid && <p>Please Enter a Valid City</p>}
      </div>
      <div className={classes.actions}>
        <Button onClick={props.onCancel}>Cancel</Button>
        <Button disabled={!formIsValid}>Confirm</Button>
      </div>
    </form>
  );
};

export default CheckOut;
