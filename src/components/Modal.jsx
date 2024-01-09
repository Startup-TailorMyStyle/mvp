// Modal.js
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import './Modal.css';
import MovieClip from './MovieClip';
import { useEffect } from 'react';

const Modal = ({ onClose, onAddToCart }) => {

  useEffect(() => {
    global.analytics.track("Modal")
  }, [])

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
                Umeri:
                <br />
                <Controller
                  name="umeri"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Câmp obligatoriu',pattern: { value: /^[0-9]+(\.[0-9]+)?$/, message: 'Introduceți doar numere' }}}
                  render={({ field }) => (
                    <>
                      <input {...field} placeholder="Introdu măsurătorile (cm)" />
                      <span className="validation-message">{errors.umeri?.message}</span>
                    </>
                  )}
                />
              </label>
            <label>
                Lungime Față:
                <br />
                <Controller
                  name="lungime_fata"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Câmp obligatoriu',pattern: { value: /^[0-9]+(\.[0-9]+)?$/, message: 'Introduceți doar numere' }}}
                  render={({ field }) => (
                    <>
                      <input {...field} placeholder="Introdu măsurătorile (cm)" />
                      <span className="validation-message">{errors.lungime_fata?.message}</span>
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
                  rules={{ required: 'Câmp obligatoriu',pattern: { value: /^[0-9]+(\.[0-9]+)?$/, message: 'Introduceți doar numere' }}}
                  render={({ field }) => (
                    <>
                      <input {...field} placeholder="Introdu măsurătorile (cm)" />
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
                  rules={{ required: 'Câmp obligatoriu',pattern: { value: /^[0-9]+(\.[0-9]+)?$/, message: 'Introduceți doar numere' }}}
                  render={({ field }) => (
                    <>
                      <input {...field} placeholder="Introdu măsurătorile (cm)" />
                      <span className="validation-message">{errors.talie?.message}</span>
                    </>
                  )}
                />
              </label>
              <label>
                Lungime Mâneci:
                <br />
                <Controller
                  name="lungime_maneci"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Câmp obligatoriu',pattern: { value: /^[0-9]+(\.[0-9]+)?$/, message: 'Introduceți doar numere' }}}
                  render={({ field }) => (
                    <>
                      <input {...field} placeholder="Introdu măsurătorile (cm)" />
                      <span className="validation-message">{errors.lungime_maneci?.message}</span>
                    </>
                  )}
                />
              </label>
              <label>
                Diametru Braț:
                <br />
                <Controller
                  name="diametru_brat"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Câmp obligatoriu',pattern: { value: /^[0-9]+(\.[0-9]+)?$/, message: 'Introduceți doar numere' }}}
                  render={({ field }) => (
                    <>
                      <input {...field} placeholder="Introdu măsurătorile (cm)" />
                      <span className="validation-message">{errors.diametru_brat?.message}</span>
                    </>
                  )}
                />
              </label>
            </form>
          </div>
          <div className="avatar-container">
              <br></br>
              <br></br>
            <img
              style={{ width: 230, height: 230, marginLeft: 20 }}
              src={process.env.PUBLIC_URL +"/assets/TailorPopUpImage.jpg"}  // înlocuiește cu link-ul real către avatar
              alt="Avatar"
              className="avatar-img"
            />
          </div>
        </div>
        <MovieClip/>
        <div className="buttons-div d-flex">
                <button className="btn btn-success btn-lg m-1 p-2" type="submit" onClick={handleSubmit(onSubmit)}>Adaugă în coș</button>
                <button className="btn btn-secondary btn-lg m-1 p-2" onClick={onClose}>Părăsește fereastra</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
