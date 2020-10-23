import React from "react";
import FeatureCategory from "../Specs/Specs";

export default function Features(props) {
  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + "-" + idx;

    return (
      <FeatureCategory
        key={featureHash}
        featureHash={featureHash}
        name={feature}
        options={props.features[feature]}
        updateFeature={props.updateFeature}
        selected={props.selected}
        USCurrencyFormat={props.USCurrencyFormat}
      />
    );
  });
  return <> {features} </>;
}
