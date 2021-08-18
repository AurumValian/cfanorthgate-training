import React, { Component } from 'react';
import './App.css';
import Category from "./Category"
import Logo from "./Logo"
import categories from "./data"


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
          <Logo />
        </header>
        {this.state.page === "main" && (
          <section className="category-buttons">
            {categories.map(category => {
              return (<Category type={category.type} subcategories={category.subcategories} toSubcategories={this.toSubcategories}/>)
            })}
            <Category />
            <Category />
            <Category />
          </section>
        )}
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
