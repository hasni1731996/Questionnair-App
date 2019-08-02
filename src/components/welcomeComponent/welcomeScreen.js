import React,{Component} from 'react'
import {Button, Modal} from "react-bootstrap";
import axios from 'axios'


class Welcome extends Component{

    constructor(props) {

        super(props);
        this.state = {
            modalVisible: false,
            questionsData:[]
        };
        this.openModal = this.openModal.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    openModal() {
        // console.log("Open modal called ", this.state.modalVisible);
        this.setState({
            modalVisible:true
        });
        // console.log('request api');
        axios.get('http://127.0.0.1:8000/food/questions_list/')
            .then(response => {
                console.log('Fatch Data',response.data);
                this.setState({questionsData:response.data})
            }

            ).catch(response => console.log('Error',response))

    }

    handleClose(){
        const modalVisible = !this.state.modalVisible;
        this.setState({
            modalVisible
        });

    }

    render(){
        console.log('questions',Object.keys(this.state.questionsData)[0]);
        return(
            <div id="wrapper" className="one-edge-shadow">
                <h1 style={{marginTop:'150px'}}>Welcome to FoodApp</h1>

                <Button variant="primary"  onClick={this.openModal}>
                   Go
                </Button>

                <Modal show={this.state.modalVisible} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Food App Questionnaire</Modal.Title>
                    </Modal.Header>
                    { this.state.questionsData &&<Modal.Body>Q:1 {this.state.questionsData.questions}</Modal.Body>}
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        {/*<Button variant="primary" onClick={this.handleClose}>*/}
                        {/*    Save Changes*/}
                        {/*</Button>*/}
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

}

export default Welcome;