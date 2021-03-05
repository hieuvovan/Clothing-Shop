import React from "react";
import "./collection-component.style.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="tile">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return <div key={item.id}>{item.name}</div>;
          })}
      </div>
    </div>
  );
};
export default CollectionPreview;
