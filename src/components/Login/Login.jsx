import React, { useContext } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';
    const navigate=useNavigate();


    const { logIn, googleIn } = useContext(AuthContext);

    const handleGoogle=()=>{
        googleIn()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const email=event.target.email.value 
        const password=event.target.password.value
        console.log(email,password)
        logIn(email, password)
            .then(result => {
                console.log(result)
                navigate(from);
            })
            .catch(error => {
                console.log(error);
            })
         event.target.reset();
         

    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4 mx-auto">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        placeholder="name@flowbite.com"
                        name='email'
                        required
                        type="email"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        name='password'
                        required
                        type="password"
                    />
                </div>
                <Button type="submit">
                    Submit
                </Button>
            </form>
            <div className='mt-10'>
                <Button onClick={handleGoogle} className='mx-auto' gradientDuoTone="redToYellow">
                    Login With Google
                </Button>
            </div>
        </div>
    );
};

export default Login;