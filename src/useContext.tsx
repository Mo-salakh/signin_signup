import { createContext, useState } from "react";

type SigninData = {
    email: string
    password: string
}

interface SignInt {
    users: User[]
    setUsers: Function
    isError: boolean
    setIsError: Function
    gender: string
    setGender: Function
    signInValid: (signinData: SigninData) => boolean
    handleSigninSubmit: (email:string, password: string) => void
    handleSignupSubmit: (data: User) => void
}

export interface User {
    name: string
    nickname: string | number
    email: string
    gender: string
    password: string
}

interface ProviderProp {
    children: React.ReactNode
}

export const SignContext = createContext<SignInt | null>(null)

export const SignProvider = ({children} : ProviderProp) => {
    const [users, setUsers] = useState<User[]>([])
    const [gender, setGender] = useState<string>('');
    const [isError, setIsError] = useState<boolean>(false);

    
    function handleSignupSubmit(userData: User) {
        setUsers(prevUsers => [...prevUsers, userData])
        console.log(users)
    }

    function signInValid(loginData: SigninData): boolean {
        return users.some(user => loginData.email === user.email && loginData.password === user.password);
    }

    const handleSigninSubmit = (email:string, password: string) => {
        console.log('Signin email is:', email);
    };


    const value:SignInt = {
        users,
        setUsers,
        gender,
        setGender,
        isError,
        setIsError,
        signInValid,
        handleSigninSubmit,
        handleSignupSubmit
    }

    return (
        <SignContext.Provider value={value}>
            {children}
        </SignContext.Provider>
    );
}

