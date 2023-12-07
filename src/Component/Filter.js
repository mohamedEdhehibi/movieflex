import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRef } from 'react';

function Filtered({ handlerOnChange,reset}) {

const RefTille=useRef()
const RefRating=useRef()
const reset2=()=>{
    RefTille.current.value = '';
    RefRating.current.value = '';
    reset()
}

    return (
        <Navbar className="bg-body-tertiary " style={{ marginLeft: 50}}>
            <Form inline>
                <InputGroup>
                    
                    <Form.Control
                    style={{marginRight: 20}}
                        placeholder="Title"
                        aria-describedby="basic-addon1"
                        onChange={(e) => handlerOnChange("title", e.target.value)}
                        ref={RefTille}
                    />
                </InputGroup>
            </Form>
            <Form inline>
                <Row>
                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="Rating"
                            className=" mr-sm-2"
                            onChange={(e) => handlerOnChange("rating", e.target.value)}
                            ref={RefRating}
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="reset" onClick={()=>reset2()}  className='btn btn-danger'>Reset</Button>
                    </Col>
                </Row>
            </Form>
        </Navbar>
    );
}

export default Filtered;