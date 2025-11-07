import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/clerk-react'

function App() {

  return (
    <>
     <h1>Welcome to the app</h1>
     
     <SignedOut>
      <SignInButton mode='modal'/>
     </SignedOut>

     <SignedIn>
      <SignOutButton/>
     </SignedIn>

    </>
  )
}

export default App
