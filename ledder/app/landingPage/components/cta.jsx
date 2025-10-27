import { ArrowRight } from "lucide-react"

const CTA = ()=> {
  return (
    <section className="container py-20 md:py-32">
      <div className="relative overflow-hidden rounded-3xl bg-primary p-12 md:p-16 text-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground text-balance">
            Ready to organize your job search?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty">
            Join thousands of job seekers who have streamlined their application process with Ledder. Start tracking for
            free today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2">
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA;
