import React, { useState, useEffect } from "react";
import { A } from "hookrouter";

import americanexpress from "./assets/americanexpress.svg";
import visa from "./assets/visa.svg";
import mastercard from "./assets/mastercard.svg";
import discover from "./assets/discover.svg";
import paypal from "./assets/paypal.svg";
import chip from "./assets/chip.jpg";
import "./PaymentForm-styles.scss";

const PaymentForm = () => {
  const [addACard, setAddACard] = useState({
    type: "visa",
    num: "",
    exp: "",
    cvc: "",
    name: "",
  });

  const [selectPaymentType, setSelectPaymentType] = useState({
    visa: true,
    mastercard: false,
    americanexpress: false,
    discover: false,
  });

  const [selectedType, setSelectedType] = useState("visa");

  const [paymentValid, setPaymentValid] = useState({
    numValid: "ok",
    expValid: "ok",
    cvcValid: "ok",
    nameValid: "ok",
  });

  const [cardNumPreview, setCardNumPreview] = useState([]);

  const [savedMethods, setSavedMethods] = useState([]);

  const handleSelectPaymentType = (t) => {
    console.log(t);
    setSelectedType(t);
    setAddACard({ ...addACard, type: t });

    let typesCopy = { ...selectPaymentType };
    Object.keys(typesCopy).forEach((x) => (typesCopy[x] = false));
    typesCopy[t] = true;
    setSelectPaymentType(typesCopy);
  };

  const handleAddNum = (n) => {
    // if (n.length < 20) {
    //   let lastChar = n.slice(n.length - 1);
    //   if (isNaN(lastChar)) {
    //     n = n.slice(0, -1);
    //   } else if (n && n.length % 5 == 0) {
    //     n = n.slice(0, -1) + "-" + n.slice(-1);
    //   }
    //   let onlyNum = n.replace(/-/g, "").split(""); // Convert to array for spaces in card preview
    //   setCardNumPreview(onlyNum);
    //   setAddACard({ ...addACard, num: n });
    //   if (n.length == 19) {
    //     console.log("CARD NUMBER VALID?!!?");
    //     setPaymentValid({ ...paymentValid, numValid: "✔️" });
    //   } else {
    //     setPaymentValid({ ...paymentValid, numValid: "ok" });
    //   }
    // }
    console.log(n);
    const justDigits = n.replace(/\D/g, "");
    if (justDigits === "") {
      setAddACard({ ...addACard, num: "" });
      return;
    } else {
      let cardPreview = justDigits.split(""); // Convert to array for spaces in card preview
      setCardNumPreview(cardPreview);
      n = justDigits.match(/\d{1,4}/g).join("-");
      console.log(n);
      setAddACard({ ...addACard, num: n });

      if (n.length == 19) {
        console.log("CARD NUMBER VALID?!!?");
        setPaymentValid({ ...paymentValid, numValid: "✔️" });
      } else {
        setPaymentValid({ ...paymentValid, numValid: "ok" });
      }
    }
  };

  const handleAddExp = (d) => {
    const valueJustDigits = d.replace(/\D/g, "");
    if (valueJustDigits === "") {
      setAddACard({ ...addACard, exp: "" });
    } else {
      d = valueJustDigits.match(/\d{1,2}/g).join("/");

      // let firstNum = d.slice(0, 1);
      // if (firstNum == 0 || firstNum == 1) {
      //   console.log("card right");
      // } else {
      //   console.log("card not right");
      // }

      let firstNum = d.slice(0, 1);
      if (firstNum == 0 || firstNum == 1) {
        let dateParts = d.split("/");

        console.log(dateParts);

        if (dateParts[0] != "00" && dateParts[0] < 13) {
          if (dateParts[1]) {
            if (dateParts[1] > 32) {
              return;
            }
          }
          setAddACard({ ...addACard, exp: d });
        }

        if (d.length == 5) {
          setPaymentValid({ ...paymentValid, expValid: "✔️" });
        } else {
          setPaymentValid({ ...paymentValid, expValid: "ok" });
        }
      }
    }
  };

  // let firstNum = d.slice(0, 1);
  // if (firstNum == 0 || firstNum == 1) {
  //   console.log("firstnum", firstNum);
  //   if (d.length < 6) {
  //     let lastChar = d.slice(d.length - 1);
  //     if (isNaN(lastChar)) {
  //       d = d.slice(0, -1);
  //     } else if (d && d.length == 3) {
  //       d = d.slice(0, -1) + "/" + d.slice(-1);
  //     }

  //     if (d.length == 5) {
  //       console.log("valid exp");
  //       setPaymentValid({ ...paymentValid, expValid: "✔️" });
  //     } else {
  //       setPaymentValid({ ...paymentValid, expValid: "ok" });
  //     }

  //     let dateParts = d.split("/");
  //     if (dateParts[0] < 13) {
  //       setAddACard({ ...addACard, exp: d });
  //     }
  //   }
  // }

  const handleAddCvc = (c) => {
    console.log("cvc:", c);

    const justDigits = c.replace(/\D/g, "");
    console.log("just digits", justDigits);
    if (justDigits === "") {
      setAddACard({ ...addACard, cvc: "" });
    } else {
      c = justDigits;
      setAddACard({ ...addACard, cvc: c });
      if (c.length == 3) {
        setPaymentValid({ ...paymentValid, cvcValid: "✔️" });
      } else {
        setPaymentValid({ ...paymentValid, cvcValid: "ok" });
      }
    }
  };

  const handleAddName = (n) => {
    let hasNums = /\d/.test(n);
    // let hasSpace = /\s/.test(n);
    let nameParts = n.split(" ");

    console.log(nameParts);

    if (!hasNums) {
      setAddACard({ ...addACard, name: n });

      if (
        (nameParts.length == 2 || nameParts.length == 3) &&
        nameParts[1] != ""
      ) {
        setPaymentValid({ ...paymentValid, nameValid: "✔️" });
      } else {
        setPaymentValid({ ...paymentValid, nameValid: "invalid" });
      }
    }
  };

  const handleAddPayment = () => {
    let pVal = { ...paymentValid };
    console.log(pVal);

    console.log(addACard);

    let cardCopy = { ...addACard };

    const allValid = (validation) => {
      for (let i in validation) {
        console.log(validation[i]);
        if (validation[i] != "✔️") {
          console.log("one false");
          return false;
        }
      }
      return true;
    };

    let answer = allValid(pVal);
    console.log(answer);

    if (answer == true) {
      setSavedMethods([...savedMethods, cardCopy]);
    }
  };

  return (
    <div className="project payment-form-project">
      <h1>Payment Form</h1>
      <p>
        A React app for create, adding, and deleting payment methods with form
        validation.
      </p>

      <div className="two-col-container">
        <section className="add-card-container">
          <h2>Add a Credit Card:</h2>

          <form id="add-card">
            <div className="select-payment-type">
              {Object.entries(selectPaymentType).map(([key, value], i) => (
                <div
                  className={`payment-type ${value ? "selected" : ""}`}
                  key={i}
                  onClick={() => handleSelectPaymentType(key)}
                >
                  <img src={require(`./assets/${key}.svg`)}></img>

                  {value ? <p className="selected-name">{key}</p> : <></>}
                  {/* <p>{key}</p> */}
                </div>
              ))}

              <div className="card-type-option"></div>
            </div>

            <div className="form-field">
              <label>Card Number:</label>
              <input
                value={addACard.num}
                placeholder="1111-2222-3333-4444"
                maxLength="19"
                onChange={(e) => handleAddNum(e.target.value)}
              ></input>

              <p className="valid-icon">{paymentValid.numValid}</p>
            </div>

            <div className="form-field">
              <label>Expiration:</label>
              <input
                value={addACard.exp}
                placeholder="MM/YY"
                maxLength="5"
                onChange={(e) => handleAddExp(e.target.value)}
              ></input>
              <p className="valid-icon">{paymentValid.expValid}</p>
            </div>

            <div className="form-field">
              <label>CVC:</label>
              <input
                value={addACard.cvc}
                placeholder="123"
                maxLength="3"
                onChange={(e) => handleAddCvc(e.target.value)}
              ></input>
              <p className="valid-icon">{paymentValid.cvcValid}</p>
            </div>

            <div className="form-field">
              <label>Cardholder Name:</label>
              <input
                value={addACard.name}
                placeholder="Cardholder Name"
                maxLength="21"
                onChange={(e) => handleAddName(e.target.value)}
              ></input>
              <p className="valid-icon">{paymentValid.nameValid}</p>
            </div>
          </form>

          <div className={`add-card-preview ${selectedType}`}>
            <div className="chip-container">
              <img className="chip" src={chip} alt="chip"></img>
              <p className="preview-cvc">{addACard.cvc}</p>
            </div>
            <p className="preview-num">
              {cardNumPreview.map((n, i) => (
                <span key={i}>{n}</span>
              ))}
            </p>

            <div className="preview-exp">
              <div className="valid-thru">
                <p>Valid</p>
                <p>Thru</p>
              </div>

              <p className="exp">{addACard.exp}</p>
            </div>

            <div className="preview-bottom">
              <p className="preview-name">{addACard.name}</p>
              {/* <p>{selectedType}</p> */}

              <img
                className="preview-payment-logo"
                src={require(`./assets/${selectedType}.svg`)}
              ></img>
            </div>
            {/* 
            <div className="bottom">
              <p className="full-name">{fullName}</p>
              <img
                className="payment-method-logo"
                src={require(`./assets/${paymentMethod}.svg`)}
              ></img>
            </div> */}
          </div>

          <div className="add-payment-button">
            <button onClick={() => handleAddPayment()}>
              Add Payment Method
            </button>
          </div>
        </section>

        {/* <section>
          <form id="payment-form">
            <div className="payment-methods">
              <label>Payment Method:</label>
              <div className="select-payment-method">
                <div
                  className={
                    paymentMethod == "americanexpress"
                      ? "selected-payment-method"
                      : null
                  }
                  onClick={() => {
                    setPaymentMethod("americanexpress");
                  }}
                >
                  <img src={americanexpress}></img>
                </div>
                <div
                  className={
                    paymentMethod == "visa" ? "selected-payment-method" : null
                  }
                  onClick={() => {
                    setPaymentMethod("visa");
                  }}
                >
                  <img src={visa}></img>
                </div>
                <div
                  className={
                    paymentMethod == "mastercard"
                      ? "selected-payment-method"
                      : null
                  }
                  onClick={() => {
                    setPaymentMethod("mastercard");
                  }}
                >
                  <img src={mastercard}></img>
                </div>
                <div
                  className={
                    paymentMethod == "paypal" ? "selected-payment-method" : null
                  }
                  onClick={() => {
                    setPaymentMethod("paypal");
                  }}
                >
                  <img src={paypal}></img>
                </div>
              </div>
            </div>

            <div>
              <label>Card Number:</label>
              <input
                placeholder="1111-1111-1111-1112"
                value={formattedCardNum}
                onChange={(e) => setCardNumber(e.target.value.split(""))}
                maxLength="19"
                required
                pattern="\S+"
                title="This field is required and cannot be empty or have any whitespace"
              ></input>

              <label>{paymentValidation.numValid}</label>
            </div>

            <div>
              <label>Expiration:</label>
              <input
                placeholder="MM/YY"
                maxLength="5"
                onChange={(e) => setExpDate(e.target.value)}
              ></input>
            </div>

            <div>
              <label>CV Code:</label>
              <input
                placeholder="CVC"
                maxLength="3"
                onChange={(e) => setCvc(e.target.value)}
              ></input>
            </div>

            <div>
              <label>Name:</label>
              <input
                type="text"
                placeholder="Cardholder Name"
                onChange={(e) => setFullName(e.target.value)}
                maxLength="26"
                pattern="[A-Za-z]"
              ></input>
            </div>
          </form>

          <div className={`payment-preview ${paymentMethod}`}>
            <div className="chips">
              <img className="chip" src={chip} alt="chip"></img>
              <p className="cvc">{cvc}</p>
            </div>

            <div className="card-number">
              {pureNumber.map((n, i) => (
                <span key={i}>{n}</span>
              ))}
            </div>
            <div className="exp-date">
              <div className="valid-thru">
                <p>Valid</p>
                <p>Thru</p>
              </div>
              <p className="exp">{formattedDate}</p>
            </div>
            <div className="bottom">
              <p className="full-name">{fullName}</p>
              <img
                className="payment-method-logo"
                src={require(`./assets/${paymentMethod}.svg`)}
              ></img>
            </div>
          </div>

          <div className="add-card-button">
            <button onClick={() => handleAddCard()}>ADD CARD</button>
          </div>

    
        </section> */}

        <section className="saved-methods">
          <h4>Saved Payment Methods:</h4>

          {savedMethods.map((s, i) => (
            <div className={`saved-method ${s.type}`} key={i}>
              <p>
                {s.type} ending in{" "}
                {s.num.substring(s.num.length - 4, s.num.length)}
              </p>
            </div>
          ))}
          {/* {savedCards.map((sc, i) => (
            <div className={`saved-card ${sc.paymentmethod}`} key={i}>
              <p>{sc.paymentmethod} ending in</p>
              <p>
                {sc.cardnumber.map((cn, i) => (
                  <span>{i > 14 ? <span>{cn}</span> : <span>*</span>}</span>
                ))}
              </p>
            </div>
          ))} */}
        </section>
      </div>
    </div>
  );
};

export default PaymentForm;
