import React, {useState} from "react";
import './LoginForm.css';

export const LoginForm = ({onLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <div className="login-container" onSubmit={(e) => {
        e.preventDefault();
        onLogin(email, password);
    }
    }>
        <form className="login-form" onSubmit={() => {
        }}>
            <input type="email" name="email" placeholder="Email" value={email}
                   onChange={e => setEmail(e.target.value)}/>
            <input autoComplete="on" type="password" placeholder="Password" value={password}
                   onChange={e => setPassword(e.target.value)}/>
            <button type="submit">Sign in</button>
        </form>
    </div>
}
