import React, { Component } from 'react';
import axios from 'axios';
import DisplayImageFromServer from '../displayImageFromServer/displayImageFromServer';
 
class DisplayName extends Component {
    constructor(props){
        super(props)
        this.state = {image : []};
    }

    componentDidMount() {
        this.ImagesList();
      }
    ImagesList(){
        axios.get('http://127.0.0.1:5000/api/images_to_load')
        .then((res) =>{ 
            this.setState({ image: res.data});
        });
        

    }
    render() {
    
        return (
          <div id="layout-content" className="layout-content-wrapper">
                {this.state.image.map((imagen) => {
              return (
                  <div>
                  <DisplayImageFromServer name={imagen}/>
                  </div>
            )})}
          </div>
        );
    }
}
 
export default DisplayName;
