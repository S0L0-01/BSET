"use client"

import { motion } from "framer-motion"
import { BookOpen, Wrench, Cpu, Building2, Users, Calendar, Clock, ArrowRight, CheckCircle, Phone, Mail, Award, Star, Cog } from "lucide-react"
import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import Image from "next/image"
import Link from "next/link"

export default function DepartmentsPage() {
  const departments = [
    {
      name: "Civil Engineering",
      code: "CE",
      established: 2008,
      intake: 120,
      duration: "3 Years (6 Semesters)",
      description: "Civil engineering encompasses the planning, design, execution, and preservation of vital structures and infrastructure.",
      specializations: ["Structural Engineering", "Transportation & Highways", "Earthquake Resistant Design", "Surveying & Geotechnical", "Hydraulics & Water Resources"],
      labs: [
        "Structural Analysis Lab",
        "Geotechnical Engineering Lab",
        "Hydraulics & Hydrology Lab",
        "Transportation Engineering Lab",
        "Earthquake Engineering Lab"
      ],
      highlights: [
        "Consultancy services provided to Government and Private Sector companies",
        "Advanced surveying and material testing equipment",
        "Regular site visits and live construction project exposure"
      ],
      faculty: 24,
      ranking: "Top 5 in Odisha",
      image: "https://images.unsplash.com/photo-1504307651254-350dcd8634ed?w=400&h=300&fit=crop"
    },
    {
      name: "Electrical Engineering",
      code: "EE",
      established: 2008,
      intake: 180,
      duration: "3 Years (6 Semesters)",
      description: "Produces diploma engineers with strong fundamentals in electrical power systems, machines, power electronics, transmission, and modern industrial automation.",
      specializations: ["Electrical Machines & Drives", "Power Systems & Transmission", "Control Systems & Automation", "Renewable Energy & Solar Systems", "Industrial Electrical Installation"],
      labs: [
        "AC/DC Machines Lab",
        "Power Systems Lab",
        "Control Systems Lab",
        "Renewable Energy Lab",
        "Industrial Automation Lab"
      ],
      highlights: [
        "Fully equipped AC/DC Machine Labs and Substation Simulation",
        "Industrial seminar sessions with power grid engineers",
        "Proctorial mentorship and comprehensive lecture notes support"
      ],
      faculty: 28,
      ranking: "Top 3 in India",
      image: "https://images.unsplash.com/photo-1518717559644-a9d6496a9e1f?w=400&h=300&fit=crop"
    },
    {
      name: "Electronics & Telecommunication",
      code: "ETC",
      established: 2008,
      intake: 60,
      duration: "3 Years (6 Semesters)",
      description: "Curriculum focused on Embedded Systems, VLSI Technologies, Wireless & Mobile Communications, and modern microprocessors.",
      specializations: ["Embedded Systems", "VLSI Design", "Wireless Communications", "Mobile Networks", "Digital Signal Processing"],
      labs: [
        "Electronic Devices & Circuits Lab",
        "Pulse & Digital Circuits Lab",
        "Linear Application Lab",
        "Microwave & Optical Communication Lab",
        "Analog Communication Lab",
        "Digital Communication Lab",
        "ECAD Lab",
        "Microprocessor & Microcomputer Lab"
      ],
      highlights: [
        "Hands-on experimentation over rote memorization",
        "Classrooms equipped with LCD projectors and cloud digital tools",
        "Guest lectures and R&D workshops from industry experts"
      ],
      faculty: 18,
      ranking: "Industry Recognized",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc8c3f4b5a?w=400&h=300&fit=crop"
    },
    {
      name: "Mechanical Engineering",
      code: "ME",
      established: 2008,
      intake: 180,
      duration: "3 Years (6 Semesters)",
      description: "Covers operation of modern machines, manufacturing processes, heat power engineering, machine design, automobile engineering, and materials management.",
      specializations: ["Machine Design", "Thermal Engineering", "Manufacturing Technology", "Automobile Engineering", "Material Science"],
      labs: [
        "Lathe Machine Workshop",
        "Welding & Fabrication Lab",
        "Foundry Workshop",
        "CNC Programming Lab",
        "Thermodynamics Lab",
        "Fluid Mechanics Lab",
        "Material Testing Lab",
        "Auto Components Lab"
      ],
      highlights: [
        "State-of-the-art workshops for lathe, welding, fitting, and foundry",
        "Direct pathway for B.Tech lateral entry (2nd year) through entrance tests",
        "Excellent placement record in automobile and machine tool industries"
      ],
      faculty: 32,
      ranking: "Top 10 in Asia",
      image: "https://images.unsplash.com/photo-1542371350-2965ac47d038?w=400&h=300&fit=crop"
    }
  ]

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="secondary" className="mb-4">Academic Departments</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Engineering Departments
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Premier diploma engineering programs across four specialized departments with industry-aligned curriculum and state-of-the-art facilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Choose Your Engineering Path
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Each department offers comprehensive theoretical knowledge and practical hands-on experience
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {departments.map((dept, index) => {
              const IconMap = { Building2, Cog, Cpu, Wrench }
              const Icon = IconMap[dept.code as keyof typeof IconMap] || Building2
              return (
                <motion.div
                  key={dept.code}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full p-8 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                    <CardContent className="space-y-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-slate-500">Est. {dept.established}</div>
                          <div className="font-bold text-lg">{dept.code}</div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                          {dept.name}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                          {dept.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-slate-500" />
                          <span className="text-sm">{dept.faculty} Faculty</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-slate-500" />
                          <span className="text-sm">{dept.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-slate-500" />
                          <span className="text-sm">{dept.intake} Intake</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm font-medium">{dept.ranking}</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Key Specializations:</h4>
                        <div className="flex flex-wrap gap-2">
                          {dept.specializations.slice(0, 3).map((spec, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {spec}
                            </Badge>
                          ))}
                          <Badge variant="secondary" className="text-xs">
                            +{dept.specializations.length - 3} more
                          </Badge>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Featured Labs:</h4>
                        <div className="space-y-1">
                          {dept.labs.slice(0, 3).map((lab, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-3 h-3 text-green-600" />
                              <span className="text-slate-600 dark:text-slate-400">{lab}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full group" asChild>
                        <Link href={`/departments/${dept.code.toLowerCase()}`}>View Details</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Department Details (Tabs) */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Department Details
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Explore comprehensive information about each department's curriculum, facilities, and career opportunities
            </p>
          </motion.div>

          <Tabs defaultValue={departments[0].code.toLowerCase()} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {departments.map((dept) => (
                <TabsTrigger key={dept.code} value={dept.code.toLowerCase()}>
                  {dept.name.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {departments.map((dept) => {
              const IconMap = { Building2, Cog, Cpu, Wrench }
              const Icon = IconMap[dept.code as keyof typeof IconMap] || Building2
              return (
                <TabsContent key={dept.code} value={dept.code.toLowerCase()}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="p-8 lg:p-12">
                      <CardContent className="space-y-8">
                        <div className="grid lg:grid-cols-2 gap-12">
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                                {dept.name}
                              </h3>
                              <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4" />
                                  <span>Established: {dept.established}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <BookOpen className="w-4 h-4" />
                                  <span>{dept.duration}</span>
                                </div>
                              </div>
                            </div>

                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                              {dept.description}
                            </p>

                            <div className="space-y-4">
                              <h4 className="font-bold text-xl">Key Highlights</h4>
                              {dept.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                                  <p className="text-slate-600 dark:text-slate-400">{highlight}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <h4 className="font-bold text-xl mb-4">Available Specializations</h4>
                              <div className="grid grid-cols-2 gap-2">
                                {dept.specializations.map((spec, idx) => (
                                  <div key={idx} className="flex items-center gap-2">
                                    <Star className="w-3 h-3 text-yellow-500" />
                                    <span className="text-sm text-slate-600 dark:text-slate-400">{spec}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="font-bold text-xl mb-4">State-of-the-Art Labs</h4>
                              <div className="grid grid-cols-2 gap-2">
                                {dept.labs.map((lab, idx) => (
                                  <div key={idx} className="flex items-center gap-2">
                                    <Wrench className="w-3 h-3 text-slate-500" />
                                    <span className="text-sm text-slate-600 dark:text-slate-400">{lab}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                              <Button asChild>
                                <Link href="/admissions">
                                  Apply Now
                                  <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                              </Button>
                              <Button variant="outline" asChild>
                                <Link href="/contact">
                                  <Phone className="w-4 h-4 mr-2" />
                                  Contact Department
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Ready to Begin Your Engineering Journey?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Join BSET Berhampur and be part of a legacy of engineering excellence. Your future starts with us.
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
                  <Mail className="w-5 h-5 mr-2" />
                  Get Information
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}