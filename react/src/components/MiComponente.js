import React,{Component} from 'react'


class MiComponente extends Component{


    render(){
        let receta = {
            nombre:'Pizza',
            ingredientes: ['tomate','queso','jamon cocido'],
            calorias:400
        };
        return (
            <React.Fragment>
                <h1> receta nombre : {receta.nombre}</h1>
                <h2> calorias: {receta.calorias}</h2>
                
                {
                    receta.ingredientes.map((ingrediente,index)=>{

                        return <li key={index}>
                            {ingrediente}
                        </li>;

                    })
                }
            </React.Fragment>
        );
    }
    
}

export default MiComponente;