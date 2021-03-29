import { Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import firebase from "../firebase"


const Soda = ({ id, className, children, ...props }) => {

    const [bebidas, setFoods] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("bebidas");

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
                bebidas.map((bebidas) => (
                    <div
                        key={bebidas.id}
                        id={bebidas.id}
                        className={`carta ${className} row form-group`}>
                        <Col xs={9}>
                            <span className="name">{bebidas.nombre}</span>
                            <span className="recipe">{bebidas.receta}</span>
                        </Col>
                        <Col xs={3}>
                            <span className="price">${bebidas.precio}</span>
                        </Col>
                    </div>
                ))
            }
        </div>
    );
};

export default Soda;
