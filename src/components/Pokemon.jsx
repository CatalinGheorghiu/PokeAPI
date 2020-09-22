import React, { Fragment } from "react";

const Pokemon = ({ name, url }) => {
    return (
        <Fragment>
            <h3>
                {name} ---:---{" "}
                <span>
                    <strong>{url}</strong>
                </span>
            </h3>
        </Fragment>
    );
};

export default Pokemon;
