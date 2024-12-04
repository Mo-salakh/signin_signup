import React, { useState } from 'react';
import { TextInput, Button, RadioGroup, Radio } from '@mantine/core';

interface InputProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
}

const CustomInput: React.FC<InputProps> = ({ label, type, value, onChange, required = false, placeholder }) => {
  return (
    <TextInput
      label={label}
      type={type}
      value={value}
      onChange={() => onChange(value)}
      required={required}
      placeholder={placeholder}
      style={{ marginBottom: '1rem' }}
    />
  );
};

interface SigninProps {
  onSubmit: (data: { email: string; password: string }) => void;
}

const Signin: React.FC<SigninProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <CustomInput
        label="Email"
        type="email"
        value={email}
        onChange={setEmail}
        required
        placeholder="Enter your email"
      />
      <CustomInput
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
        required
        placeholder="Enter your password"
      />
      <Button type="submit">Sign In</Button>
    </form>
  );
};

interface SignupProps {
  onSubmit: (data: {
    name: string;
    nickname: string;
    email: string;
    gender: string;
    password: string;
    confirmPassword: string;
  }) => void;
}

const Signup: React.FC<SignupProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, nickname, email, gender, password, confirmPassword });
  };

  return (
    <form onSubmit={handleSubmit}>
      <CustomInput
        label="Name"
        type="text"
        value={name}
        onChange={setName}
        required
        placeholder="Enter your name"
      />
      <CustomInput
        label="Nickname"
        type="text"
        value={nickname}
        onChange={setNickname}
        required
        placeholder="Enter your nickname"
      />
      <CustomInput
        label="Email"
        type="email"
        value={email}
        onChange={setEmail}
        required
        placeholder="Enter your email"
      />
      <RadioGroup
        value={gender}
        onChange={setGender}
        label="Gender"
        required
        style={{ marginBottom: '1rem' }}
        className='radio_box'
      >
        <Radio value="male" label="Male" />
        <Radio value="female" label="Female" />
      </RadioGroup>
      <CustomInput
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
        required
        placeholder="Enter your password"
      />
      <CustomInput
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={setConfirmPassword}
        required
        placeholder="Repeat your password"
      />
      <Button type="submit">Sign Up</Button>
    </form>
  );
};

export { Signin, Signup };