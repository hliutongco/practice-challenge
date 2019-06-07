import React, {Component, Fragment} from 'react'

class NumberField extends Component {
  state = {
    showWarning: false
  }

  handleBlur = (event) => {
    // cannot be blank or less than 10 characters after conversion to numbers
    if(!event.target.value || parseInt(event.target.value).toString().length !== 10){
      this.props.toggleInvalidForm(true);
      this.setState({ showWarning: true })
    }
    // below code resets the warning if the user fixes their error
    else if (event.target.value && parseInt(event.target.value).toString().length === 10 && this.state.showWarning) {
      this.props.toggleInvalidForm(false);
      this.setState({ showWarning: false })
    }
  }

  render(){
    return (
      <Fragment>
        <p>{this.state.showWarning ? "Please enter a ten-digit phone number (no dashes)" : null}</p>
        <p>
          {this.props.label} (numbers only, ten digits): <input type="text"
          autoComplete="off"
          pattern="[0-9]{10}"
          name={this.props.name} value={this.props.value}
          onBlur={this.handleBlur}
          onChange={(event) => this.props.handleChange(this.props.name, event.target.value)}/>
        </p>
      </Fragment>
    )
  }
}

export default NumberField;
