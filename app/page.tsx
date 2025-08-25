import type { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Home',
  description: `Welcome to new - AI-generated Next.js application`
}

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              new
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            This is your AI-generated Next.js application, optimized for Vercel deployment with modern performance and SEO best practices.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <FeatureCard 
              title="⚡ Fast"
              description="Optimized for speed with Next.js 14 and Vercel Edge"
            />
            <FeatureCard 
              title="🎨 Modern"
              description="Built with TypeScript and modern React patterns"
            />
            <FeatureCard 
              title="📱 Responsive"
              description="Mobile-first design that works on all devices"
            />
          </div>
        </div>
      </div>
    </Suspense>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 bg-card border rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}