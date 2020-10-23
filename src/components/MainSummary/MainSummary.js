import React from "react";
import SummaryItem from "../Option/Option";
import Total from "../Total/Total";

export default function Summary(props) {
  const summary = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const selectedOption = props.selected[feature];

    return (
      <SummaryItem
        key={featureHash}
        featureHash={featureHash}
        feature={feature}
        selectedOption={selectedOption}
        USCurrencyFormat={props.USCurrencyFormat}
      />
    );
  });
  return (
    <>
      {summary}
      <Total
        USCurrencyFormat={props.USCurrencyFormat}
        selected={props.selected}
      />
    </>
  );
}
