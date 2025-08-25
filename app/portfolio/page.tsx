import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio page for new'
}

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Portfolio</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-6">
            Welcome to the portfolio page of new.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Project 1</h3>
              <p className="text-muted-foreground mb-4">
                Description of your first project. This is a placeholder that you can customize.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Next.js</span>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Project 2</h3>
              <p className="text-muted-foreground mb-4">
                Description of your second project. This is a placeholder that you can customize.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Vercel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}