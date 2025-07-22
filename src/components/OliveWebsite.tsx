import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Play } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <a className="mr-6 font-semibold" href="#">
          Olive AI
        </a>
        <div className="ml-auto flex items-center space-x-4 sm:space-x-6">
          <Button size="sm" variant="ghost">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

const OliveWebsite = () => {
  const faqs = [
    {
      question: "What is Olive AI?",
      answer:
        "Olive AI is a cutting-edge platform that transforms raw data into actionable insights, helping businesses make smarter decisions.",
    },
    {
      question: "How does Olive AI work?",
      answer:
        "Olive AI uses advanced algorithms and machine learning to analyze data, identify patterns, and provide clear, concise narratives.",
    },
    {
      question: "Is Olive AI suitable for my business?",
      answer:
        "Yes, Olive AI is designed to be versatile and can be tailored to fit the unique needs of various industries and business sizes.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container grid items-center gap-12 py-24 md:py-32 lg:py-48">
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="font-semibold text-3xl leading-tight tracking-tighter md:text-5xl lg:text-6xl">
              Unlock the Power of Your Data with Olive AI
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Transform your raw data into actionable insights. Olive AI helps
              you make smarter decisions and stay ahead of the competition.
            </p>
            <div className="space-x-3">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <img
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-[800px]"
            height="500"
            src="/placeholder.svg"
            width="800"
          />
        </div>
        
        {/* Add a link to the pitch deck */}
        <div className="absolute bottom-8 right-8 z-10">
          <a href="/pitch" className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
            <Play className="h-4 w-4" />
            View Pitch Deck
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Real-Time Analytics</CardTitle>
                <CardDescription>
                  Get up-to-the-minute insights into your business performance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Monitor key metrics and identify trends as they happen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Automated Reporting</CardTitle>
                <CardDescription>
                  Generate comprehensive reports with just a few clicks.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Save time and resources with automated report generation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Customizable Dashboards</CardTitle>
                <CardDescription>
                  Create personalized dashboards to track the metrics that
                  matter most to you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tailor your data visualization to meet your specific needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <h2 className="mb-8 text-3xl font-semibold text-center">
            What Our Clients Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-none shadow-md">
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  "Olive AI has revolutionized the way we analyze data. The
                  insights we've gained have been invaluable."
                </p>
                <CardFooter className="flex items-center">
                  <img
                    alt="Client"
                    className="mr-4 h-10 w-10 rounded-full"
                    height="40"
                    src="/placeholder.svg"
                    width="40"
                  />
                  <div>
                    <CardTitle>John Doe</CardTitle>
                    <CardDescription>CEO, Example Company</CardDescription>
                  </div>
                </CardFooter>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  "The automated reporting feature has saved us countless hours.
                  We can now focus on making data-driven decisions."
                </p>
                <CardFooter className="flex items-center">
                  <img
                    alt="Client"
                    className="mr-4 h-10 w-10 rounded-full"
                    height="40"
                    src="/placeholder.svg"
                    width="40"
                  />
                  <div>
                    <CardTitle>Jane Smith</CardTitle>
                    <CardDescription>Marketing Manager, Sample Corp</CardDescription>
                  </div>
                </CardFooter>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="mb-8 text-3xl font-semibold text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container">
          <h2 className="mb-8 text-3xl font-semibold text-center">
            Contact Us
          </h2>
          <Card className="max-w-lg mx-auto border-none shadow-md">
            <CardContent>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" type="text" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Your Email"
                    type="email"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Input
                    id="message"
                    placeholder="Your Message"
                    type="text"
                    className="min-h-[100px]"
                  />
                </div>
                <Button>Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground">
        <div className="container">
          <p>© 2024 Olive AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default OliveWebsite;
