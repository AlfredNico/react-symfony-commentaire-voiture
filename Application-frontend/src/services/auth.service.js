import { baseURL } from "../config";
import { handleResponse } from "./handleResponse";

import { BehaviorSubject } from 'rxjs';

export const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')));
export const currentUser = currentUserSubject.asObservable()
export function  currentUserValue() { return currentUserSubject.value }

export const loginService = ({username, password}) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${baseURL}/api/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                currentUserSubject.next(user)
                return user;
            }
        });
}

export const registerService = user => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${baseURL}/api/register`, requestOptions)
        .then(handleResponse)
        .then(response => {
            if (response && response.message) {
                return response;
            }
        });
}

export const logoutService = () =>  {
    localStorage.removeItem('user');
    currentUserSubject.next(null)
}