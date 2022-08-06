import React, { Component } from "react";
import Hotels from "./Hotels";
import Filters from "./Filters";

/* stateful component 1 of 6: use the Component class */
class App extends Component {
  /* stateful component 2 of 6: initialize state */
  state = { selectedFilters: [] };
  toggleFilter = (clickedFilterKey) => {
    let newFilters;
    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes to see how the .includes array method works
    const alreadySelected = this.state.selectedFilters.includes(
      clickedFilterKey
    );
    if (alreadySelected) {
      // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter to see how the .filter array method works
      newFilters = this.state.selectedFilters.filter(
        (selectedFilter) => selectedFilter !== clickedFilterKey
      );
    } else {
      // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat to see how the .concat array method works
      newFilters = this.state.selectedFilters.concat(clickedFilterKey);
    }
    /* stateful component 5 of 6: Write event handlers to update state  */
    this.setState({ selectedFilters: newFilters });
  };
  /* stateful component 3 of 6: write a render method */
  render() {
    return (
      <div className="App">
        {/* stateful component 6 of 6: Use state in your JSX  */}
        <Filters
          selectedFilters={this.state.selectedFilters}
          toggleFilter={this.toggleFilter}
        />
        <Hotels selectedFilters={this.state.selectedFilters} />
      </div>
    );
  }
}

export default App;
