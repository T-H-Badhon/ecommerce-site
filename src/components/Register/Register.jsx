import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const { createNew } = useContext(AuthContext);
    const navigate=useNavigate();

    const handleSubmit=event=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password)
        createNew(email,password)
        .then(result=>{
            console.log(result)
            navigate('/login')
        })
        .catch(error=>{
            console.log(error)
        })

        event.target.reset();
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4 mx-auto">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email2"
                        placeholder="name@flowbite.com"
                        name='email'
                        required
                        shadow
                        type="email"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password2"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password2"
                        name='password'
                        required
                        shadow
                        type="password"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="repeat-password"
                            value="Repeat password"
                        />
                    </div>
                    <TextInput
                        id="repeat-password"
                        required
                        shadow
                        type="password"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="agree" />
                    <Label
                        className="flex"
                        htmlFor="agree"
                    >
                        <p>
                            I agree with the
                        </p>
                        <Link
                            className="text-cyan-600 hover:underline dark:text-cyan-500"
                            href="/forms"
                        >
                            <p>
                                terms and conditions
                            </p>
                        </Link>
                    </Label>
                </div>
                <Button type="submit">
                    Register new account
                </Button>
            </form>
        </div>
    );
};

export default Register;