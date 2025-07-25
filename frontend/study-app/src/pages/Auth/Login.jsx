import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/layouts/AuthLayout';
import Input from '../../components/input/input';
import { LuSquareTerminal } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Handle Login Form Submit
  const handleLogin = async (e) => {
    e.preventDefault();
    if(!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if(!password) {
      setError('Please enter the password');
      return;
    }

    setError(""); 

    e.preventDefault();
  };

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>

        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your credentials to login.
        </p>

        {error && (
          <p className="text-red-500 text-sm mb-2">{error}</p>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email"
            placeholder="Enter your email"
            type="text"
          />

          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="Min 8 characters"
            type="password"
          />

          {error && <p className="text-red-500 text-xs pd-2.5">{error}</p>}

          <button type="submit" className="btn-primary">
            LOGIN
          </button>
          
          <p className="text-[13px] text-slate-600 mt-4">
            Don't have an account?{" "}
            <Link className="font-medium text-primary underline" to="/signUp">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
