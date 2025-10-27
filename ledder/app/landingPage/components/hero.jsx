import { ArrowRight, Briefcase, CheckCircle2 } from "lucide-react"

const Hero = ()=> {
  return (
    <section className="container py-20 md:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-sm w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-muted-foreground">Track your job search journey</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Land your dream job with organized tracking
          </h1>

          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Stop losing track of applications. Ledder helps you manage every step of your job search—from application to
            offer—all in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              Start Tracking Free
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span className="text-sm text-muted-foreground">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span className="text-sm text-muted-foreground">Free forever plan</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-accent/10 rounded-3xl blur-3xl"></div>
          <div className="relative bg-card border border-border rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Briefcase className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Your Applications</h3>
                <p className="text-sm text-muted-foreground">12 active applications</p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { company: "TechCorp", role: "Senior Developer", status: "Interview", color: "bg-accent" },
                { company: "StartupXYZ", role: "Frontend Engineer", status: "Applied", color: "bg-muted-foreground" },
                { company: "BigTech Inc", role: "Full Stack Dev", status: "Offer", color: "bg-chart-4" },
              ].map((job, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-border"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-background border border-border flex items-center justify-center">
                      <span className="text-sm font-semibold text-foreground">{job.company[0]}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-card-foreground">{job.company}</p>
                      <p className="text-xs text-muted-foreground">{job.role}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${job.color} text-primary-foreground`}>
                    {job.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;