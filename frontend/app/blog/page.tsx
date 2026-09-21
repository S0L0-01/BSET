"use client"

import { motion } from "framer-motion"
import { Search, Calendar, User, Tag, Clock, ArrowRight, Filter, TrendingUp, BookOpen, Award, HeartHandshake, Building2 } from "lucide-react"
import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  const featuredPost = {
    title: "BSET Students Win National Engineering Championship",
    excerpt: "Our mechanical engineering team demonstrates exceptional problem-solving skills at the National Technical Exhibition, securing first place with their innovative hydraulic system design.",
    category: "Success Stories",
    author: "Dr. Rajesh Kumar",
    date: "2026-02-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1504307651254-350dcd8634ed?w=800&h=400&fit=crop",
    featured: true
  }

  const recentPosts = [
    {
      title: "Summer Internship Opportunities at Tata Motors",
      excerpt: "Join India's leading automotive manufacturer as we welcome 50 diploma engineers for our prestigious summer internship program.",
      category: "Internships",
      author: "Ms. Priya Sharma",
      date: "2026-02-10",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1517365830860-4ee7b1434b41?w=400&h=250&fit=crop",
      likes: 124,
      comments: 18
    },
    {
      title: "New AICTE-approved Programs Launched for 2026",
      excerpt: "BSET introduces four new diploma programs in emerging technologies including AI Integration, Renewable Energy Systems, and Advanced Manufacturing.",
      category: "Academic Updates",
      author: "Dr. Suresh Mehta",
      date: "2026-02-08",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1581091226033-0193b2d1b139?w=400&h=250&fit=crop",
      likes: 89,
      comments: 12
    },
    {
      title: "Campus Life: The Heart of Engineering Education",
      excerpt: "Discover how BSET's vibrant campus culture fosters innovation, teamwork, and personal growth among students.",
      category: "Campus Life",
      author: "Student Council",
      date: "2026-02-05",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop",
      likes: 256,
      comments: 34
    },
    {
      title: "Industry Partnership with Siemens Gamesa",
      excerpt: "BSET signs MOU with global renewable energy leader to provide hands-on training in wind turbine technology.",
      category: "Industry News",
      author: "Prof. Kumar Ghosh",
      date: "2026-02-03",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1466611653911-807c5d428b45?w=400&h=250&fit=crop",
      likes: 198,
      comments: 27
    },
    {
      title: "Achievers' Spotlight: Top Performers in First Semester",
      excerpt: "Congratulations to our outstanding students who secured top ranks in the first semester examinations, showcasing exceptional academic excellence.",
      category: "Academic Success",
      author: "Dr. Anita Sharma",
      date: "2026-01-30",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1579403093380-c0115fb15f36?w=400&h=250&fit=crop",
      likes: 167,
      comments: 23
    },
    {
      title: "Tech Fest 2026: Showcasing Innovation",
      excerpt: "Students and faculty come together to showcase cutting-edge projects at BSET's annual technical festival.",
      category: "Events",
      author: "Tech Fest Committee",
      date: "2026-01-28",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1540575861781-2e6a4f9d9b0d?w=400&h=250&fit=crop",
      likes: 203,
      comments: 45
    }
  ]

  const categories = [
    { name: "All Posts", count: 50 },
    { name: "Success Stories", count: 12 },
    { name: "Internships", count: 8 },
    { name: "Academic Updates", count: 15 },
    { name: "Campus Life", count: 20 },
    { name: "Industry News", count: 10 },
    { name: "Academic Success", count: 18 },
    { name: "Events", count: 22 }
  ]

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-slate-950 dark:to-indigo-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="secondary" className="mb-4">Latest Updates & Stories</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              BSET Blog & News
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Discover campus life, student achievements, industry insights, and the stories that shape our engineering community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="py-8 bg-white dark:bg-slate-950 sticky top-20 z-40 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col lg:flex-row gap-4 items-center justify-between"
          >
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.slice(0, 6).map((category, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                >
                  {category.name}
                </Button>
              ))}
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="trending">Trending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Story
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    width={800}
                    height={400}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-white">
                    {featuredPost.category}
                  </Badge>
                </div>
                <CardContent className="p-8 lg:p-12">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
                      {featuredPost.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <Button size="lg" asChild>
                      <Link href="/blog/featured">
                        Read Full Story
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
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
              Latest Stories
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Stay updated with our most recent articles, events, and campus happenings
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <CardContent className="space-y-6">
                    <div className="relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <Badge className="absolute top-2 left-2 bg-white/90 text-slate-800 text-xs">
                        {post.category}
                      </Badge>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
                          <div className="flex items-center gap-1">
                            <HeartHandshake className="w-3 h-3" />
                            <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            <span>{post.comments}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-primary font-medium text-sm">
                          Read more
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories & Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <Card className="p-6 sticky top-32">
                <CardContent className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    Categories
                  </h3>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors"
                      >
                        <span className="text-sm font-medium text-slate-900 dark:text-white">
                          {category.name}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t">
                    <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <span className="text-sm">Weekly newsletter</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        <span className="text-sm">Campus highlights</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        <span className="text-sm">Success stories</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4">
                      Subscribe to Newsletter
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Popular Stories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="p-8">
                <CardContent className="space-y-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                    Most Popular Stories
                  </h3>

                  <Tabs defaultValue="trending" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="trending">Trending</TabsTrigger>
                      <TabsTrigger value="recent">Recent</TabsTrigger>
                      <TabsTrigger value="comments">Most Discussed</TabsTrigger>
                    </TabsList>

                    <TabsContent value="trending" className="space-y-6 mt-6">
                      {recentPosts.slice(0, 3).map((post, index) => (
                        <div key={index} className="flex gap-4 p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 cursor-pointer">
                          <Image
                            src={post.image}
                            alt={post.title}
                            width={80}
                            height={60}
                            className="rounded-lg object-cover flex-shrink-0"
                          />
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                              <Calendar className="w-3 h-3" />
                              <span>{post.date}</span>
                              <Badge variant="outline" className="text-xs">{post.category}</Badge>
                            </div>
                            <h4 className="font-semibold text-sm text-slate-900 dark:text-white line-clamp-2">
                              {post.title}
                            </h4>
                            <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
                              <div className="flex items-center gap-1">
                                <HeartHandshake className="w-3 h-3" />
                                <span>{post.likes}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <User className="w-3 h-3" />
                                <span>{post.comments}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </TabsContent>

                    <TabsContent value="recent" className="space-y-4 mt-6">
                      {recentPosts.slice(3, 6).map((post, index) => (
                        <div key={index} className="flex gap-4 p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 cursor-pointer">
                          <Image
                            src={post.image}
                            alt={post.title}
                            width={80}
                            height={60}
                            className="rounded-lg object-cover flex-shrink-0"
                          />
                          <div className="flex-1 space-y-2">
                            <h4 className="font-semibold text-sm text-slate-900 dark:text-white line-clamp-2">
                              {post.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                              <Calendar className="w-3 h-3" />
                              <span>{post.date}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </TabsContent>

                    <TabsContent value="comments" className="space-y-4 mt-6">
                      {recentPosts.slice(0, 3).reverse().map((post, index) => (
                        <div key={index} className="flex gap-4 p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 cursor-pointer">
                          <Image
                            src={post.image}
                            alt={post.title}
                            width={80}
                            height={60}
                            className="rounded-lg object-cover flex-shrink-0"
                          />
                          <div className="flex-1 space-y-2">
                            <h4 className="font-semibold text-sm text-slate-900 dark:text-white line-clamp-2">
                              {post.title}
                            </h4>
                            <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
                              <div className="flex items-center gap-1">
                                <HeartHandshake className="w-3 h-3" />
                                <span>{post.likes}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <User className="w-3 h-3" />
                                <span>{post.comments}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </TabsContent>
                  </Tabs>

                  <div className="pt-6 border-t">
                    <Button variant="outline" className="w-full">
                      View All Stories
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
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
              Want to Share Your BSET Story?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              We welcome submissions from students, alumni, and faculty. Share your experiences, insights, and achievements with our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl">
                Submit Your Story
              </Button>
              <Button variant="outline" size="xl">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}