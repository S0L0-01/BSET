"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Users, BookOpen, Briefcase, Award, ArrowRight, Quote, Building2, Cog, Wrench, Cpu, LucideProps } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import Link from "next/link"
import { api, type Statistic, type LeadershipMessage, type Facility, type NewsEvent, type Testimonial } from "../lib/api"
import { PrismaHero } from "../components/ui/prisma-hero"

export default function HomePage() {
  const [stats, setStats] = useState<Statistic[]>([])
  const [leadership, setLeadership] = useState<LeadershipMessage[]>([])
  const [facilities, setFacilities] = useState<Facility[]>([])
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsData, leadershipData, facilitiesData, testimonialsData] = await Promise.all([
          api.getStatistics(),
          api.getLeadership(),
          api.getFacilities(),
          api.getTestimonials(),
        ])
        setStats(statsData)
        setLeadership(leadershipData)
        setFacilities(facilitiesData)
        setTestimonials(testimonialsData)
      } catch (error) {
        console.error("Failed to fetch data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const getIcon = (iconName: string) => {
    const iconMap: Record<string, any> = {
      "GraduationCap": Users,
      "Users": Users,
      "Briefcase": Briefcase,
      "BookOpen": BookOpen,
      "Award": Award,
      "Building2": Building2,
      "Cog": Cog,
      "Wrench": Wrench,
      "Cpu": Cpu,
    }
    const Icon = iconMap[iconName] || Award
    return <Icon className="w-8 h-8" />
  }

  return (
    <div className="space-y-20">
      {/* Prisma Hero Landing Section */}
      <PrismaHero />

      {/* Stats Section */}
      <section className="py-16 bg-slate-900 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {loading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <Card key={index} className="text-center p-6">
                    <CardContent className="space-y-2">
                      <div className="w-12 h-12 mx-auto bg-slate-200 dark:bg-slate-800 rounded-full animate-pulse" />
                      <div className="h-4 w-20 mx-auto bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
                      <div className="h-6 w-12 mx-auto bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
                    </CardContent>
                  </Card>
                ))
              : stats.map((stat, index) => (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="space-y-2">
                      <div className="text-primary mx-auto mb-2">
                        {getIcon(stat.icon)}
                      </div>
                      <div className="text-3xl font-bold text-slate-900 dark:text-white">
                        {stat.value.toLocaleString()}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-slate-900 dark:bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Leadership & Vision
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Guiding BSET towards excellence in technical education and innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {loading
              ? Array.from({ length: 2 }).map((_, index) => (
                  <Card key={index} className="p-6">
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 bg-slate-200 dark:bg-slate-800 rounded-full animate-pulse" />
                        <div className="space-y-2">
                          <div className="h-4 w-32 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
                          <div className="h-3 w-24 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
                        <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
                        <div className="h-3 w-3/4 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
                      </div>
                    </CardContent>
                  </Card>
                ))
              : leadership.map((leader, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400">
                          {leader.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-slate-900 dark:text-white">
                            {leader.name}
                          </h3>
                          <p className="text-sm text-white">
                            {leader.designation}
                          </p>
                        </div>
                      </div>
                      <blockquote className="text-slate-600 dark:text-slate-400 italic border-l-4 border-primary pl-4">
                        &quot;{leader.message}&quot;
                      </blockquote>
                    </CardContent>
                  </Card>
                ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-slate-900 dark:bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Academic Departments
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Premier diploma engineering programs across four specialized departments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Civil Engineering", code: "CE", intake: 120, icon: "Building2", established: 2008 },
              { name: "Electrical Engineering", code: "EE", intake: 180, icon: "Cog", established: 2008 },
              { name: "Electronics & Telecommunication", code: "ETC", intake: 60, icon: "Cpu", established: 2008 },
              { name: "Mechanical Engineering", code: "ME", intake: 180, icon: "Wrench", established: 2008 },
            ].map((dept, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow group">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    {getIcon(dept.icon)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-1">
                      {dept.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {dept.code}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">Established:</span>
                      <span className="font-medium">{dept.established} years</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">Intake:</span>
                      <span className="font-medium">{dept.intake} seats</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors" asChild>
                    <Link href={`/departments/${dept.code.toLowerCase()}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-slate-900 dark:bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              World-Class Facilities
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              State-of-the-art infrastructure for hands-on learning and innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loading
              ? Array.from({ length: 4 }).map((_, index) => (
                  <Card key={index} className="p-6">
                    <CardContent className="space-y-4">
                      <div className="w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
                      <div className="space-y-2">
                        <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
                        <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
                      </div>
                    </CardContent>
                  </Card>
                ))
              : facilities.map((facility, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="space-y-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        {getIcon(facility.icon)}
                      </div>
                      <h3 className="font-semibold text-lg text-slate-900 dark:text-white">
                        {facility.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {facility.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-900 dark:bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Student Success Stories
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Hear from our alumni and current students about their BSET journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loading
              ? Array.from({ length: 4 }).map((_, index) => (
                  <Card key={index} className="p-6">
                    <CardContent className="space-y-4">
                      <div className="w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-full animate-pulse" />
                      <div className="space-y-2">
                        <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
                        <div className="h-3 w-20 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
                        <div className="h-3 w-3/4 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
                      </div>
                    </CardContent>
                  </Card>
                ))
              : testimonials.map((testimonial, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-slate-900 dark:text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400">
                            {testimonial.role} • {testimonial.rating}/5
                          </p>
                        </div>
                        <Quote className="w-8 h-8 text-primary/20 ml-auto" />
                      </div>
                      <blockquote className="text-sm text-slate-600 dark:text-slate-400">
                        &quot;{testimonial.quote}&quot;
                      </blockquote>
                    </CardContent>
                  </Card>
                ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Start Your Engineering Journey?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Join BSET Berhampur and become part of a legacy of engineering excellence.
              Applications for 2026 are now open!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/admissions">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}