import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Card from "./Card";
import "./CardsPlace.scss"

const CardsPlace = ({goods}) => {
    const [deleteGoodFromCart, setDeleteGoodFromCart] = useState(false);

    const {pathname} = useLocation()

    useEffect(() => {}, [pathname])
    
    const deleteGood = () => {    
        setDeleteGoodFromCart(!deleteGoodFromCart); 
    };

    return (
        <div className="cards-place">
            <Switch>
                <Route exact path='/'>
                    <ul className="cards-list">
                        {goods.map((el) => (
                            <Card key={el.id} good={el} deleteGood={deleteGood} />
                        ))}
                    </ul>    
                </Route>
                <Route path='/favorites'>
                    <ul className="cards-list">
                        {goods.map((el) =>
                            localStorage.getItem(`toFavorite-id${el.id}`) !== null ? (
                            <Card key={el.id} good={el} deleteGood={deleteGood} />
                            ) : null,
                        )}
                    </ul>
                </Route>
                <Route path='/cart'>
                    <ul className="cards-list">
                        {goods.map((el) =>
                            localStorage.getItem(`toCart-id${el.id}`) !== null ? (
                            <Card key={el.id} good={el} deleteGood={deleteGood} />
                            ) : null,
                        )}
                    </ul>
                </Route>
            </Switch>
        </div>
    )
}


CardsPlace.propTypes = {
    goods: PropTypes.array
}

export default CardsPlace;