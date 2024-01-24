import React from "react";

const Container = (props) => {
    const containerStyle = props.fullWidth
        ? "w-full"
        : "container p-8 mx-auto xl:px-0";
    return (
        <div className={`${containerStyle} ${props.className || ''}`}>
            {props.children}
        </div>
    );
}

export default Container;
