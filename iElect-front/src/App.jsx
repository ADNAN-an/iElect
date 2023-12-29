import { useState } from 'react';
import LoginPage from '@/Pages/LoginPage';
import SignupPage from '@/Pages/SignupPage';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from '@/components/mode-toggle';
import { buttonVariants } from "@/components/ui/button"
import HelloWorld from '@/HelloWorld';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <SignupPage />
    </>
  );
}

export default App;
