import React, { Component } from "react";
import SearchCitiesComponent from "../../components/SearchCitiesComponent/SearchCitiesComponent";
import { connect } from "react-redux";
import { getAllTheCities } from "../../store/action-creators/cityActions";

class SearchCitiesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      data: [],
      citiesFilter: [],
      citiesArray: [],
      cityNotFound: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.filterCities = this.filterCities.bind(this);
  }

  async handleChange(e) {
    e.preventDefault();
    await this.setState({ inputValue: e.target.value });
    // console.log(this.state.inputValue)
    this.filterCities();
  }

  async UNSAFE_componentWillMount() {
    await this.props.getAllCities();
    this.setState({
      data: this.props.ciudades.citiesReducer.citiesArray,
      citiesFilter: this.props.ciudades.citiesReducer.citiesArray
    });
  }

  filterCities() {
    if (this.state.data && this.state.inputValue !== "") {
      let citiesArray = this.state.citiesFilter.ciudadesFromRoutes.filter(
        ciudad =>
          this.state.inputValue.toLowerCase() ===
          ciudad.name.toLowerCase().slice(0, this.state.inputValue.length)
      );
      this.setState({ data: { ciudadesFromRoutes: citiesArray } });
      
      this.setState({ cityNotFound: citiesArray.length === 0 })

    } else {
      this.setState({ data: this.props.ciudades.citiesReducer.citiesArray, cityNotFound: false });
    }
  }

  render() {
    console.log("Soy props", this.props)
    return (
      <div>
        <SearchCitiesComponent
          data={this.state.data}
          cityNotFound={this.state.cityNotFound}
          cityFilter={this.state.cityFilter}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ciudades: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllCities: () => dispatch(getAllTheCities())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchCitiesContainer);
