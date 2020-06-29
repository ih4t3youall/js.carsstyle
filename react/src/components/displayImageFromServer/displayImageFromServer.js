import React, { Component } from 'react';
import axios from 'axios';
import './thumballi.css'

class DisplayImageFromServer extends Component {
  state = { source: null };

  name = this.state.imagen;
  componentDidMount() {
    axios
      .get(
        'http://127.0.0.1:5000/api/get_image/'+this.props.name,
        { responseType: 'arraybuffer' },
      )
      .then(response => {
        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            '',
          ),
        );
        this.setState({ source: "data:;base64," + base64 });
      });
  }

  render() {

    return (
      <div>
        <h1>Nombre: {this.props.name}</h1>
        <img className="image" src={this.state.source} />
      </div>
    );
  }
}

export default DisplayImageFromServer;
