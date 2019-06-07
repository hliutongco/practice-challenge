import React, {Component} from 'react';
import TextField from './TextField'
import NumberField from './NumberField'
import EmailField from './EmailField'

class App extends Component {

  state = {
    invalidForm: false
  }

  renderTextFields(){
    const textFieldData = [
      { label: "First Name", name: "firstName" },
      { label: "Middle Name", name: "middleName" },
      { label: "Last Name", name: "lastName" }
    ]

    return textFieldData.map(data =>
        <TextField key={data.name}
        label={data.label}
        name={data.name}
        handleBlur={this.handleBlur}
        toggleInvalidForm={this.toggleInvalidForm}
        handleChange={this.handleChange}/>)
  }

  renderNumberFields = () => {
    const numberFieldData = [
      { label: "Home Phone", name: "homePhone" },
      { label: "Work Phone", name: "workPhone" }
    ]

    return numberFieldData.map(data =>
        <NumberField key={data.name}
        label={data.label}
        name={data.name}
        toggleInvalidForm={this.toggleInvalidForm}
        handleChange={this.handleChange}/>)
  }


  renderEmailFields = () => {
    const emailFieldData = [
      { label: "Email Address", name: "email1" },
      { label: "Alternate Email Address", name: "email2" }
    ]

    return emailFieldData.map(data =>
        <EmailField key={data.name}
        label={data.label}
        name={data.name}
        toggleInvalidForm={this.toggleInvalidForm}
        handleChange={this.handleChange}/>)
  }

  toggleInvalidForm = (boolean) => {
    this.setState({invalidForm: boolean})
  }

  handleChange = (key, value) => {
    this.setState({[key]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    // adding below line for people who submit form by pressing Enter
    if(!this.validateForm) return;

    console.log(this.state);
    alert("Form has been submitted!")
  }

  validateForm = () => {
    // Conditional checking if all the mandatory fields were filled out
    // also making sure the form is not invalid
    return !this.state.invalidForm && !!this.state.firstName && !!this.state.lastName && !!this.state.homePhone && !!this.state.email1
  }

  render(){
    // console.log(this.state, this.validateForm());
    return (
      <div>
        <h2>Please fill out the form below.</h2>
        <form autoComplete="new-password" onSubmit={this.handleSubmit}>
          {this.renderTextFields()}
          {this.renderNumberFields()}
          {this.renderEmailFields()}
          <input disabled={this.validateForm() ? "" : "disabled"} type="submit"/>
        </form>
      </div>
    )
  }
}

export default App;
