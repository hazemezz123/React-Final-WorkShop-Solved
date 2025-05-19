import React from "react";

function createButton(type) {
  switch (type) {
    case "primary":
      return <button className="btn btn-primary">primary</button>;
    case "secondary":
      return <button className="btn btn-secondary">secondary</button>;
    case "danger":
      return <button className="btn btn-danger">danger</button>;
    default:
      return <button className="btn btn-info">default</button>;
  }
}
const FactoryPattern = () => {
  return (
    <div className="d-flex justify-content-center align-items-center gap-5">
      {createButton("primary")}
      {createButton("secondary")}
      {createButton("danger")}
      {createButton("")}
    </div>
  );
};

export default FactoryPattern;
