import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = SHOP_DATA;
  }

  render() {
    return (
      <div className="shop page">
        {this.state.map(({ id, ...othercollection }) => {
          return <CollectionPreview key={id} {...othercollection} />;
        })}
      </div>
    );
  }
}
export default ShopPage;
