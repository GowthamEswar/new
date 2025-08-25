import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'About page for new'
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-6">
            Welcome to the about page of new.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="space-y-2">
                {['JavaScript/TypeScript', 'React & Next.js', 'Node.js', 'Python', 'UI/UX Design'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Experience</h2>
              <p className="text-muted-foreground">
                I have experience building modern web applications with a focus on 
                performance, accessibility, and user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}