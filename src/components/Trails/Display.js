import React from "react";

export function Display(prop) {
  return (
    <div>
      <h1>{prop.item.place}</h1>
      <p>{prop.item.description}</p>
    </div>
  );
}
