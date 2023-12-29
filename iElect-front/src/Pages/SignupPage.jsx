import { useState } from 'react';
import Signup from '@/components/Signup';
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from '@/components/mode-toggle';
import { buttonVariants } from "@/components/ui/button"

function SignupPage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider>
        <div className="md:hidden">
          <img
            src="/examples/authentication-light.png"
            width={1280}
            height={843}
            alt="Authentication"
            className="block dark:hidden"
          />
          <img
            src="/examples/authentication-dark.png"
            width={1280}
            height={843}
            alt="Authentication"
            className="hidden dark:block"
          />
        </div>
        <div className="container relative hidden h-[650px] mt-2 flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
          <div className="flex items-center space-x-4 absolute right-4 top-4 md:right-8 md:top-8">
            <a
              href="/examples/authentication"
              className={buttonVariants({ variant: "default" })}
            >
              Login
            </a>
            <ModeToggle />
          </div>
          <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
            <div className="absolute inset-0 bg-zinc-900" />
            <div className="relative z-20 flex items-center text-lg font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-6 w-6"
              >
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
              </svg>
              iElect
            </div>
            <div className="relative z-20 mt-auto">
              <blockquote className="space-y-2">
                <p className="text-lg">
                  &ldquo;Simplifiez le vote, Engagez vos Électeurs&rdquo;
                </p>
                {/* <footer className="text-sm">Sofia Davis</footer> */}
              </blockquote>
            </div>
          </div>
          <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Create a new account
                </h1>
                <p className="text-sm text-muted-foreground">
                  Enter your details below to sign up
                </p>
              </div>
              {/* Render the Signup component */}
              <Signup />
              <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking sign up, you agree to our{" "}
                <a
                  href="/terms"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default SignupPage;
