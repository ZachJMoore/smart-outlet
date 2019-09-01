const { Components } = require("passeljs");

class Lights extends Components.Base {
  constructor(props) {
    super(props);

    this.state = {
      isOn: false
    };

    const clear = () => {
      this.setOutlets(0);
      process.nextTick(function() {
        process.exit(0);
      });
    };

    process.on("SIGINT", clear);
    process.on("exit", clear);
    process.on("uncaughtException", clear);

    this.Gpio = require("onoff").Gpio;
    this.outlets = [
      new this.Gpio(0, "out"),
      new this.Gpio(5, "out"),
      new this.Gpio(6, "out"),
      new this.Gpio(13, "out"),
      new this.Gpio(19, "out"),
      new this.Gpio(26, "out"),
      new this.Gpio(16, "out"),
      new this.Gpio(20, "out")
    ];
  }

  setOutlets(value) {
    if (typeof value === "number") {
      if (value === 1) value = 0;
      else value = 1;

      this.outlets.forEach(outlet => {
        outlet.writeSync(value);
      });
    }
  }

  componentWillMount() {
    this.setOutlets(0);
    console.log("Component 'Lights' will mount");

    this.stateChanged.on("isOn", isOn => {
      this.setOutlets(isOn ? 1 : 0);
    });

    setInterval(() => {
      const hours = new Date().getHours();
      if (hours === 7 || hours === 8) {
        this.setState({ isOn: true });
      } else {
        this.setState({ isOn: false });
      }
    }, 5 * 1000);
  }

  componentDidMount() {
    console.log("Component 'Lights' did mount");
  }
}

module.exports = Lights;
