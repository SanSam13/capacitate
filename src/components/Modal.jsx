import React from 'react'

/**
 * Componente para crear modal
 * @param {string} title Título de la modal
 * @param {string} content Descripción de la modal
 * @returns Modal
 */

const Modal = ({title, content}) => {
    return (
        <div className="modal-container" id='{id}'>
            <div className="modal-custom">
                <span className='close-icon'>
                    <i className="fas fa-times"></i>
                </span>
                <div className="header">
                    <h5>{title}</h5>
                </div>
                <div className="body">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal
