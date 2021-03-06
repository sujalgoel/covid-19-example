import React from "react";
import formatNumber from "../functions/formatNumber";
import { AppTheme } from "../styles/themeColor";
import SectionTitle from "./sectionTitle";

export default function DataBox(props) {
  const { title, data } = props;
  return (
    <div className="p-4" style={{ background: `rgba(237, 128, 45, 0.1)`, borderRadius: 20 }}>
      <SectionTitle text="🌏 Global Stats" />

      <div>
        <div className="flex">
          <div className="w-full sm:w-1/2 mb-2">
            <h2
              className="text-3xl font-bold sm:text-4xl"
              style={{ color: AppTheme.stdWarning }}
            >
              {formatNumber(data.confirmed.value)}
            </h2>
            <p>Confirmed</p>
          </div>
          <div className="w-full sm:w-1/2 mb-2">
            <h2
              className="text-3xl font-bold sm:text-4xl"
              style={{ color: AppTheme.stdSuccess }}
            >
              {formatNumber(data.recovered.value)}
            </h2>
            <p>Recovered</p>
          </div>
        </div>
        <div>
          <div>
            <h2
              className="text-xl font-bold sm:text-2xl"
              style={{ color: AppTheme.stdDanger }}
            >
              {formatNumber(data.deaths.value)}
            </h2>
            <p>Deceased</p>
          </div>
        </div>
      </div>
    </div>
  );
}