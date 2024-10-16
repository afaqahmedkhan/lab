import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, CreditCard, Lock, Zap, BarChart, Fingerprint } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Brain className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">AI Pay</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  AI-Powered Payment Processing
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Revolutionize your payments with our cutting-edge AI technology. Faster, smarter, and more secure than ever before.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">AI-Powered Features</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <Zap className="h-8 w-8 mb-2" />
                  <CardTitle>Intelligent Fraud Detection</CardTitle>
                </CardHeader>
                <CardContent>
                  Our AI algorithms analyze patterns in real-time to detect and prevent fraudulent transactions with unparalleled accuracy.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart className="h-8 w-8 mb-2" />
                  <CardTitle>Predictive Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  Leverage AI-driven insights to forecast payment trends and optimize your business strategies.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Fingerprint className="h-8 w-8 mb-2" />
                  <CardTitle>Biometric Authentication</CardTitle>
                </CardHeader>
                <CardContent>
                  Enhance security with AI-powered biometric verification, including facial recognition and fingerprint scanning.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-primary p-3">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Initiate Payment</h3>
                <p className="text-gray-500 dark:text-gray-400">Customer initiates a payment through your platform.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-primary p-3">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. AI Processing</h3>
                <p className="text-gray-500 dark:text-gray-400">Our AI analyzes the transaction for fraud and optimizes routing.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-primary p-3">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Secure Completion</h3>
                <p className="text-gray-500 dark:text-gray-400">Transaction is securely completed with minimal latency.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Pricing Plans</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2">$29</div>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">per month</p>
                  <ul className="space-y-2">
                    <li>Basic AI fraud detection</li>
                    <li>Up to 1,000 transactions/month</li>
                    <li>Email support</li>
                  </ul>
                  <Button className="w-full mt-6">Get Started</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2">$99</div>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">per month</p>
                  <ul className="space-y-2">
                    <li>Advanced AI fraud detection</li>
                    <li>Up to 10,000 transactions/month</li>
                    <li>24/7 support</li>
                    <li>Predictive analytics</li>
                  </ul>
                  <Button className="w-full mt-6">Get Started</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2">Custom</div>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">Contact us for pricing</p>
                  <ul className="space-y-2">
                    <li>Custom AI solutions</li>
                    <li>Unlimited transactions</li>
                    <li>Dedicated account manager</li>
                    <li>Custom integrations</li>
                  </ul>
                  <Button className="w-full mt-6">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Clients Say</h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardContent className="p-6">
                  <p className="text-lg mb-4">"The AI-powered fraud detection has saved us countless hours and significantly reduced our risk exposure."</p>
                  <p className="font-semibold">- Sarah Johnson, CFO at TechCorp</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-lg mb-4">"The predictive analytics have given us invaluable insights into our cash flow and customer behavior."</p>
                  <p className="font-semibold">- Michael Chen, CEO at FutureFin</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Payments?</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join the AI revolution in payment processing. Get started today and experience the future of transactions.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">Get Started Now</Button>
                <Button variant="outline" size="lg">Schedule a Demo</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 AI Pay. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}