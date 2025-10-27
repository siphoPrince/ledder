import { BarChart3, Bell, Calendar, FileText, Target, Users } from "lucide-react"


const features = [
  {
    icon: Target,
    title: "Application Tracking",
    description: "Keep track of every application with custom statuses and stages.",
  },
  {
    icon: Calendar,
    title: "Interview Scheduler",
    description: "Never miss an interview with built-in calendar integration.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Get notified about follow-ups and important deadlines.",
  },
  {
    icon: FileText,
    title: "Document Manager",
    description: "Store resumes, cover letters, and notes in one place.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Visualize your job search progress with insightful metrics.",
  },
  {
    icon: Users,
    title: "Contact Management",
    description: "Track recruiters and connections for each opportunity.",
  },
]

const Features = ()=> {
  return (
    <section id="features" className="container py-20 md:py-32 bg-muted/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Everything you need to succeed</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          Powerful features designed to streamline your job search and help you stay organized throughout the entire
          process.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <Card key={i} className="border-border bg-card hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Features;
