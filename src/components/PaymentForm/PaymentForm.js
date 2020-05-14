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

  const [savedMethods, setSavedMethods] = useState([
    {
      type: "discover",
      num: "1234-1234-1234-1234",
      exp: "12/32",
      cvc: "123",
      name: "Stefan A. Bobrowski",
    },
  ]);

  const handleSelectPaymentType = (t) => {
    setSelectedType(t);
    setAddACard({ ...addACard, type: t });

    let typesCopy = { ...selectPaymentType };
    Object.keys(typesCopy).forEach((x) => (typesCopy[x] = false));
    typesCopy[t] = true;
    setSelectPaymentType(typesCopy);
  };

  const handleAddNum = (n) => {
    const justDigits = n.replace(/\D/g, "");
    if (justDigits === "") {
      setAddACard({ ...addACard, num: "" });
      return;
    } else {
      let cardPreview = justDigits.split(""); // Convert to array for spaces in card preview
      setCardNumPreview(cardPreview);
      n = justDigits.match(/\d{1,4}/g).join("-");
      setAddACard({ ...addACard, num: n });

      if (n.length == 19) {
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

      let firstNum = d.slice(0, 1);
      if (firstNum == 0 || firstNum == 1) {
        let dateParts = d.split("/");

        if (dateParts[0] != "00" && dateParts[0] < 13) {
          if (dateParts[1]) {
            if (dateParts[1] > 32) {
              setPaymentValid({ ...paymentValid, expValid: "❌" });
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

  const handleAddCvc = (c) => {
    const justDigits = c.replace(/\D/g, "");
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
    let cardCopy = { ...addACard };
    let savedCopy = [...savedMethods];

    for (let i of savedCopy) {
      if (cardCopy.num == i.num) {
        return false;
      }
    }

    const allValid = (validation) => {
      for (let i in validation) {
        if (validation[i] != "✔️") {
          return false;
        }
      }
      return true;
    };

    let answer = allValid(pVal);
    if (answer == true) {
      setSavedMethods([...savedMethods, cardCopy]);
    }
  };

  const handleRemovePayment = (p) => {
    let savedCopy = [...savedMethods];
    savedCopy = savedCopy.filter((x) => x !== p);
    setSavedMethods(savedCopy);
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
              <img
                className="preview-payment-logo"
                src={require(`./assets/${selectedType}.svg`)}
              ></img>
            </div>
          </div>
          <div className="add-payment-button">
            <button onClick={() => handleAddPayment()}>
              Add Payment Method
            </button>
          </div>
        </section>

        <section className="saved-methods">
          <h4>Saved Payment Methods:</h4>

          {savedMethods.map((s, i) => (
            <div className={`saved-method ${s.type}`} key={i}>
              <p>
                {s.type} ending in{" "}
                {s.num.substring(s.num.length - 4, s.num.length)}
              </p>

              <span
                className="remove-payment-method"
                onClick={() => handleRemovePayment(s)}
              >
                ❌
              </span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default PaymentForm;
