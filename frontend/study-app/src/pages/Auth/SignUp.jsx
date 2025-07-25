import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/layouts/AuthLayout';
import Input from '../../components/input/input';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import ProfilePhotoSelector from '../../components/input/ProfilePhotoSelector';

const SignUp = () => {
  const [profilePic, setProfilePic] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!fullName || !email || !password) {
      setError('Please fill in all required fields');
      return;
    }

    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setError(null); // Clear errors

    // Dummy signup action
    console.log('Signing up with:', { fullName, email, password });

    // Navigate to dashboard or login
    // navigate('/dashboard');
  };

  return (
    <AuthLayout>
      <div className="lg:w-full h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an Account Today!</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your details to create an account.
        </p>


        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <form onSubmit={handleSignUp} className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

          <Input
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
            label="Full Name"
            placeholder="Enter your full name"
            type="text"
          />

          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email"
            placeholder="Enter your email"
            type="text"
          />

          <div className="col-span-2">
            <Input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              label="Password"
              placeholder="Min 8 characters"
              type="password"
            />
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md mt-2 hover:bg-primary/90"
            >
              Sign Up
            </button>

          </div>
          {error && <p className="text-red-500 text-xs pd-2.5">{error}</p>}

          <button type="submit" className="btn-primary">
            SIGN UP
          </button>
          
          <p className="text-[13px] text-slate-600 mt-4">
             Already have an account?{" "}
            <Link className="font-medium text-primary underline" to="/Login">
              Login
            </Link>
          </p>


        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
