import React, {Component} from 'react';
import {connect} from "react-redux";


class ChartsPage extends Component {

  render() {
    const {} = this.props;
    return (
      <div>Charts page</div>
    );
  }
}


// function mapStateToProps(state) {
//   return {};
// }


export default connect(null, {})(ChartsPage);
