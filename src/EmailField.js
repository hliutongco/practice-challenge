import React, {Component, Fragment} from 'react'

class EmailField extends Component {
  state = {
    showWarning: false
  }

  handleBlur = (event) => {
    // email address needs to include the @ symbol
    if(!event.target.value.includes("@")){
      this.props.toggleInvalidForm(true);
      this.setState({ showWarning: true })
    }
    // below code resets the warning if the user fixes their error
    else if(event.target.value.includes("@") && this.state.showWarning) {
      this.props.toggleInvalidForm(false);
      this.setState({ showWarning: false })
    }
  }

  render(){
    return (
      <Fragment>
        <p>{this.state.showWarning ? "Please enter a valid email" : null}</p>
        <p>
          {this.props.label}: <input type="email"
          name={this.props.name} value={this.props.value}
          onBlur={this.handleBlur}
          onChange={(event) => this.props.handleChange(this.props.name, event.target.value)}/>
        </p>
      </Fragment>
    )
  }
}

export default EmailField;
