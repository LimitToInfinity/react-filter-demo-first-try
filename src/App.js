import React from 'react';
import './App.css';

import FilterForm from './components/FilterForm';
import VisibleDogs from './components/VisibleDogs';




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dogData: [],
      filteredDogs: [],
      filterTerm: "",
    }
  }

  componentDidMount() {
    fetch("https://api.thedogapi.com/v1/breeds")
      .then(response => response.json())
      .then(dogData => this.setState({ dogData, }));
  }

  //create a filterDogs function
  filterDogs = (filterTerm) => {
    const { dogData } = this.state;
    const filteredDogs = dogData.filter(dog => {
      const dogName = dog.name.toLowerCase();
      return dogName.includes(filterTerm.toLowerCase());
    });

    this.setState({ filteredDogs, filterTerm, });
  }

  render() {
    //map through filtered dogs and pass props to VisibleDogs component
    //show VisibleDogs under FilterForm
    const allDogs = this.state.dogData.map((dog, index) => {
      return <VisibleDogs key={index + 1} dog={dog}/>;
    });

    const filteredDogs = this.state.filteredDogs.map((dog, index) => {
      return <VisibleDogs key={index + 1} dog={dog}/>;
    });

    return (
      <div className="App">
        {/* pass props to filter form */ }
        <FilterForm filterDogs={this.filterDogs} />
        {this.state.filterTerm
          ? filteredDogs
          : allDogs
        }
      </div>
    );
  }
}

export default App;
