import React, { Component } from 'react';
import './App.css';
import Category from "./Category"

class App extends Component {
  constructor() {
    super()

    this.state = {
      page: "main",
      type: ""
    }

    this.toSubcategories = this.toSubcategories.bind(this);
  }

  toSubcategories(event) {
    this.setState({page: "sub", type: event.target.innerText})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Chick-Fil-A
        </header>
        <section className="category-buttons">
          <Category type="Biscuits" toSubcategories={this.toSubcategories} color="blue"/>
          <Category type="Prep" toSubcategories={this.toSubcategories}/>
          <Category />
          <Category />
          <Category />
          <Category />
        </section>
        {this.state.page === "sub" && (
          <section>
            {this.state.type}
          </section>
        )}
      </div>
    );
  }
}

export default App;
