"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 bg-red-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-green-100 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who have revolutionized their digital presence with our solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
            <CardContent className="p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-red-700" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Free Consultation</h3>
              <p className="text-green-100 text-sm sm:text-base">Get expert advice tailored to your business needs</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
            <CardContent className="p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Custom Solutions</h3>
              <p className="text-green-100 text-sm sm:text-base">
                Tailored technology solutions for your unique requirements
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
            <CardContent className="p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Fast Delivery</h3>
              <p className="text-green-100 text-sm sm:text-base">Quick turnaround times without compromising quality</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white text-red-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold group"
            >
              Start Your Project Today
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
