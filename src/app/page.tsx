import Link from "next/link";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { WalletIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <WalletIcon className="h-6 w-6" />
          <span className="sr-only">Spendwise</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Testimonials
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Download
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Take control of your finances with Spendwise
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Spendwise is a powerful expense tracker that helps you manage
                  your money, set budgets, and achieve your financial goals.
                </p>
                <div className="space-x-4 mt-6">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Download Spendwise
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <Image
                  alt="Spendwise App"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="features">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Manage your money with ease
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Spendwise offers a range of powerful features to help you take
                  control of your finances and achieve your financial goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Expense Tracking</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Easily track your expenses and categorize them to get a clear
                  picture of your spending.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Budgeting</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Set budgets for different spending categories and receive
                  alerts when you're approaching your limits.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Goal Tracking</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Define your financial goals and track your progress towards
                  achieving them.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Insights and Reports</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Get detailed insights and reports on your spending patterns to
                  help you make informed financial decisions.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Seamless Integration</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Connect your bank accounts and credit cards to Spendwise for
                  automatic expense tracking.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Secure and Private</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Your financial data is securely stored and protected, with no
                  third-party access.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
          id="testimonials"
        >
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                What our users say
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from real Spendwise users about how the app has helped them
                take control of their finances.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6 bg-white dark:bg-gray-950 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="/avatars/01.png" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Freelance Designer
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    "Spendwise has been a game-changer for me. It's helped me\n
                    stay on top of my expenses and reach my financial goals\n
                    with ease."
                  </p>
                </div>
              </Card>
              <Card className="p-6 bg-white dark:bg-gray-950 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="/avatars/02.png" />
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Sarah Anderson</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Small Business Owner
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    "I love how Spendwise makes it easy to track my business\n
                    expenses and stay on top of my finances. It's a\n
                    game-changer!"
                  </p>
                </div>
              </Card>
              <Card className="p-6 bg-white dark:bg-gray-950 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="/avatars/03.png" />
                      <AvatarFallback>MR</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Michael Roberts</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Software Engineer
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    "Spendwise has helped me stay on top of my finances and\n
                    reach my savings goals. The app is so easy to use and\n
                    provides great insights."
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 border-t"
          id="download"
        >
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Download Spendwise today
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Spendwise is available for iOS and Android. Download the app and
                start taking control of your finances.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Download for iOS
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Download for Android
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Spendwise. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  );
}
