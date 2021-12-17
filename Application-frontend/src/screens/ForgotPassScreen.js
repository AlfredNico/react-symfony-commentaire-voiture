import React, { useState,  } from 'react'
import { Link } from 'react-router-dom'
import './LoginScreen.css'


export default function ForgotPassScreen() {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (username) {
            console.log('OK');
        }
    }

    
    return (
        <div className="auth-wrapper">
            <div className="auth-inner">

                <form onSubmit={handleSubmit}>
                    <h3>Mot de passe oublié</h3>

                    <div className="form-group my-3">
                        <label>Adresse e-mail</label>
                        <input type="email" className="form-control" placeholder="Adresse e-mail"  onChange={e => setUsername(e.target.value)}  />
                    </div>

                    <div className="form-group flex_subscription my-3">
                        <div></div>

                        <Link to='/login'>Se connecter</Link>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block w-100">Récuperation mot de passe</button>
                </form>
            </div>
        </div>
    )
}
