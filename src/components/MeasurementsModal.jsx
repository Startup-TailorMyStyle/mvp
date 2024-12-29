import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setMeasurements } from '../redux/action';

const MeasurementsModal = ({ show, onHide }) => {
    const [height, setHeight] = useState('');
    const [frontImage, setFrontImage] = useState(null);
    const [sideImage, setSideImage] = useState(null);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('front_image', frontImage);
        formData.append('side_image', sideImage);
        formData.append('height', height);

        try {
            const response = await fetch('http://localhost:5000/upload', {
                method: 'POST',
                body: formData,
            });
            const measurements = await response.json();
            dispatch(setMeasurements(measurements));
            onHide();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Body Measurements</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Height (cm)</Form.Label>
                        <Form.Control
                            type="number"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Front Image</Form.Label>
                        <Form.Control
                            type="file"
                            onChange={(e) => setFrontImage(e.target.files[0])}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Side Image</Form.Label>
                        <Form.Control
                            type="file"
                            onChange={(e) => setSideImage(e.target.files[0])}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default MeasurementsModal;