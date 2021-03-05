import React from "react";
import "./collection-component.style.scss";
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="tile">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({id,...otheritem}) => {
            return <CollectionItem key={id} {...otheritem} />;
          })}
      </div>
    </div>
  );
};
export default CollectionPreview;
