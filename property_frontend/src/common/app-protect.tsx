import React, { useState } from 'react';
import './app-protect.scss';

interface IProtectorProps {
    onSecured: Function;
}

export default ({ onSecured }: IProtectorProps) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSecured, setSecured] = useState(sessionStorage.getItem('IS_SECURED'));
    const handleSubmit = (e: any) => {
        e.preventDefault();
        setError('');
        console.log(process.env)
        if (process.env.PASSWORD === password) {
            sessionStorage.setItem('IS_SECURED', 'true');
            onSecured('true');
            setSecured('true');
        } else {
            setError('Incorrect Password');
        }
    };
    return isSecured !== 'true' ? (
        <>
            <div className="modal">
                <div className="modal_content">
                    <div className="header">This site is protected</div>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-3">
                            <input
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                className="form-control w-75 m-auto"
                                placeholder="Please Enter Your Password"
                            />
                            {error && <p className="w-75 m-auto text-danger">{error} </p>}
                            <button
                                type="button"
                                className="btn btn-primary w-100 mt-3 rounded-0"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="overlay"></div>
        </>
    ) : (
        <div></div>
    );
};
