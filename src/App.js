import React from "react";

import out_of_tries from "./assets/out-of-tries.gif";
import better_luck_next_time from "./assets/better-luck-next-time.gif";

import help_me from "./assets/help-me.png";

import only_few_tries_left from "./assets/only-few-tries-left.gif";

import let_me_think from "./assets/let-me-think.gif";
import nope from "./assets/nope.webp";
import number_is_incorrect from "./assets/number-is-incorrect.gif";
import number_where_are_you from "./assets/number-where-are-you.gif";
import wrong_again from "./assets/wrong-again.gif";
import where_the_heck_is_this_number from "./assets/where-the-heck-is-this-number.gif";

import got_the_number from "./assets/got-the-number.gif";
import number_found from "./assets/number-found.gif";
import pro from "./assets/pro.jpg";
import yipee_i_got_the_number from "./assets/yipee-i-got-the-number.gif";
import yipee_number_found from "./assets/yipee-number-found.gif";

const found = [
  got_the_number,
  number_found,
  pro,
  yipee_i_got_the_number,
  yipee_number_found
];
const wrong = [
  let_me_think,
  nope,
  number_is_incorrect,
  number_where_are_you,
  wrong_again,
  where_the_heck_is_this_number
];

const twoTriesleft = [only_few_tries_left];
const oneTryleft = [help_me];

const nextTime = [out_of_tries, better_luck_next_time];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      computerNumber: Math.floor(Math.random() * 101),
      message: "",
      image: "",
      i: 1,
      tries: 5,
      supportingText: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkNumber = this.checkNumber.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  checkNumber() {
    const userNumber = parseInt(this.state.value);
    const { computerNumber } = this.state;
    let { i } = this.state;
    if (userNumber.length === 0) {
      this.setState({
        supportingText: "Enter the number"
      });
      return;
    }
    if (userNumber === computerNumber) {
      this.setState({
        message: "Congrats you win in " + i + " tries",
        image: found[Math.floor(Math.random() * 5)],
        supportingText: "I am a Pro at this"
      });
    } else {
      if (i === this.state.tries) {
        this.setState({
          message: `Oops! you are out of tries. The number was: ${computerNumber}`,
          image: nextTime[Math.floor(Math.random() * 2)],
          supportingText: "No this can't happen to me !"
        });
      } else {
        if (userNumber >= computerNumber - 10 && userNumber <= computerNumber) {
          if (this.state.tries - i === 2) {
            this.setState({
              message:
                "The number is low, but you are very close to the number! tries left: " +
                (this.state.tries - i),
              image: twoTriesleft[0],
              supportingText: "Carefull only 2 tries are left!"
            });
          } else if (this.state.tries - i === 1) {
            this.setState({
              message:
                "The number is low, but you are very close to the number! tries left: " +
                (this.state.tries - i),
              image: oneTryleft[0],
              supportingText: "Last Chance!"
            });
          } else {
            this.setState({
              message:
                "The number is low, but you are very close to the number! tries left: " +
                (this.state.tries - i),
              image: wrong[Math.floor(Math.random() * 6)],
              supportingText: "Ooh my dear number, where are you !?"
            });
          }
        } else if (
          userNumber >= computerNumber &&
          userNumber <= computerNumber + 10
        ) {
          if (this.state.tries - i === 2) {
            this.setState({
              message:
                "The number is low, but you are very close to the number! tries left: " +
                (this.state.tries - i),
              image: twoTriesleft[0],
              supportingText: "Carefull only 2 tries are left!"
            });
          } else if (this.state.tries - i === 1) {
            this.setState({
              message:
                "The number is low, but you are very close to the number! tries left: " +
                (this.state.tries - i),
              image: oneTryleft[0],
              supportingText: "Last Chance!"
            });
          } else {
            this.setState({
              message:
                "The number is high, but you are getting close! tries left: " +
                (this.state.tries - i),
              image: wrong[Math.floor(Math.random() * 6)],
              supportingText: "Number are you high ?"
            });
          }
        } else if (userNumber >= computerNumber) {
          if (this.state.tries - i === 2) {
            this.setState({
              message:
                "The number is low, but you are very close to the number! tries left: " +
                (this.state.tries - i),
              image: twoTriesleft[0],
              supportingText: "Carefull only 2 tries are left!"
            });
          } else if (this.state.tries - i === 1) {
            this.setState({
              message:
                "The number is low, but you are very close to the number! tries left: " +
                (this.state.tries - i),
              image: oneTryleft[0],
              supportingText: "Last Chance!"
            });
          } else {
            this.setState({
              message: "Too high! tries left: " + (this.state.tries - i),
              image: wrong[Math.floor(Math.random() * 6)],
              supportingText: "Idiot you are making the number high !"
            });
          }
        } else if (userNumber <= computerNumber) {
          if (this.state.tries - i === 2) {
            this.setState({
              message:
                "The number is low, but you are very close to the number! tries left: " +
                (this.state.tries - i),
              image: twoTriesleft[0],
              supportingText: "Carefull only 2 tries are left!"
            });
          } else if (this.state.tries - i === 1) {
            this.setState({
              message:
                "The number is low, but you are very close to the number! tries left: " +
                (this.state.tries - i),
              image: oneTryleft[0],
              supportingText: "Last Chance!"
            });
          } else {
            this.setState({
              message: "Too low! tries left: " + (this.state.tries - i),
              image: wrong[Math.floor(Math.random() * 6)],
              supportingText: "hey bhagwan! na number mill ra h aur na he woh!"
            });
          }
        }
      }
      this.setState({ i: i + 1 });
    }
  }
  render() {
    return (
      <>
        <div style={{ width: "80%", margin: "80px auto" }}>
          <h1 style={{ textAlign: "center" }}>Guess the number</h1>
          <center>
            <input
              type="number"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Enter the number"
              style={{
                borderRadius: "8px",
                border: "1.5px double #ddd",
                padding: "8px 15px",
                width: "60%"
              }}
            />
          </center>
          <br />
          <center>
            <button
              onClick={this.checkNumber}
              style={{
                padding: "10px 15px",
                borderRadius: "8px",
                backgroundColor: "#52a032",
                color: "#fff",
                border: "none",
                cursor: "pointer"
              }}
            >
              Check number
            </button>
          </center>
          <center>
            <p>{this.state.message}</p>
            <div>
              <img src={this.state.image} alt={"Some text"} />
              <br />
              <h3>{this.state.supportingText}</h3>
            </div>
          </center>
        </div>
      </>
    );
  }
}

export default App;
