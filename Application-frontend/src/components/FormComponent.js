import React, { useState } from 'react'
import {  Form, Button } from 'react-bootstrap'
import './DetailsCompoent.css'

export default function FormComponent() {
const [comment, setComments] = useState('')

    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Commentaire</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="commentaire" />
            </Form.Group>

            <Button variant="primary">Commenter</Button>
        </Form>
    )
}
