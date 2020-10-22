import React from "react";
import slugify from "slugify";
import FeatureOption from "../FeatureOption/FeatureOption";

export default function FeatureCategory(props) {
  const options = props.options.map((item) => {
    const itemHash = slugify(JSON.stringify(item));

    return (
      <FeatureOption
        key={itemHash}
        id={itemHash}
        feature={props.name}
        itemHash={itemHash}
        item={item}
        updateFeature={props.updateFeature}
        USCurrencyFormat={props.USCurrencyFormat}
        selected={props.selected}
      />
    );
  });
  const { name, featureHash } = props;
  return (
    <fieldset className="feature" key={featureHash}>
      <legend className="feature__name">
        <h3>{name}</h3>
      </legend>
      {options}
    </fieldset>
  );
}
