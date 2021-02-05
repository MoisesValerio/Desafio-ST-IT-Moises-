import React from "react";

const ApiItem = (props) => {
    return (
    <p>
        {props.rotulo}
        {props.conteudo}
    </p>
    );
};

export default ApiItem;