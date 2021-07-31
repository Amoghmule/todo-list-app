import React, { Component } from "react";

class Main extends Component {
  state = {
    currentValue: "",
    taskList: [],
  };

  handleSubmit = () => {
    let taskList = [...this.state.taskList];
    let currentValue = this.state.currentValue;

    if (this.state.currentValue !== "") {
      taskList.push({ id: taskList.length, data: currentValue });
      console.log(taskList);
      this.setState({ taskList });
    }
  };

  handleChange = (e) => {
    let currentValue = e.target.value;
    this.setState({ currentValue });
  };

  render() {
    return (
      <div className="main">
        <label htmlFor="item-text">Enter text here: </label>
        <input
          type="text"
          name="item-text"
          onChange={(e) => this.handleChange(e)}
        />
        <button type="submit" onClick={this.handleSubmit}>
          add
        </button>
        {this.state.taskList.map((item) => (
          <h5 key={item.id}>{item.data}</h5>
        ))}
      </div>
    );
  }
}

export default Main;
