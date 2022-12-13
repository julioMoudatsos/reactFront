import { Component } from "react";
import './form.scss'

export default class FormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="left">
                <img src={"/logo.png"} alt="" />
            </div>
        );
    }
}