// Modal.js
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import './Modal.css';

const Modal = ({ onClose, onAddToCart }) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Poți adăuga aici logica pentru gestionarea datelor sau adăugarea în coș
    onAddToCart();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Completează măsurătorile:</h2>
        <div className='main-container'>
          <div className='form-container'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Inaltime:
                <br />
                <Controller
                  name="inaltime"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Camp obligatoriu',pattern: { value: /^[0-9]+(\.[0-9]+)?$/, message: 'Introduceți doar numere' }}}
                  render={({ field }) => (
                    <>
                      <input {...field} placeholder="Introdu măsurătorile" />
                      <span className="validation-message">{errors.inaltime?.message}</span>
                    </>
                  )}
                />
              </label>
              <label>
                Bust:
                <br />
                <Controller
                  name="bust"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Camp obligatoriu',pattern: { value: /^[0-9]+(\.[0-9]+)?$/, message: 'Introduceți doar numere' }}}
                  render={({ field }) => (
                    <>
                      <input {...field} placeholder="Introdu măsurătorile" />
                      <span className="validation-message">{errors.bust?.message}</span>
                    </>
                  )}
                />
              </label>
              <label>
                Talie:
                <br />
                <Controller
                  name="talie"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Camp obligatoriu',pattern: { value: /^[0-9]+(\.[0-9]+)?$/, message: 'Introduceți doar numere' }}}
                  render={({ field }) => (
                    <>
                      <input {...field} placeholder="Introdu măsurătorile" />
                      <span className="validation-message">{errors.talie?.message}</span>
                    </>
                  )}
                />
              </label>
              <label>
                Șolduri:
                <br />
                <Controller
                  name="solduri"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Camp obligatoriu',pattern: { value: /^[0-9]+(\.[0-9]+)?$/, message: 'Introduceți doar numere' }}}
                  render={({ field }) => (
                    <>
                      <input {...field} placeholder="Introdu măsurătorile" />
                      <span className="validation-message">{errors.solduri?.message}</span>
                    </>
                  )}
                />
              </label>
            </form>
          </div>
          <div className="avatar-container">
            <img
              src="../assets/TailorPopUpImage.jpg"  // înlocuiește cu link-ul real către avatar
              alt="Avatar"
              className="avatar-img"
            />
          </div>
        </div>
        <p>Pentru instrucțiuni despre cum să-ți iei măsurătorile, vezi <a href="https://www.youtube.com/watch?v=XAmy645yKuc" target="_blank">aici</a>.</p>
        <div className="buttons-div">
                <button type="submit" onClick={handleSubmit(onSubmit)}>Adaugă în coș</button>
                <button onClick={onClose}>Părăsește fereastra</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;