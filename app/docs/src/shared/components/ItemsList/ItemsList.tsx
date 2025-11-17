import React from "react";


type ItemsListProps = {
  items?: Array<[string, string]>;
};

const ItemsList = ({ items  }: ItemsListProps) => (
  <div className="components-list">
    {items.map(([name, desc]) => (
      <div className="component-item" key={name}>
        <span className="component-name">{name}</span>
        <span className="component-desc">{desc}</span>
      </div>
    ))}
  </div>
);

export default ItemsList;
