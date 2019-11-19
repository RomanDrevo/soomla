import React, { Component } from "react";
import style from "./App.module.scss";
import PageLayout from "./components/pageLayout";
import {connect} from "react-redux";
import {fetchItems} from "./store/actions/registerActions";
import ChartsPage from "./page";
import {PARAMS} from "./utils/constatns";




class App extends Component {
  constructor(props) {
    super(props);
    props.fetchItems();
  }

  state = {
    selectedCompany: null
  }


  handleFetchCharts = e => {
    const {fetchItems} = this.props;

    console.log(e.target.id);

    fetchItems({param: e.target.id, country: this.state.selectedCompany})
  };

  handleChange = (e) => {
    this.setState({selectedCompany: e.target.value})
  }



  render() {
    const { data } = this.props;
    return (
      <div className={style["App"]}>
        <PageLayout>
          <header className="App-header">
            <div className="add-new-item-wrapper">
              <select onChange={this.handleChange}>
                <option value="">Select Company</option>
                <option value="KO">The Coca-Cola</option>
                <option value="GE">General Electric</option>
                <option value="MSFT">Microsoft</option>
                <option value="DIS">Walt Disney</option>
              </select>

              <button
                onClick={this.handleFetchCharts}
                id={PARAMS.lastMonth}
                disabled={!this.state.selectedCompany}
              >
                Last 30 days
              </button>

              <button
                onClick={this.handleFetchCharts}
                id={PARAMS.lastWeek}
                disabled={!this.state.selectedCompany}
              >
                Last week
              </button>

              <button
                onClick={this.handleFetchCharts}
                id={PARAMS.lastDay}
                disabled={!this.state.selectedCompany}
              >
                Last day
              </button>

              <button
                onClick={this.handleFetchCharts}
                // id="lastMonth"
                disabled={!this.state.selectedCompany}
              >
                All
              </button>

            </div>
          </header>
          <div className="main-page-content">
            <ChartsPage charts={data} />
          </div>
        </PageLayout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.currData.data,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchItems: param => dispatch(fetchItems(param))
  };
}

export default  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);

