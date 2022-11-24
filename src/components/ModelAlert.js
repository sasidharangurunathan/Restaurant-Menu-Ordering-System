import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

export class ModelAlert extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         show: false
      }
    }
    handleModal() {
        this.setState({ show: !this.state.show  })
    }
  render() {
    return (
      <div>
      <br/><br/>
        <Button onClick={()=>this.handleModal()}>ClickMe</Button>
        <Modal show={this.state.show} onHide={()=>this.handleModal()}>
            <Modal.Header closeButton >Modal Heading</Modal.Header>
            <Modal.Body>
                Hello Everyone
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>this.handleModal()}>close</Button>
                <Button onClick={()=>this.handleModal()}>Save</Button>
            </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default ModelAlert