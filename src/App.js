import { Component } from "react";
import Button from "./btn/Button";

class App extends Component {
  render() {
    return (
      <div>
        <Button label="Button One" color="red" />
        <Button label="Button Two" color="green" />
      </div>
    );
  }
}
export default App;
