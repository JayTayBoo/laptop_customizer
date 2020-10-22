import React from "react";
import SummaryItem from "../SummaryItem/Summaryitem";

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
  return <> {summary} </>;
}
