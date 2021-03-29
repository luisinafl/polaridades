import { Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import firebase from "../firebase"


const Beers = ({ id, className, children, ...props }) => {

    const [cervezas, setFoods] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("cervezas");

    function getFoods() {
        setLoading(true);
        ref.get().then((item) => {
            const items = item.docs.map((doc) => doc.data());
            setFoods(items);
            setLoading(false);
        });
    }

    useEffect(() => {
        getFoods();
    });


    return (
        <div>
            {
                cervezas.map((cervezas) => (
                    <div
                        key={cervezas.id}
                        id={cervezas.id}
                        className={`carta ${className} row form-group`}>
                        <Col xs={9}>
                            <span className="name">{cervezas.nombre}</span>
                            <span className="recipe">{cervezas.receta}</span>
                        </Col>
                        <Col xs={3}>
                            <span className="price">${cervezas.precio}</span>
                        </Col>
                    </div>
                ))
            }
        </div>
    );
};

export default Beers;
