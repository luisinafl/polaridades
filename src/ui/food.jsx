import { Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import firebase from "../firebase"


const Carta = ({ id, className, children, ...props }) => {

    const [comidas, setFoods] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("comidas");

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
                comidas.map((comidas) => (
                    <div
                        key={comidas.id}
                        id={comidas.id}
                        className={`carta ${className} row form-group`}>
                        <Col xs={9}>
                            <span className="name">{comidas.nombre}</span>
                            <span className="recipe">{comidas.receta}</span>
                        </Col>
                        <Col xs={3}>
                            <span className="price">${comidas.precio}</span>
                        </Col>
                    </div>
                ))
            }
        </div>
    );
};

export default Carta;
