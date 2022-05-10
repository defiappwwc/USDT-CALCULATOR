import React, { useState } from "react";
import "./App.css";
import "./index.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Slider from "react-input-slider";


const SIP = () => {
  const [sip, setAmount] = useState("");
  const [sippercent, setPercent] = useState("");

  const handleInput = (e,f) => {
    setAmount(e.target.value);
    // setPercent(e.target.value);
    var principal = e.target.value;
    var period = years.x;
    var freq = 1;
    var totalmonths = period * 12;
    var total_amount_invested = totalmonths * principal;
    var rateofreturn = sippercent;
    var instalment_amount = principal;
    var no_of_compounding_periods = (12 / freq) * period;
    var int_rate_per_period = rateofreturn / (12 / freq) / 100;
    var expected_amount_on_maturity =
      instalment_amount *
      ((Math.pow(1 + int_rate_per_period, no_of_compounding_periods) - 1) /
        int_rate_per_period) *
      (1 + int_rate_per_period);
      document.getElementById(
        "totalInvested"
      ).value = total_amount_invested.toFixed(2);
    document.getElementById(
      "expectedAmount"
    ).value = expected_amount_on_maturity.toFixed(2);
    // console.log(e.target.value);
    // var expected_amount_on_maturity =  instalment_amount*((Math.pow(1+int_rate_per_period, no_of_compounding_periods)-1)/int_rate_per_period)*(1+int_rate_per_period);
    
  };
  const handlepercent = (e) => {
    setPercent(e.target.value);
    var principal = sip;
    var period = years.x;
    var freq = 1;
    var rateofreturn = e.target.value;
    var instalment_amount = principal;
    var no_of_compounding_periods = (12 / freq) * period;
    var int_rate_per_period = rateofreturn / (12 / freq) / 100;
    // var total_amount_invested = period*12*instalment_amount;
    var expected_amount_on_maturity =
      instalment_amount *
      ((Math.pow(1 + int_rate_per_period, no_of_compounding_periods) - 1) /
        int_rate_per_period) *
      (1 + int_rate_per_period);
    document.getElementById(
      "expectedAmount"
    ).value = expected_amount_on_maturity.toFixed(2);
    console.log("percent function called");
  };

  const [years, setState] = useState({ x: 2 });
  const handleslider = (x) => {
    setState({ x: parseFloat(x.toFixed(2)) })
    var principal = sip;
    var period = x;
    var freq = 1;
    var totalmonths = period * 12;
    var total_amount_invested = totalmonths * principal;
    var rateofreturn = sippercent;
    var instalment_amount = principal;
    var no_of_compounding_periods = (12 / freq) * period;
    var int_rate_per_period = rateofreturn / (12 / freq) / 100;
    var expected_amount_on_maturity =
      instalment_amount *
      ((Math.pow(1 + int_rate_per_period, no_of_compounding_periods) - 1) /
        int_rate_per_period) *
      (1 + int_rate_per_period);
      document.getElementById(
        "totalInvested"
      ).value = total_amount_invested.toFixed(2);
    document.getElementById(
      "expectedAmount"
    ).value = expected_amount_on_maturity.toFixed(2);
  }
          
  return (
    <div className="calculator">
      <center><h1>USDT SIP Calculator</h1></center>
      <Tabs>
        <TabList>
          <Tab>Monthly SIP</Tab>
          <Tab>Target Amount</Tab>
        </TabList>

        <TabPanel>
          <div>
            <h2>Amount</h2>
            <input
              id="amtinvested"
              type="number"
              placeholder="Enter the amount"
              value={sip}
              onChange={handleInput}
            />
            <h2>Return Percent</h2>
            <input
              id="rateofreturn"
              type="number"
              placeholder="Enter the percent"
              value={sippercent}
              onChange={handlepercent}
            />

            <div className="duration">{"Duration of investing Years: " + years.x}</div>
            <Slider
              axis="x"
              xstep={1}
              xmin={0}
              xmax={7}
              x={years.x}
              onChange={({ x }) => handleslider(x)}
            />
            <h2>Total amount invested:</h2>
            <input id="totalInvested" />
            <h2>Total amount expected in maturity</h2>
            <input id="expectedAmount" />
          </div>
        </TabPanel>
        <TabPanel>
        <div>
            <h2>Amount</h2>
            <input
              id="amtinvested"
              type="number"
              placeholder="Enter the amount"
              value={sip}
              onChange={handleInput}
            />
            <h2>Return Percent</h2>
            <input
              id="rateofreturn"
              type="number"
              placeholder="Enter the percent"
              value={sippercent}
              onChange={handlepercent}
            />

            <div className="duration">{"Duration of investing Years: " + years.x}</div>
            <Slider
              axis="x"
              xstep={1}
              xmin={0}
              xmax={7}
              x={years.x}
              onChange={handleslider}
            />
            <h2>Total amount invested:</h2>
            <input id="totalInvested" />
            <h2>Total amount expected in maturity</h2>
            <input id="expectedAmount" />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SIP;
