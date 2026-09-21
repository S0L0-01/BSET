"use client"

import { motion } from "framer-motion"
import { Award, Users, Target, BookOpen, Quote, ExternalLink } from "lucide-react"
import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const leadership = [
    {
      name: "Er. Sapan Kumar Padhy",
      title: "Founder & Chairman / Director cum Secretary",
      message: "No stone will remain unturned from our side to make a smooth path for you to fulfil your dreams. BSET had a humble beginning in 2004 on its own campus in Berhampur, a small town in Southern Odisha. Today, BSET stands as a testimony to dreams that turned into reality. Go ahead with your dreams, achieve them, and see that the world will follow you.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Er. Lalitendu Sahu",
      title: "Principal",
      message: "In the present scenario of globalization the fittest will only survive. One has to be fully equipped with thorough knowledge of advanced techniques and high moral values to lead in Indian and global industries. BSET is committed to nurturing energetic, effective, and efficient professionals ready to lead Indian and global industries.",
      image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=300&h=300&fit=crop&crop=face"
    }
  ]

  const milestones = [
    { year: "2004", title: "Founded", description: "Started with humble beginnings on our own campus" },
    { year: "2008", title: "Expanded", description: "Grew significantly with new departments and facilities" },
    { year: "2011", title: "Premier", description: "Became a premier technical education institution" },
    { year: "2026", title: "Present", description: "Currently AICTE approved and ISO certified" }
  ]

  const values = [
    { title: "Excellence", description: "Quality education through experienced faculty", icon: Award },
    { title: "Innovation", description: "Modern teaching methodologies and lab facilities", icon: BookOpen },
    { title: "Inclusivity", description: "Equal opportunities for all students", icon: Users },
    { title: "Ethics", description: "Strong moral values and character development", icon: Target }
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
            <Badge variant="secondary" className="mb-4">About BSET Berhampur</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              About Us
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Berhampur School of Engineering & Technology - where dreams transform into reality and engineering excellence meets innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                  Our Vision
                </h2>
                <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl">
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed italic">
                    Create engineering minds capable of mastering the global challenges of tomorrow's technology.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                  Our Mission
                </h2>
                <div className="p-6 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl">
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    Establish a center of excellence for nurturing quality engineers and managers for the growth of Indian industries, cultivating entrepreneurship, and innovating on emerging technologies.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => {
                  const Icon = value.icon
                  return (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <Icon className="w-10 h-10 text-primary mb-4" />
                      <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{value.description}</p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History & Timeline */}
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
              Our Journey
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Four decades of growth, innovation, and excellence in technical education
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-5/12" />
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-primary rounded-full border-4 border-white dark:border-slate-950 shadow-lg">
                    <span className="text-white font-bold">{milestone.year}</span>
                  </div>
                  <div className="w-5/12 p-6">
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <CardContent className="space-y-2">
                        <h3 className="font-bold text-xl text-primary">{milestone.year}</h3>
                        <h4 className="font-semibold text-lg">{milestone.title}</h4>
                        <p className="text-slate-600 dark:text-slate-400">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
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
              Leadership Team
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Visionary leaders guiding BSET towards excellence in technical education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <Card className="p-8 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          width={80}
                          height={80}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-slate-900 dark:text-white">{leader.name}</h3>
                        <p className="text-primary font-medium">{leader.title}</p>
                      </div>
                    </div>
                    <blockquote className="text-slate-600 dark:text-slate-400 italic border-l-4 border-primary pl-4">
                      &quot;{leader.message}&quot;
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
              Join Our Community
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Be a part of BSET's legacy of engineering excellence. Discover your future with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/admissions">
                  Apply Now
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