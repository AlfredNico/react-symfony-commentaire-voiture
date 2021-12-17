import React, { useState, useEffect } from 'react';
import {  Container, Row, Col, Card} from 'react-bootstrap';
import './DetailsCompoent.css';
import NavbarScreen from '../screens/NavbarScreen';
import { articleService } from '../services/articlesService';
import CommentComponent from './CommentComponent';
import {  Form, Button } from 'react-bootstrap';
import { currentUserValue } from '../services';
import { baseURL } from "../config";


export default function DetailsCompoent({match, history}) {
    const [article, setArticle] = useState(null);
    const [description, setDescription] = useState('');

    const isLogin = currentUserValue() !== null ? true : false;


    const handleSubmit = (e) => {
        e.preventDefault();

        if (description) {
            articleService.postComment(description, match.params.id).then(
                (response) => {
                    article.comment.unshift(response[0]);
                    setArticle(article);
                    setDescription('');
                }
            );
        }
    };


    useEffect(() => {
        if (match.params.id) {
            articleService.getArticleById(match.params.id)
            .then(res => {
                setArticle(res);
            });
        }else history.push('/');
    }, [match, history]);

    return (
        <main>
            <NavbarScreen />

            <Container fluid className='my-5'>
                <Row>
                    <Col>
                    {article && (<Card>
                        <Card.Img variant="top" src={`${baseURL}/${article.imageURL}` } style={{width: '100%'}} />
                        <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        {/* <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text> */}
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">{article.title}</small>
                        </Card.Footer> */}
                    </Card>)}
                    </Col>
                    <Col>
                        <h3>Commentaires</h3>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control disabled={!isLogin} as="textarea" rows={3} placeholder="commentaire" value={description} onChange={e => setDescription(e.target.value)}  />
                            </Form.Group>

                            <Button type='submit' variant="primary" disabled={!isLogin}>Commenter</Button>
                        </Form>
                        

                        {article && <CommentComponent comments={article.comment} />}
                    </Col>
                </Row>
        </Container>
      </main>
    );
}
