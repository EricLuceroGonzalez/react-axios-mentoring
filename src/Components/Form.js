import React, { Component } from "react";
import axios from "axios";
import cogoToast from "cogo-toast";
// import "./formStyle.css";
import {
  // Container,
  // ButtonGroup,
  Button,
  // Form,
  FormGroup,
  Label,
  Input,
  Badge
} from "reactstrap";

const inputSty = {
  outline: "none",
  display: "block",
  background: "rgba(1,1,1, 0.1)",
  width: "100%",
  border: "0",
  borderRadius: "4px",
  padding: "2px 20px",
  color: "gray",
  fontFamily: "inherit",
  fontSize: "0.65em",
  fontWeight: "500",
  lineHeight: "inherit",
  transition: "0.3s ease"
};

const labelSty = {
  display: "block",
  margin: "8px 10px 3px 5px",
  color: "gray",
  fontSize: "0.75em",
  lineHeight: "1",
  textTransform: "uppercase",
  letterSpacing: ".2em"
};

class FormComponent extends Component {
  state = {
    genero: '',
    sinopsis: '',
    titulo: '',
    duracion: '',
    year: '',
  };

  inputChange = e => {
    e.preventDefault();
    console.log(e.target);
  
    const name = e.target.attributes.name.value;
    const value = e.target.value;

    // console.log(e.target);
    console.log(name);
    console.log(value);
    this.setState({ [name]: value });

    console.log(this.state);
  };

  sendData = () => {
    axios
      .post('http://localhost:8000/crear/pelicula', this.state)
      .then(res => {
        // console.log({ mensaje: "Post exitoso", response: res.data });
        const { hide } = cogoToast.info(
          <div style={{ color: "rgba(63,10,88,1)" }}>
            <b>Gracias!</b>
            <div
              style={{
                fontFamily: "Montserrat-ExtraBoldItalic",
                color: "rgba(71,15,244,1)",
                fontSize: "1.5em"
              }}
            >
            </div>
          </div>,
          {
            position: "bottom-right",
            heading: "Gracias!",
            onClick: () => {
              hide();
              // window.location = "/";
            }
          }
        );
        this.setState({
          genero: '',
          sinopsis: '',
          titulo: '',
          duracion: '',
          year: ''
        });
      })
      .catch(err => {
        const { hide } = cogoToast.error(
          <div style={{ color: "rgba(63,10,88,1)" }}>
            <b>Espera!</b>
            <div>Hacen falta campos por llenar</div>
          </div>,
          {
            position: "bottom-right",
            hideAfter: 3,
            onClick: () => {
              hide();
              // window.location = "/";
            }
          }
        );
      });
  };
  render() {
    return (
      <div
        className="col-12 mr-auto ml-auto"
        style={{
          fontFamily: "Montserrat-ExtraBoldItalic",
          fontSize: "0.85em",
          marginTop: "15px",
          marginBottom: "35px"
        }}
      >




        <div className="col-12 mr-auto ml-auto">
          <FormGroup className="col-12">
            <Label style={labelSty} for="exampleName">
              Titulo
            </Label>
            <Input
              onChange={event => this.inputChange(event)}
              type="text"
              style={inputSty}
              name="titulo"
            ></Input>
          </FormGroup>
        </div>








        <div className="col-12 mr-auto ml-auto">
          <FormGroup className="col-12">
            <Label style={labelSty} for="exampleName">
              Duracion
              <div className="subbt">(en minutos)</div>
            </Label>
            <Input
              onChange={event => this.inputChange(event)}
              type="text"
              style={inputSty}
              name="duracion"
            ></Input>
          </FormGroup>
        </div>

        <div className="col-12 mr-auto ml-auto">
          <FormGroup className="col-12">
            <Label style={labelSty} for="exampleName">
              Genero
            </Label>
            <Input
              onChange={event => this.inputChange(event)}
              type="text"
              style={inputSty}
              name="genero"
            ></Input>
          </FormGroup>
        </div>

        <div className="col-12 mr-auto ml-auto">
          <FormGroup className="col-12">
            <Label style={labelSty} for="exampleName">
              Sinopsis
            </Label>
            <textarea
              rows="5"
              min="5"
              max="99"
              onChange={event => this.inputChange(event)}
              style={inputSty}
              type="text"
              name="sinopsis"
              placeholder="Sinopsis"
            />
          </FormGroup>
        </div>

        <div className="col-12 mr-auto ml-auto">
          <FormGroup className="col-12">
            <Label style={labelSty} for="exampleName">
              Year
            </Label>
            <Input
              onChange={event => this.inputChange(event)}
              type="number"
              style={inputSty}
              name="year"
            ></Input>
          </FormGroup>
        </div>

{/**
        <div className="col-12 mr-auto ml-auto">
          <FormGroup className="col-12">
            <Label style={labelSty}>Numero de directores:</Label>
            <Input
              onChange={event => this.inputChange(event)}
              type="number"
              style={inputSty}
              name="directoresNum"
            ></Input>
          </FormGroup>
        </div> */}




        <Button
          style={{ marginTop: "1.5em", backgroundColor: "rgba(71,15,244,1)" }}
          //   className={this.state.activeThumb ? "jello-horizontal" : "none"}
          onClick={this.sendData}
        >
          Enviar
        </Button>



      </div>
    );
  }
}

export default FormComponent;

// titulo: { type: String, required: true },
// duracion: { type: Number, required: false },
// sinopsis: { type: String, required: false },
// year: { type: Number, required: true },
// genero: { type: String, required: false },
// uploadDate: {type: Date, default: Date.now},
// directores: {
//   director: [
//     {
//       name: String,
//       edad: { type: Number, require: false },
//       nacionalidad: {
//         type: String,
//         require: false
//       }
//     }
//   ]
// }
