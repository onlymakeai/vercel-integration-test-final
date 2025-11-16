import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Welcome to Vercel Integration Test
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            A modern Next.js application demonstrating best practices, UI components, and seamless Vercel deployment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>⚡ Fast Performance</CardTitle>
                <CardDescription>
                  Built with Next.js 14 and optimized for speed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Leveraging the latest Next.js features including App Router, Server Components, and automatic code splitting for optimal performance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>🎨 Beautiful UI</CardTitle>
                <CardDescription>
                  Modern design with shadcn/ui components
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A carefully crafted user interface using Tailwind CSS and shadcn/ui components for a consistent and accessible design system.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>🚀 Easy Deployment</CardTitle>
                <CardDescription>
                  One-click deployment to Vercel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Seamlessly deploy your application to Vercel with automatic previews, instant rollbacks, and global edge network.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Find answers to common questions about our platform
          </p>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-background rounded-lg px-6 border">
              <AccordionTrigger className="text-left hover:no-underline">
                What is this project about?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                This is a demonstration project showcasing modern web development practices using Next.js 14, TypeScript, and Tailwind CSS. It serves as a template for building scalable web applications with best-in-class developer experience and performance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-background rounded-lg px-6 border">
              <AccordionTrigger className="text-left hover:no-underline">
                How do I deploy this to Vercel?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Deploying to Vercel is simple! Just connect your GitHub repository to Vercel, and it will automatically deploy your application. Every push to your main branch creates a new deployment, and pull requests get preview deployments automatically.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-background rounded-lg px-6 border">
              <AccordionTrigger className="text-left hover:no-underline">
                What technologies are used?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                This project uses Next.js 14 with the App Router, React 18, TypeScript for type safety, Tailwind CSS for styling, shadcn/ui for UI components, and is optimized for deployment on Vercel's edge network.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-background rounded-lg px-6 border">
              <AccordionTrigger className="text-left hover:no-underline">
                Can I customize the design?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely! The design is fully customizable using Tailwind CSS utilities and shadcn/ui component variants. You can modify the theme colors, typography, spacing, and component styles to match your brand identity.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-background rounded-lg px-6 border">
              <AccordionTrigger className="text-left hover:no-underline">
                Is this production-ready?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! This project follows production-ready practices including proper error handling, TypeScript for type safety, SEO optimization with metadata, accessibility standards, and performance optimizations. However, you should add your own authentication, database, and business logic as needed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-background rounded-lg px-6 border">
              <AccordionTrigger className="text-left hover:no-underline">
                How do I get support?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                You can get support by opening an issue on the GitHub repository, checking the Next.js documentation, or reaching out to the Vercel community. The codebase is well-documented and follows standard patterns for easy understanding.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground">
            Start building your next project with this template today.
          </p>
          <Button size="lg" asChild>
            <Link href="/about">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
