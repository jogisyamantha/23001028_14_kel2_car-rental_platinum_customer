import React from "react";
import "./styles.css"
import Form from 'react-bootstrap/Form';
import chevronRight from "../../assets/chevron-right.svg"
import { Col, Row, Button } from "react-bootstrap";

const CreateNewCar = () => {
    return (
        <div className="addcar-container">
            <div className="breadcrumb">
                <h4 className="breadcrumb-text-1">Cars</h4>
                <img src={chevronRight} alt="" />
                <h4 className="breadcrumb-text-1">List Car</h4>
                <img src={chevronRight} alt="" />
                <h5 className="breadcrumb-text-2">Add New Car</h5>
            </div>
            <div>
                <h2 className="car-sub-title">Add New Car</h2>
            <div className="addcar-input-container">
                <div className="addcar-input-form">
                    <Form.Group as={Row} className="mb-3" controlId="formName">
                        <Form.Label column sm="2" className="custom-label">Nama/Tipe Mobil<span className="asterisk">*</span></Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Input Nama/Tipe Mobil" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPrice">
                        <Form.Label column sm="2" >Harga<span className="asterisk">*</span></Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Input Harga Sewa Mobil" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formImage">
                        <Form.Label column sm="2">Kategori<span className="asterisk">*</span></Form.Label>
                        <Col sm="10">
                            <Form.Control type="file" placeholder="Upload Foto Mobil" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formImage">
                        <Form.Label column sm="2">Kategori<span className="asterisk">*</span></Form.Label>
                        <Col sm="10">
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        </Col>
                    </Form.Group>
                    <div className="addcar-input-form-2">
                        <p>Created at</p>
                        <p>-</p>
                    </div>
                    <div className="addcar-input-form-2">
                        <p>Update at</p>
                        <p>-</p>
                    </div>
                </div>
            </div>
            <div className="button-container">
                <button className="button-cancel">Cancel</button>
                <button className="button-save">Save</button>
            </div>
            </div>
        </div>
    )
}

export default CreateNewCar