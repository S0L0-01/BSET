"use client"

import axios, { AxiosInstance } from "axios"
import scraped_data from "../../bset_scraped_data.json"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api"

// Create Axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
})

// Type definitions for API responses
export interface College {
  id: number
  name: string
  short_name: string
  tagline: string
  established_year: number
  address: string
  primary_phone: string
  email: string
  website: string
}

export interface Department {
  id: number
  name: string
  slug: string
  code: string
  duration: string
  intake: number
  overview: string
  vision: string
  labs?: Lab[]
  faculty_members?: Faculty[]
  highlights?: DepartmentHighlight[]
}

export interface Lab {
  id: number
  name: string
  description: string
}

export interface Faculty {
  id: number
  name: string
  designation: string
  qualification: string
  photo_url: string
}

export interface DepartmentHighlight {
  id: number
  title: string
  description: string
}

export interface Statistic {
  id: number
  label: string
  value: number
  icon: string
}

export interface LeadershipMessage {
  id: number
  name: string
  designation: string
  message: string
  photo_url: string
}

export interface Facility {
  id: number
  title: string
  description: string
  icon: string
}

export interface NewsEvent {
  id: number
  title: string
  slug: string
  category: string
  summary: string
  content: string
  image_url: string
  event_date: string
  is_featured: boolean
}

export interface Testimonial {
  id: number
  name: string
  role: string
  designation: string
  department: string
  quote: string
  rating: number
  photo_url: string
}

export interface GalleryMedia {
  id: number
  title: string
  image_url: string
  caption: string
  category: {
    id: number
    name: string
    slug: string
  }
}

export interface RecruiterCompany {
  id: number
  name: string
  sector: string
  logo_url: string
}

export interface PlacementStatistic {
  id: number
  academic_year: string
  students_eligible: number
  students_placed: number
  average_package_lpa: number
}

// API Service functions
export const api = {
  // College Info
  async getCollegeInfo(): Promise<College | null> {
    try {
      const response = await apiClient.get("/core/college/")
      return response.data
    } catch (error) {
      console.warn("College API failed, using fallback data")
      return scraped_data.institution as any
    }
  },

  // Statistics
  async getStatistics(): Promise<Statistic[]> {
    try {
      const response = await apiClient.get("/core/statistics/")
      return response.data
    } catch (error) {
      console.warn("Statistics API failed, using fallback data")
      const stats = scraped_data.institution?.stats || {}
      return [
        { id: 1, label: "Engineers Graduated", value: stats.engineers_produced || 600, icon: "GraduationCap" },
        { id: 2, label: "Annual Intake", value: stats.annual_intake || 360, icon: "Users" },
        { id: 3, label: "Placements", value: stats.annual_placements || 300, icon: "Briefcase" },
        { id: 4, label: "Library Books", value: stats.library_volumes || 5000, icon: "BookOpen" },
      ]
    }
  },

  // Leadership
  async getLeadership(): Promise<LeadershipMessage[]> {
    try {
      const response = await apiClient.get("/core/leadership/")
      return response.data
    } catch (error) {
      console.warn("Leadership API failed, using fallback data")
      const lead = scraped_data.leadership || {}
      return [
        {
          id: 1,
          name: lead.founder_chairman?.name || "Er. Sapan Kumar Padhy",
          designation: lead.founder_chairman?.designation || "Founder & Chairman",
          message: lead.founder_chairman?.message || "",
          photo_url: lead.founder_chairman?.image || "",
        },
        {
          id: 2,
          name: lead.principal?.name || "Er. Lalitendu Sahu",
          designation: lead.principal?.designation || "Principal",
          message: lead.principal?.message || "",
          photo_url: lead.principal?.image || "",
        },
      ]
    }
  },

  // Departments
  async getDepartments(): Promise<Department[]> {
    try {
      const response = await apiClient.get("/departments/")
      return response.data
    } catch (error) {
      console.warn("Departments API failed, using fallback data")
      return scraped_data.departments?.map((d: any, idx: number) => ({
        id: idx + 1,
        name: d.name,
        slug: d.id,
        code: d.code,
        duration: d.duration,
        intake: d.intake,
        overview: d.overview,
        vision: `Excellence in ${d.name}`,
        labs: d.labs?.map((l: any, i: number) => ({ id: i + 1, name: l, description: "" })) || [],
      })) || []
    }
  },

  async getDepartmentBySlug(slug: string): Promise<Department | null> {
    try {
      const response = await apiClient.get(`/departments/${slug}/`)
      return response.data
    } catch (error) {
      console.warn(`Department ${slug} API failed, using fallback data`)
      const dept = scraped_data.departments?.find((d: any) => d.id === slug)
      if (dept) {
        return {
          id: 1,
          name: dept.name,
          slug: dept.id,
          code: dept.code,
          duration: dept.duration,
          intake: dept.intake,
          overview: dept.overview,
          vision: `Excellence in ${dept.name}`,
          labs: dept.labs?.map((l: any, i: number) => ({ id: i + 1, name: l, description: "" })) || [],
        }
      }
      return null
    }
  },

  // Facilities
  async getFacilities(): Promise<Facility[]> {
    try {
      const response = await apiClient.get("/core/facilities/")
      return response.data
    } catch (error) {
      console.warn("Facilities API failed, using fallback data")
      return scraped_data.facilities?.map((f: any, idx: number) => ({
        id: idx + 1,
        title: f.title,
        description: f.description,
        icon: "Building2",
      })) || []
    }
  },

  // News & Events
  async getNewsEvents(featured = false): Promise<NewsEvent[]> {
    try {
      const params = featured ? { is_featured: true } : {}
      const response = await apiClient.get("/blog/", { params })
      return response.data
    } catch (error) {
      console.warn("News API failed")
      return []
    }
  },

  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    try {
      const response = await apiClient.get("/testimonials/")
      return response.data
    } catch (error) {
      console.warn("Testimonials API failed")
      return []
    }
  },

  // Gallery
  async getGalleryMedia(category?: string): Promise<GalleryMedia[]> {
    try {
      const params = category ? { category } : {}
      const response = await apiClient.get("/gallery/", { params })
      return response.data
    } catch (error) {
      console.warn("Gallery API failed")
      return []
    }
  },

  // Recruiters
  async getRecruiters(): Promise<RecruiterCompany[]> {
    try {
      const response = await apiClient.get("/placements/recruiters/")
      return response.data
    } catch (error) {
      console.warn("Recruiters API failed")
      return []
    }
  },

  // Placement Stats
  async getPlacementStats(): Promise<PlacementStatistic[]> {
    try {
      const response = await apiClient.get("/placements/statistics/")
      return response.data
    } catch (error) {
      console.warn("Placement stats API failed")
      return []
    }
  },

  // Submit Contact Form
  async submitContactForm(data: { name: string; email: string; phone: string; subject: string; message: string }) {
    try {
      const response = await apiClient.post("/core/contact-messages/", data)
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Submit Admission Enquiry
  async submitAdmissionEnquiry(data: {
    full_name: string
    email: string
    phone: string
    department_interest: string
    message?: string
  }) {
    try {
      const response = await apiClient.post("/admissions/enquiries/", data)
      return response.data
    } catch (error) {
      throw error
    }
  },
}
