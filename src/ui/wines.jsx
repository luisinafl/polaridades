
import { Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import firebase from "../firebase"


const Wines = ({ id, className, children, ...props }) => {

    const [vinos, setFoods] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("vinos");

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
                vinos.map((vinos) => (
                    <div
                        key={vinos.id}
                        id={vinos.id}
                        className={`carta ${className} row form-group`}>
                        <Col xs={9}>
                            <span className="name">{vinos.nombre}</span>
                            <span className="recipe">{vinos.receta}</span>
                        </Col>
                        <Col xs={3}>
                            <span className="price">${vinos.precio}</span>
                        </Col>
                    </div>
                ))
            }
        </div>
    );
};

export default Wines;
