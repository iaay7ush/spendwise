import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ChromeIcon, GithubIcon } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-950">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">
            Register
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Create a new account
          </p>
        </div>
        <form className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              required
              type="text"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="example@email.com"
              required
              type="email"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="Enter your password"
              required
              type="password"
            />
          </div>

          <Button className="w-full" type="submit">
            Register
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
            Register with GitHub
          </Button>
          <Button className="flex-1" variant="outline">
            <ChromeIcon className="h-5 w-5 mr-2" />
            Register with Google
          </Button>
        </div>
        <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
          Already have an account?
          <Link className="text-blue-500 hover:underline ml-1" href="#">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
