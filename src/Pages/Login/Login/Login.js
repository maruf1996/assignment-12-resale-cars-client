import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import './Login.css';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const { signIn,signInGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }

    const handleSignInGoogle=()=>{
        signInGoogle()
        .then(result => {
            const user = result.user;
            const accountType='user';
            saveUser(user.displayName,user.email,accountType);
            navigate(from, { replace: true });
            toast('User Created Successfully.')
        })
        .catch(error => {
            console.log(error.message)
            setLoginError(error.message);
        });
    }

    const saveUser = (name, email,accountType) =>{
        const user ={name, email,accountType};
        fetch('https://resale-cars-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }

    return (
      <div className="login_container">
         <div className="login_form">
        <h1 className='text-center mb-5 fw-bold fs-1 text-danger'>Login</h1>
        <button onClick={handleSignInGoogle} className='p-2 border border-danger rounded fs-3 w-100 fw-bold text-danger'>Continue With Google</button>
        <form onSubmit={handleSubmit(handleLogin)}>
        <label className="form-label mt-3">Email</label>
        <input className='form-control form-control-lg mb-3' {...register("email", {required: "Email Address is required"})} />
        {errors.email && <p className='text-danger'>{errors.email?.message}</p>}
        <label className="form-label mt-3">Password</label>
        <input className='form-control form-control-lg mb-3' {...register("password", { required: "Password is required"})} />
        {errors.password && <p className='text-danger'>{errors.password?.message}</p>}
        <input className='btn btn-danger text-light d-block w-100 btn-lg my-3' type="submit" />
        <div>
            {loginError && <p className='text-red-600'>{loginError}</p>}
        </div>
        </form>
        <p className='create_para'>Don’t have an account ? <Link to="/register" className='text-decoration-none'>Create an account</Link></p>
       </div>
      </div>
    );
};

export default Login;