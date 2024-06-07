import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { ChromeIcon } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="grid md:grid-cols-2 min-h-screen w-full">
      <section className="flex flex-col items-center justify-center p-8">
        <div className="max-w-md space-y-4">
          <div className="space-y-2 text-center">
            <h1 className="text-4xl font-bold">Create an Account</h1>
            <p className="text-gray-500">
              Enter your details below to get started.
            </p>
          </div>
          <div className="space-y-4">
            <Button className="w-full" variant="outline">
              <ChromeIcon className="mr-2 h-5 w-5" />
              Sign up with Google
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200 dark:border-gray-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500 dark:bg-gray-950 dark:text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="m@example.com" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <div className="flex items-center">
              <Checkbox id="terms" />
              <Label className="ml-2 text-sm text-gray-500" htmlFor="terms">
                I agree to the
                <Link
                  className="font-medium text-gray-900 hover:underline dark:text-gray-400"
                  href="#"
                >
                  Terms of Service
                </Link>
              </Label>
            </div>
            <Button className="w-full" type="submit">
              Sign Up
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-gray-950 flex flex-col items-center justify-center p-8 text-white">
        <div className="max-w-md space-y-4">
          <div className="space-y-2 text-center">
            <h1 className="text-4xl font-bold">Welcome Back!</h1>
            <p className="text-gray-400">
              Sign in to your account to continue.
            </p>
          </div>
          <div className="space-y-4">
            <Button variant="secondary" className="w-full">
              <ChromeIcon className="mr-2 h-5 w-5" />
              Sign in with Google
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-gray-950 px-2 text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="m@example.com" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <div className="flex items-center justify-between">
              <Link
                className="text-sm font-medium text-gray-400 hover:text-gray-300"
                href="#"
              >
                Forgot password?
              </Link>
              <Button className="w-auto" type="submit">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
