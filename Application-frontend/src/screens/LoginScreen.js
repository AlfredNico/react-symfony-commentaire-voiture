import React, { useState, useEffect } from 'react'
import { loginAction } from '../redux/actions/auth.action';
import { useDispatch, useSelector } from 'react-redux'

import './LoginScreen.css'
import { Link } from 'react-router-dom';
// import { history } from '../utilis';
// import { InputGroup,FormControl, Button } from 'react-bootstrap'


export default function LoginScreen({history}) {

    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })

    const dispatch = useDispatch()
    const { isLoading } = useSelector(state => state.authReducer);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (loginForm.username && loginForm.password) {
            dispatch(loginAction({...loginForm}))
        }
    }

    useEffect(() => {
        if (isLoading) {
            history.push('/')
        }
    }, [isLoading, history])

    // const [type, setType] = useState('password')
    
    // const showHide = (e) => {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     this.setState({
    //         type: this.state.type === 'text' ? 'password' : 'text'
    //     });
    //     this.input.focus();
    // }

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">

                <form onSubmit={handleSubmit}>
                    <h3>Se connecter</h3>

                    <div className="form-group my-3">
                        <label>Adresse e-mail</label>
                        <input type="email" className="form-control" placeholder="Adresse e-mail" value={loginForm.username}  onChange={e => setLoginForm(loginForm => ({...loginForm, username: e.target.value}))}  />
                    </div>

                    <div className="form-group my-3">
                        <label>Mot de passe</label>
                        <input type="password" className="form-control" placeholder="Mot de passe" value={loginForm.password} onChange={e => setLoginForm(loginForm => ({...loginForm, password: e.target.value}))} />
                    </div>

                    {/* <div>
                        <InputGroup className='mt-3'>
                            <FormControl
                                id={'Password'}
                                size="lg"
                                type='password'
                                placeholder="Password"
                                className="pass-wrapper"
                            />
                            <InputGroup.Text>
                                <i className={'fas fa-eye-slash'}></i>
                            </InputGroup.Text>
                        </InputGroup>
                    </div> */}

                    <div className="form-group flex_subscription my-3">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label  mx-2" htmlFor="customCheck1 mx-1">Restez-connecter</label>
                        </div>

                        <Link to='/register'>s'incrire</Link>
                    </div>

                    <button disabled={isLoading} type="submit" className="btn btn-primary btn-block w-100">Connecter</button>
                    <p className="forgot-password text-right">
                        <Link to="/forgot-passe">Mot de passe oublié ?</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
