import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './LoginScreen.css'
import { registerAction } from '../redux/actions/auth.action';


export default function RegistrationScreen({history}) {
    const [user, setUser] = useState({
        email: '',
        password: '',
        confirmPass: ''
    });
    const { isLoading } = useSelector(state => state.registrationReducer);

    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (user.email && user.password && user.confirmPass) {
            dispatch(registerAction(user))
        }
    }

    useEffect(() => {
        if (isLoading) {
            history.push('/login')
        }
    }, [isLoading, history])

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">

                <form onSubmit={handleSubmit}>
                    <h3>S'inscre</h3>

                    <div className="form-group my-3">
                        <label>Adresse e-mail</label>
                        <input type="email" className="form-control" placeholder="Adresse e-mail"  onChange={e => setUser({...user, email: e.target.value})}  />
                    </div>

                    <div className="form-group my-3">
                        <label>Mot de passe</label>
                        <input type="password" className="form-control" placeholder="Mot de passe" onChange={e => setUser({...user, password: e.target.value})} />
                    </div>

                    <div className="form-group my-3">
                        <label>Confirmation mot de passe</label>
                        <input type="password" className="form-control" placeholder="Confirmer le mot de passe" onChange={e => setUser({...user, confirmPass: e.target.value})} />
                    </div>

                    <div className="form-group flex_subscription my-3">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label mx-1" htmlFor="customCheck1">Accepter les termes et conditions</label>
                        </div>

                        <Link to=''>Connecter</Link>
                    </div>

                    <button disabled={isLoading}  type="submit" className="btn btn-primary btn-block w-100">S'inscrire</button>
                </form>
            </div>
        </div>
    )
}
