import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ChromeIcon, GithubIcon } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-950">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">
            Welcome Back
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Enter your email and password to access your account.
          </p>
        </div>
        <form className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="example@email.com"
              required
              type="email"
            />
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link
                href="#"
                className="text-sm font-medium text-gray-900 hover:underline dark:text-gray-50"
                prefetch={false}
              >
                Forgot password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button className="w-full" type="submit">
            Log in
          </Button>
        </form>
        <div className="flex items-center justify-between">
          <Separator className="flex-1" />
          <span className="mx-4 text-gray-500 dark:text-gray-400">or</span>
          <Separator className="flex-1" />
        </div>
        <div className="flex justify-center space-x-4">
          <Button className="flex-1" variant="outline">
            <GithubIcon className="h-5 w-5 mr-2" />
            Login with GitHub
          </Button>
          <Button className="flex-1" variant="outline">
            <ChromeIcon className="h-5 w-5 mr-2" />
            Login with Google
          </Button>
        </div>
        <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
          Don&apos;t have an account?
          <Link className="text-blue-500 hover:underline ml-1" href="#">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
