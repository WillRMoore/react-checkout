import React, { Component } from "react";
import "./PaymentForm.css";
import Input from "./Input";

class PaymentForm extends Component {
  render() {
    return (
      <div className="payment-form">
        <h2>Payment Information</h2>
        <form>
          <Input
            type="text"
            name="name"
            placeholder="John Doe"
            label="NAME ON CREDIT CARD"
          />
          <Input
            type="number"
            name="card-number"
            placeholder="0000 0000 0000 0000"
            label="CREDIT CARD NUMBER"
          />

          <div className="expires-input">
            <div>
              <p className="expires-on-label">EXIRES ON</p>
              <select>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </select>
            </div>
            <div>
              <label className="cvc-label" for="cvc">
                CVC
              </label>
              <input
                className="cvc-number"
                type="number"
                name="cvc"
                placeholder="000"
                min="100"
                max="999"
              />
            </div>
          </div>

          <Input type="Submit" name="submit" value="PLACE ORDER" />
        </form>
      </div>
    );
  }
}

export default PaymentForm;
