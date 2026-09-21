"use client"

import { motion } from "framer-motion"
import { User, Mail, Phone, BookOpen, FileText, CreditCard, CheckCircle, Clock, AlertCircle, Send, Calendar, MapPin, Building2, ArrowRight } from "lucide-react"
import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Label } from "../../components/ui/label"
import Image from "next/image"
import Link from "next/link"

export default function AdmissionsPage() {
  const admissionStats = [
    { number: "360+", label: "Annual Intake", icon: BookOpen },
    { number: "60%", label: "Lateral Entry", icon: User },
    { number: "2025", label: "Applications", icon: Calendar },
    { number: "24/7", label: "Support", icon: Phone }
  ]

  const admissionSteps = [
    { step: 1, title: "Check Eligibility", description: "Verify you meet 10th standard requirements" },
    { step: 2, title: "Application Form", description: "Fill out online application form" },
    { step: 3, title: "Document Upload", description: "Submit required certificates and documents" },
    { step: 4, title: "Payment", description: "Pay application fees" },
    { step: 5, title: "Confirmation", description: "Receive admission confirmation" }
  ]

  const requiredDocs = [
    "Original College Leaving Certificate (CLC) / School Leaving Certificate (SLC) & Conduct Certificate",
    "Original 10th / Matriculation Marksheet & Certificate with attested xerox copies",
    "DET Odisha Rank Card",
    "Original Caste Certificate for SC/ST/OBC candidates",
    "Migration Certificate (if applicable)",
    "3 Passport size & 2 Stamp size recent photographs",
    "Aadhaar Card Copy and Residential Certificate"
  ]

  const eligibilityCriteria = [
    { title: "Regular Entry (1st Year)", requirements: ["Pass in 10th Standard (Matriculation) or equivalent examination from a recognized board.", "Minimum 35% marks from BSE Odisha / CBSE / ICSE."] },
    { title: "Lateral Entry (2nd Year)", requirements: ["Passed +2 Science with Vocational / Technical subjects or 2-Year ITI in relevant engineering trade."] }
  ]

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-950 dark:to-blue-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="secondary" className="mb-4">Admissions 2026</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Join BSET Berhampur
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Your gateway to premier diploma engineering education in Odisha. Applications for 2026 session are now open!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {admissionStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                    <CardContent className="space-y-3">
                      <Icon className="w-8 h-8 text-primary mx-auto" />
                      <div className="text-3xl font-bold text-slate-900 dark:text-white">{stat.number}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Application Process */}
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
              Easy Application Process
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Simple 5-step process to secure your seat at BSET Berhampur
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  {index < admissionSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-primary/30" />
                  )}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Eligibility Criteria */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Eligibility Criteria
                </h2>
                <div className="space-y-6">
                  {eligibilityCriteria.map((criteria, index) => (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                      <CardContent className="space-y-4">
                        <h3 className="font-bold text-lg text-primary">{criteria.title}</h3>
                        <ul className="space-y-2">
                          {criteria.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                              <span className="text-sm text-slate-600 dark:text-slate-400">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Required Documents */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Required Documents
                </h2>
                <Card className="p-6">
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <FileText className="w-5 h-5 text-slate-500" />
                      <span className="font-medium">All documents must be original with self-attested xerox copies</span>
                    </div>
                    <ul className="space-y-3">
                      {requiredDocs.map((doc, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                          <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/50 rounded-lg border border-amber-200 dark:border-amber-800">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-amber-800 dark:text-amber-200 mb-1">Important Note</h4>
                      <p className="text-sm text-amber-700 dark:text-amber-300">
                        Documents submission is mandatory for application processing. Incomplete applications will not be considered.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Online Application Form */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Online Application Form
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Fill out the form below to start your application process
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="max-w-4xl mx-auto p-8">
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input id="fullName" placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" placeholder="+91-9876543210" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" placeholder="Odisha" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="department">Department of Interest</Label>
                    <Input id="department" placeholder="Civil Engineering / Electrical Engineering / etc." />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="message">Additional Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Any questions or special requirements..."
                      rows={4}
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="terms" className="rounded border-gray-300" />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the terms and conditions and understand that BSET may contact me regarding my application.
                  </Label>
                </div>

                <Button size="xl" className="w-full group">
                  Submit Application
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Contact & Location
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Visit us or reach out via phone and email - we're here to help you every step of the way.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <Card className="p-6">
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-bold text-xl mb-4">Admissions Office</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Address</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Near Berhampur University, Ramachandrapur,<br />
                            Po-Dura, Berhampur, Ganjam, Odisha - 760010
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            +91-9437062282 / +91-8280730451
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            admissions@bsetberhampur.ac.in
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-3">Office Hours</h4>
                    <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <div className="flex justify-between">
                        <span>Monday - Saturday:</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map/Location */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="aspect-video bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <MapPin className="w-12 h-12 text-slate-400 mx-auto" />
                    <p className="text-slate-600 dark:text-slate-400">
                      Interactive map will be integrated here
                    </p>
                    <p className="text-sm text-slate-500">
                      BSET Berhampur Campus<br />
                      Berhampur, Odisha - 760010
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="tel:+919437062282">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="mailto:admissions@bsetberhampur.ac.in">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-950 dark:to-blue-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Start Your Engineering Journey Today!
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              BSET Berhampur welcomes you to a future of endless possibilities. Apply now and join the ranks of successful engineers who have graduated from our premier institution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/departments">
                  Explore Departments
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/contact">
                  Download Brochure
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}