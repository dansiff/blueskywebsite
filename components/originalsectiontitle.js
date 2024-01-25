import React from "react";
import Container from "./container";

const SectionTitle = (props) => {
  return (
    <Container style="background-color: blue;"
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}>
      {props.pretitle && (
        <div className="text-x1 font-bold tracking-wider text-indigo-600 uppercase">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-4xl font-bold leading-snug tracking-tight text-blue lg:leading-tight lg:text-4xl dark:text-white">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-2x1 leading-normal text-blue lg:text-2x1 xl:text-2x1 dark:text-white">
          {props.children}
        </p>
      )}
    </Container>
  );
}

export default SectionTitle;