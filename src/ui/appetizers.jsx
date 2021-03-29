import { Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import firebase from "../firebase"


const Appetizers = ({ id, className, children, ...props }) => {

    const [aperitivos, setFoods] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("aperitivos");

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
                aperitivos.map((aperitivos) => (
                    <div
                        key={aperitivos.id}
                        id={aperitivos.id}
                        className={`carta ${className} row form-group`}>
                        <Col xs={9}>
                            <span className="name">{aperitivos.nombre}</span>
                        </Col>
                        <Col xs={3}>
                            <span className="price">${aperitivos.precio}</span>
                        </Col>
                    </div>
                ))
            }
        </div>
    );
};

export default Appetizers;
