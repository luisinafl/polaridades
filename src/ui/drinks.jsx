import { Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import firebase from "../firebase"


const Drinks = ({ id, className, children, ...props }) => {

    const [tragos, setFoods] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("tragos");

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
                tragos.map((tragos) => (
                    <div
                        key={tragos.id}
                        id={tragos.id}
                        className={`carta ${className} row form-group`}>
                        <Col xs={9}>
                            <span className="name">{tragos.nombre}</span>
                            <span className="recipe">{tragos.receta}</span>
                        </Col>
                        <Col xs={3}>
                            <span className="price">${tragos.precio}</span>
                        </Col>
                    </div>
                ))
            }
        </div>
    );
};

export default Drinks;
