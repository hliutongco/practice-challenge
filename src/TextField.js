import React, {Component, Fragment} from 'react'

class TextField extends Component {
  state = {
    showWarning: false
  }

  handleBlur = (event) => {
    if(!event.target.value){
      this.props.toggleInvalidForm(true);
      this.setState({ showWarning: true })
    }
    // below code resets the warning if the user fixes their error
    else if (event.target.value && this.state.showWarning) {
      this.props.toggleInvalidForm(false);
      this.setState({ showWarning: false })
    }
  }

  render(){
    return (
      <Fragment>
        <p>{this.state.showWarning ? "Please fill out the below field" : null}</p>
        <p>
          {this.props.label}: <input type="text"
          name={this.props.name} value={this.props.value}
          onBlur={this.handleBlur}
          onChange={(event) => this.props.handleChange(this.props.name, event.target.value)}/>
        </p>
      </Fragment>
    )
  }
}

export default TextField;
