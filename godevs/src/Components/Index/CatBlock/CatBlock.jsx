import { Component } from "react"


export default class CatBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.type,
            name: props.name,
            descricao: props.descricao
        };
    }
    render() {
        return (
            <div className="cardCat">
              <p>{this.state.type}</p>
              <h3>{this.state.name}</h3>
              <h4>
                {this.state.descricao}
              </h4>
            </div>
        );
    }
}