/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { A } from 'hookrouter';
import chip from './assets/chip.jpg';
import './PaymentForm-styles.scss';

const PaymentForm = () => {
  const [addACard, setAddACard] = useState({
    type: 'visa',
    num: '',
    exp: '',
    cvc: '',
    name: '',
  });

  const [selectPaymentType, setSelectPaymentType] = useState({
    visa: true,
    mastercard: false,
    americanexpress: false,
    discover: false,
  });

  const [selectedType, setSelectedType] = useState('visa');

  const [paymentValid, setPaymentValid] = useState({
    numValid: 'ok',
    expValid: 'ok',
    cvcValid: 'ok',
    nameValid: 'ok',
  });

  const [cardNumPreview, setCardNumPreview] = useState([]);

  const [savedMethods, setSavedMethods] = useState([
    {
      type: 'discover',
      num: '1234-1234-1234-1234',
      exp: '12/32',
      cvc: '123',
      name: 'Stefan A. Bobrowski',
    },
  ]);

  const handleSelectPaymentType = (t) => {
    setSelectedType(t);
    setAddACard({ ...addACard, type: t });

    const typesCopy = { ...selectPaymentType };
    Object.keys(typesCopy).forEach((x) => (typesCopy[x] = false));
    typesCopy[t] = true;
    setSelectPaymentType(typesCopy);
  };

  const handleAddNum = (n) => {
    const justDigits = n.replace(/\D/g, '');
    if (justDigits === '') {
      setAddACard({ ...addACard, num: '' });
    } else {
      const cardPreview = justDigits.split(''); // Convert to array for spaces in card preview
      setCardNumPreview(cardPreview);
      n = justDigits.match(/\d{1,4}/g).join('-');
      setAddACard({ ...addACard, num: n });

      if (n.length === 19) {
        setPaymentValid({ ...paymentValid, numValid: '✔️' });
      } else {
        setPaymentValid({ ...paymentValid, numValid: 'ok' });
      }
    }
  };

  const handleAddExp = (d) => {
    const valueJustDigits = d.replace(/\D/g, '');

    if (valueJustDigits === '') {
      setAddACard({ ...addACard, exp: '' });
    } else {
      d = valueJustDigits.match(/\d{1,2}/g).join('/');

      const firstNum = parseInt(d.slice(0, 1));

      if (firstNum === 0 || firstNum === 1) {
        const dateParts = d.split('/');

        if (dateParts[0] !== '00' && dateParts[0] < 13) {
          if (dateParts[1]) {
            if (dateParts[1] > 32) {
              setPaymentValid({ ...paymentValid, expValid: '❌' });
              return;
            }
          }

          setAddACard({ ...addACard, exp: d });
        }

        if (d.length === 5) {
          setPaymentValid({ ...paymentValid, expValid: '✔️' });
        } else {
          setPaymentValid({ ...paymentValid, expValid: 'ok' });
        }
      }
    }
  };

  const handleAddCvc = (c) => {
    const justDigits = c.replace(/\D/g, '');
    if (justDigits === '') {
      setAddACard({ ...addACard, cvc: '' });
    } else {
      c = justDigits;
      setAddACard({ ...addACard, cvc: c });
      if (c.length === 3) {
        setPaymentValid({ ...paymentValid, cvcValid: '✔️' });
      } else {
        setPaymentValid({ ...paymentValid, cvcValid: 'ok' });
      }
    }
  };

  const handleAddName = (n) => {
    const hasNums = /\d/.test(n);
    // const hasSpace = /\s/.test(n);
    const nameParts = n.split(' ');
    if (!hasNums) {
      setAddACard({ ...addACard, name: n });

      if ((nameParts.length === 2 || nameParts.length === 3) && nameParts[1] !== '') {
        setPaymentValid({ ...paymentValid, nameValid: '✔️' });
      } else {
        setPaymentValid({ ...paymentValid, nameValid: '❌' });
      }
    }
  };

  const handleAddPayment = () => {
    const pVal = { ...paymentValid };
    const cardCopy = { ...addACard };
    const savedCopy = [...savedMethods];

    for (const i of savedCopy) {
      if (cardCopy.num === i.num) {
        return false;
      }
    }

    const allValid = (validation) => {
      for (const i in validation) {
        if (validation[i] !== '✔️') {
          return false;
        }
      }
      return true;
    };

    const answer = allValid(pVal);
    if (answer === true) {
      setSavedMethods([...savedMethods, cardCopy]);
    }
  };

  const handleRemovePayment = (p) => {
    let savedCopy = [...savedMethods];
    savedCopy = savedCopy.filter((x) => x !== p);
    setSavedMethods(savedCopy);
  };

  return (
    <div className='project-page payment-form-project'>
      <h1>Payment Form</h1>
      <p> Use this dynamic payment form with validation to add payment methods to your wallet.</p>

      <div className='two-col-container'>
        <section className='add-card-container'>
          <h4>Add a Credit Card:</h4>

          <form id='add-card'>
            <div className='select-payment-type'>
              {Object.entries(selectPaymentType).map(([key, value], i) => (
                <div
                  role='button'
                  tabIndex={0}
                  className={`payment-type ${value ? 'selected' : ''}`}
                  key={i}
                  onClick={() => handleSelectPaymentType(key)}>
                  <img src={process.env.PUBLIC_URL + `/PaymentForm/${key}.svg`} alt='payment type'></img>

                  {value ? <p className='selected-name'>{key}</p> : <></>}
                </div>
              ))}

              <div className='card-type-option'></div>
            </div>

            <div className='form-field'>
              <label htmlFor='Card number'>Card Number:</label>
              <input
                name='Card number'
                value={addACard.num}
                placeholder='1111-2222-3333-4444'
                maxLength='19'
                onChange={(e) => handleAddNum(e.target.value)}></input>

              <p className='valid-icon'>{paymentValid.numValid}</p>
            </div>

            <div className='form-field'>
              <label htmlFor='Expiration'>Expiration:</label>
              <input
                name='Expiration'
                value={addACard.exp}
                placeholder='MM/YY'
                maxLength='5'
                onChange={(e) => handleAddExp(e.target.value)}></input>
              <p className='valid-icon'>{paymentValid.expValid}</p>
            </div>

            <div className='form-field'>
              <label htmlFor='CVC'>CVC:</label>
              <input
                name='CVC'
                value={addACard.cvc}
                placeholder='123'
                maxLength='3'
                onChange={(e) => handleAddCvc(e.target.value)}></input>
              <p className='valid-icon'>{paymentValid.cvcValid}</p>
            </div>

            <div className='form-field'>
              <label htmlFor='name'>Cardholder Name:</label>
              <input
                name='name'
                value={addACard.name}
                placeholder='Cardholder Name'
                maxLength='21'
                onChange={(e) => handleAddName(e.target.value)}></input>
              <p className='valid-icon'>{paymentValid.nameValid}</p>
            </div>
          </form>

          <div className={`add-card-preview ${selectedType}`}>
            <div className='chip-container'>
              <img className='chip' src={chip} alt='chip'></img>
              <p className='preview-cvc'>{addACard.cvc}</p>
            </div>
            <p className='preview-num'>
              {cardNumPreview.map((n, i) => (
                <span key={i}>{n}</span>
              ))}
            </p>
            <div className='preview-exp'>
              <div className='valid-thru'>
                <p>Valid</p>
                <p>Thru</p>
              </div>
              <p className='exp'>{addACard.exp}</p>
            </div>
            <div className='preview-bottom'>
              <p className='preview-name'>{addACard.name}</p>
              <img
                className='preview-payment-logo'
                src={process.env.PUBLIC_URL + `/PaymentForm/${selectedType}.svg`}
                alt='preview'></img>
            </div>
          </div>
          <div className='add-payment-button'>
            <button onClick={() => handleAddPayment()}>Add Payment Method</button>
          </div>
        </section>

        <section className='saved-methods'>
          <h4>Wallet:</h4>

          {savedMethods.length === 0 ? <p>(Wallet empty)</p> : <p></p>}

          {savedMethods.map((s, i) => (
            <div className={`saved-method ${s.type}`} key={i}>
              <p>
                {s.type} ending in {s.num.substring(s.num.length - 4, s.num.length)}
              </p>

              <span
                className='remove-payment-method'
                role='img'
                aria-label='remove'
                onClick={() => handleRemovePayment(s)}>
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
