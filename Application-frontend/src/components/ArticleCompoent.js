import React, { useEffect } from 'react'
import { CardGroup, Card } from 'react-bootstrap'
import './ArticleCompoent.css'
import {
    Link
  } from "react-router-dom";
import NavbarScreen from '../screens/NavbarScreen'
import { useDispatch, useSelector } from 'react-redux'
import { listAction } from '../redux/actions';
import { baseURL } from "../config";


export default function ArticleCompoent() {

    const dispatch = useDispatch()
    const { isLoading, articles } = useSelector(state => state.listArticleReducer)

    useEffect(() => {
        dispatch(listAction())
    }, [dispatch])

    return (
        <main>
            <NavbarScreen />

            <CardGroup className='m-5'>

            {
                isLoading 
                ? (<div>Loading ...</div>)
                : articles && articles.map(article => (
                    <Card key={article.id} style={{ width: '30rem', boxShadow: '0px 5px 15px rgba(34, 35, 58, 0.2)' }} className='m-3'>
                        <Card.Img variant="top" src={`${baseURL}/${article.imageURL}` } style={{width: '100%'}} />
                        <Card.Body>
                            <Card.Title> {article.title} </Card.Title>
                            <Link variant="primary" to={`/${article.id}`} >Commenter</Link>
                        </Card.Body>
                    </Card>
                ))
            }
            </CardGroup>
        </main>
    )
}
