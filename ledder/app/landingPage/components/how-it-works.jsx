

const steps = [
  {
    number: "01",
    title: "Add Your Applications",
    description: "Quickly add job applications with company details, job descriptions, and application dates.",
  },
  {
    number: "02",
    title: "Track Your Progress",
    description: "Update application statuses as you move through the hiring process—from applied to offer.",
  },
  {
    number: "03",
    title: "Stay Organized",
    description: "Set reminders, schedule interviews, and keep all your job search materials in one place.",
  },
  {
    number: "04",
    title: "Land the Job",
    description: "Use insights and analytics to optimize your approach and secure your dream position.",
  },
]

const HowItWorks = ()=> {
  return (
    <section id="how-it-works" className="container py-20 md:py-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">How Ledder works</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          A simple, four-step process to transform your job search from chaotic to organized.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <Card key={i} className="border-border bg-card relative overflow-hidden">
            <CardContent className="p-6">
              <div className="text-6xl font-bold text-accent/10 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks;