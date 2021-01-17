import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal.jsx";

import "./Card.scss";


const Card = ({good, deleteGood}) => {
    const [toCart, setToCart] = useState(false)
    const [toFavorite, setToFavorite] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const renderModal = (e) => {
      e.preventDefault();
    
      setShowModal(!showModal);
    };
    

    const deleteAndAddToCart = (e) => {
      e.preventDefault();

      setShowModal(!showModal);
      
      if (localStorage.getItem(`toCart-id${good.id}`)) {
        localStorage.removeItem(`toCart-id${good.id}`);
        deleteGood()
        return
      }
      
      localStorage.setItem(`toCart-id${good.id}`, true);

      setToCart(!toCart)
    }

    const deleteAndAddToFavorites = (e) => {
      e.preventDefault();

      
        setToFavorite(!toFavorite)
  
        if (localStorage.getItem(`toFavorite-id${good.id}`)) {
          localStorage.removeItem(`toFavorite-id${good.id}`);
          deleteGood()
          return
        }
        
        localStorage.setItem(`toFavorite-id${good.id}`, true);

    }

    return (
      <li className="good">
        <div className="good-img">
          <img src={good.url} alt="good" />
        </div>
        <h3 className="good-title">{good.name}</h3>
        <div className="favorites-and-color-place">
          <a
            href="#"
            className={

              localStorage.getItem(`toFavorite-id${good.id}`) !== null
                ? "favorite-btn active"
                : "favorite-btn"

            }
            onClick={deleteAndAddToFavorites}
          >
            <svg className="svg" height="25" width="23" data-rating="1">
              <polygon
                fill="grey"
                points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
                style={{ fillRull: "nonzero" }}
              />
            </svg>
          </a>
          <div
            className="good-color"
            style={{
                backgroundColor: good.color,
              }}
          ></div>
        </div>
        <p className="good-article"><b>Article:</b> {good.article}</p>
        <div className="good-change">
            <p className="good-price">${good.price}</p>
            {(localStorage.getItem(`toCart-id${good.id}`) === null) ? 
                <a href="#" className="add-btn" onClick={renderModal}>to Cart</a> : 
                <a href="#" className="remove-btn" onClick={renderModal}>X</a>
            }

        </div>
        {showModal && (
          <Modal
            header="Do you want add to Cart?"
            text="Once you delete this file, it won’t be possible to undo this action.
                                                        Are you sure you want to delete it?"
            actions={
              <div className="btn-wrapper">
                <a
                  href="#"
                  className="btn accept"
                  onClick={deleteAndAddToCart}
                >
                  Ok
                </a>
                <a href="#" className="btn delay" onClick={renderModal}>
                  Cancel
                </a>
              </div>
            }
            deleteModal={renderModal}
          />
        )}
      </li>
    )
}

Card.propTypes = {
  good: PropTypes.object,
  deleteGood: PropTypes.func,
}

export default Card;