import os
import sys
import json
from pathlib import Path
import django

# Setup Django environment
BASE_DIR = Path(__file__).resolve().parent
sys.path.append(str(BASE_DIR))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bset_project.settings')
django.setup()

from django.contrib.auth.models import User
from apps.core.models import CollegeInfo, Statistic, LeadershipMessage, ValueMission, Facility
from apps.departments.models import Department, DepartmentHighlight, Lab
from apps.admissions.models import EligibilityCriterion, DocumentRequirement
from apps.placements.models import RecruiterCompany, PlacementStatistic, CRTModule
from apps.examination.models import ExamNotice, OfficialDownload
from apps.gallery.models import GalleryCategory, GalleryMedia
from apps.blog.models import NewsEvent
from apps.testimonials.models import Testimonial


def seed_all():
    print("🚀 Starting BSET Data Seeder...")

    # 1. Create Superuser admin / admin123
    if not User.objects.filter(username='admin').exists():
        User.objects.create_superuser('admin', 'admin@bsetberhampur.ac.in', 'admin123')
        print("✅ Superuser created: admin / admin123")
    else:
        print("ℹ️ Superuser 'admin' already exists.")

    # Load Scraped Data JSON
    json_path = BASE_DIR.parent / 'bset_scraped_data.json'
    if not json_path.exists():
        print(f"❌ Error: {json_path} not found.")
        return

    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # 2. Seed College Info
    inst = data.get('institution', {})
    CollegeInfo.objects.update_or_create(
        id=1,
        defaults={
            'name': inst.get('name', 'Berhampur School of Engineering & Technology'),
            'short_name': inst.get('short_name', 'BSET Berhampur'),
            'tagline': inst.get('tagline', "Empowering Engineering Minds for Tomorrow's Technology"),
            'established_year': inst.get('established_year', 2004),
            'det_code': inst.get('det_code', 'bset'),
            'college_code': inst.get('college_code', '786456'),
            'campus_area': inst.get('campus_area', '5 Acres'),
            'address': f"{inst.get('location', {}).get('address', '')}, {inst.get('location', {}).get('city', '')}, {inst.get('location', {}).get('district', '')}, {inst.get('location', {}).get('state', '')} - {inst.get('location', {}).get('pincode', '')}",
            'primary_phone': inst.get('contacts', {}).get('phones', ['+91-9437062282'])[0],
            'secondary_phone': inst.get('contacts', {}).get('phones', ['', '+91-8280730451'])[1] if len(inst.get('contacts', {}).get('phones', [])) > 1 else "+91-8280730451",
            'email': inst.get('contacts', {}).get('emails', ['bsetberhampur@gmail.com'])[0],
            'website': inst.get('contacts', {}).get('website', 'https://bsetberhampur.ac.in'),
            'facebook_url': inst.get('contacts', {}).get('social', {}).get('facebook', ''),
            'youtube_url': inst.get('contacts', {}).get('social', {}).get('youtube', ''),
        }
    )
    print("✅ Seeded College Info")

    # 3. Seed Statistics
    stats_map = [
        ('engineers_produced', 'Engineers Graduated', 600, '', '+', 'GraduationCap', 1),
        ('annual_intake', 'Annual Student Intake', 360, '', '+', 'Users', 2),
        ('annual_placements', 'Average Annual Placements', 300, '', '+', 'Briefcase', 3),
        ('library_volumes', 'Library Books & Volumes', 5000, '', '+', 'BookOpen', 4),
        ('campus_acres', 'Lush Green Campus', 5, '', ' Acres', 'Trees', 5),
        ('recruiting_partners', 'Corporate Recruiters', 38, '', '+', 'Building2', 6),
    ]
    Statistic.objects.all().delete()
    for key, label, default_val, prefix, suffix, icon, order in stats_map:
        val = inst.get('stats', {}).get(key, default_val)
        Statistic.objects.create(
            label=label,
            value=val,
            prefix=prefix,
            suffix=suffix,
            icon=icon,
            order=order
        )
    print("✅ Seeded Statistics")

    # 4. Seed Leadership Messages
    lead = data.get('leadership', {})
    LeadershipMessage.objects.all().delete()
    if 'founder_chairman' in lead:
        fc = lead['founder_chairman']
        LeadershipMessage.objects.create(
            role='founder',
            name=fc.get('name', 'Er. Sapan Kumar Padhy'),
            designation=fc.get('designation', 'Founder & Chairman'),
            photo_url=fc.get('image', '/images/leadership/founder.jpg'),
            message=fc.get('message', ''),
            order=1
        )
    if 'principal' in lead:
        pr = lead['principal']
        LeadershipMessage.objects.create(
            role='principal',
            name=pr.get('name', 'Er. Lalitendu Sahu'),
            designation=pr.get('designation', 'Principal'),
            photo_url=pr.get('image', '/images/leadership/principal.jpg'),
            message=pr.get('message', ''),
            order=2
        )
    print("✅ Seeded Leadership Messages")

    # 5. Seed Vision & Mission
    ValueMission.objects.all().delete()
    ValueMission.objects.create(
        item_type='vision',
        title='Excellence in Technical & Polytechnic Education',
        content='To become a center of excellence in diploma engineering and vocational education in Eastern India, nurturing technically competent, socially responsible, and innovative engineers ready to serve society and industry.',
        order=1
    )
    ValueMission.objects.create(
        item_type='mission',
        title='Practical Skills, Ethical Values & Industrial Relevance',
        content='Provide rigorous practical and theoretical technical training, foster industry-academia collaboration for 100% employment readiness, and cultivate high ethical and human values in every student.',
        order=2
    )
    ValueMission.objects.create(
        item_type='values',
        title='Core Values of BSET',
        content='Integrity, Innovation, Inclusivity, Discipline, Excellence in Practical Learning, and Student-Centric Mentorship.',
        order=3
    )
    print("✅ Seeded Vision & Mission")

    # 6. Seed Facilities
    Facility.objects.all().delete()
    facilities = data.get('facilities', [])
    facility_icons = ['Building2', 'Wrench', 'BookOpen', 'Headphones', 'Monitor', 'Presentation', 'Trophy', 'Trees']
    for idx, fac in enumerate(facilities):
        Facility.objects.create(
            title=fac.get('title', ''),
            description=fac.get('description', ''),
            icon=facility_icons[idx % len(facility_icons)],
            image_url=f"/images/facilities/facility-{idx+1}.jpg",
            order=idx + 1
        )
    print("✅ Seeded Facilities")

    # 7. Seed Departments, Highlights, Labs
    Department.objects.all().delete()
    dept_icons = {
        'CE': 'Building',
        'EE': 'Zap',
        'ETC': 'Cpu',
        'ME': 'Cog'
    }
    for idx, dept_data in enumerate(data.get('departments', [])):
        dept = Department.objects.create(
            name=dept_data.get('name', ''),
            slug=dept_data.get('id', dept_data.get('code', '').lower()),
            code=dept_data.get('code', ''),
            duration=dept_data.get('duration', '3 Years (6 Semesters)'),
            intake=dept_data.get('intake', 60),
            intake_details=dept_data.get('intake_breakdown', f"{dept_data.get('intake', 60)} Seats"),
            established_year=dept_data.get('established_year', 2008),
            overview=dept_data.get('overview', ''),
            vision=f"To produce world-class {dept_data.get('name', '')} professionals equipped with contemporary practical skills.",
            icon=dept_icons.get(dept_data.get('code', ''), 'GraduationCap'),
            banner_image=f"/images/departments/{dept_data.get('id', 'dept')}-banner.jpg",
            order=idx + 1
        )

        # Add highlights
        for h_idx, h_text in enumerate(dept_data.get('highlights', [])):
            DepartmentHighlight.objects.create(
                department=dept,
                title=f"Highlight #{h_idx+1}",
                description=h_text,
                order=h_idx + 1
            )

        # Add labs if listed
        for l_idx, lab_name in enumerate(dept_data.get('labs', [])):
            Lab.objects.create(
                department=dept,
                name=lab_name,
                description=f"State-of-the-art laboratory for practical curriculum experiments in {dept.name}.",
                order=l_idx + 1
            )
    print("✅ Seeded Departments, Highlights & Labs")

    # 8. Seed Admissions (Eligibility & Documents)
    EligibilityCriterion.objects.all().delete()
    adm = data.get('admission', {})
    EligibilityCriterion.objects.create(
        category='1st Year Diploma Entry (Regular)',
        criteria=adm.get('eligibility', 'Pass in 10th Standard (Matriculation) or equivalent examination with minimum 35% marks from BSE Odisha / CBSE / ICSE.'),
        order=1
    )
    EligibilityCriterion.objects.create(
        category='2nd Year Lateral Entry',
        criteria=adm.get('lateral_entry', 'Passed +2 Science with Vocational / Technical subjects or 2-Year ITI in relevant engineering trade.'),
        order=2
    )

    DocumentRequirement.objects.all().delete()
    for idx, doc in enumerate(adm.get('required_documents', [])):
        DocumentRequirement.objects.create(
            title=doc,
            is_mandatory=True,
            order=idx + 1
        )
    print("✅ Seeded Admissions Requirements")

    # 9. Seed Placements
    PlacementStatistic.objects.all().delete()
    PlacementStatistic.objects.create(
        academic_year="2023-2024",
        students_eligible=350,
        students_placed=310,
        companies_visited=42,
        highest_package_lpa=5.20,
        average_package_lpa=3.10,
        order=1
    )
    PlacementStatistic.objects.create(
        academic_year="2022-2023",
        students_eligible=340,
        students_placed=295,
        companies_visited=38,
        highest_package_lpa=4.80,
        average_package_lpa=2.85,
        order=2
    )

    CRTModule.objects.all().delete()
    CRTModule.objects.create(
        title="Quantitative Aptitude & Logical Reasoning",
        duration_hours=40,
        description="Core problem-solving, speed math, logical puzzles, number systems, and analytical thinking.",
        key_topics="Arithmetic, Algebra, Data Interpretation, Syllogisms, Series Completion, Blood Relations",
        order=1
    )
    CRTModule.objects.create(
        title="Technical Core Concepts & Viva Prep",
        duration_hours=50,
        description="Fundamental domain revision for Mechanical, Civil, Electrical, and ETC branches.",
        key_topics="Engineering Mechanics, Thermodynamics, Circuit Theory, Structural Analysis, Digital Electronics",
        order=2
    )
    CRTModule.objects.create(
        title="Soft Skills, GD & HR Mock Interviews",
        duration_hours=30,
        description="Professional communication, group discussions, resume engineering, and mock panel interviews.",
        key_topics="Resume building, Group Discussion strategies, Body language, Video interview simulations",
        order=3
    )

    # Top recruiters
    RecruiterCompany.objects.all().delete()
    top_recruiters = [
        ("Tata Motors", "Automotive & Heavy Vehicles", True),
        ("Larsen & Toubro (L&T)", "Construction & Infrastructure", True),
        ("Jindal Steel & Power", "Metals & Mining", True),
        ("Ashok Leyland", "Automotive", True),
        ("Schneider Electric", "Electrical & Energy", True),
        ("Yokogawa India", "Automation & Instrumentation", True),
        ("Mahindra & Mahindra", "Automotive & Farm Equipment", True),
        ("Vedanta Resources", "Mining & Metals", True),
        ("ArcelorMittal Nippon Steel", "Steel Manufacturing", True),
        ("JBM Group", "Auto Components", True),
        ("Gabriel India", "Auto Ancillary", True),
        ("Motherson Sumi Systems", "Wiring Systems & Electronics", True),
    ]
    for idx, (name, sector, top) in enumerate(top_recruiters):
        RecruiterCompany.objects.create(
            name=name,
            sector=sector,
            is_top_recruiter=top,
            logo_url=f"/images/recruiters/{name.lower().replace(' ', '-').replace('&', 'and')}.png",
            order=idx + 1
        )
    print("✅ Seeded Placements, CRT Modules & Recruiters")

    # 10. Seed Exam Notices & Official Downloads
    ExamNotice.objects.all().delete()
    ExamNotice.objects.create(
        title="Schedule for 1st, 3rd & 5th Semester Winter Diploma Exams 2025-26",
        notice_number="BSET/EXAM/2026/042",
        category="exam",
        published_date="2026-02-15",
        file_url="/downloads/exam-schedule-winter-2026.pdf",
        is_important=True
    )
    ExamNotice.objects.create(
        title="Online Examination Form Fillup Notice for Regular and Ex-Regular Students",
        notice_number="BSET/EXAM/2026/039",
        category="registration",
        published_date="2026-02-01",
        file_url="/downloads/form-fillup-guidelines.pdf",
        is_important=True
    )
    ExamNotice.objects.create(
        title="Publication of 2nd, 4th & 6th Summer Diploma Examination Results",
        notice_number="BSET/EXAM/2025/118",
        category="result",
        published_date="2025-08-10",
        file_url="/downloads/summer-results-2025.pdf",
        is_important=False
    )

    OfficialDownload.objects.all().delete()
    downloads = [
        ("AICTE Extension of Approval (EoA) 2024-2025", "aicte", "2024-25", "/downloads/aicte-eoa-2024-25.pdf", 1),
        ("ISO 9001:2008 Quality Management Certificate", "iso", "Permanent", "/downloads/iso-9001-certificate.pdf", 2),
        ("Anti-Ragging Committee & Squad Guidelines", "anti_ragging", "2024-25", "/downloads/anti-ragging-policy.pdf", 3),
        ("Internal Grievance Redressal Committee Composition", "grievance", "2024-25", "/downloads/grievance-committee.pdf", 4),
        ("Diploma Model Syllabus & Lesson Plans (SCTE&VT)", "syllabus", "2024-25", "/downloads/sctevt-diploma-syllabus.pdf", 5),
    ]
    for title, cat, year, url, order in downloads:
        OfficialDownload.objects.create(
            title=title,
            category=cat,
            academic_year=year,
            file_url=url,
            order=order
        )
    print("✅ Seeded Exam Notices & Official Downloads")

    # 11. Seed Gallery Categories & Media
    GalleryCategory.objects.all().delete()
    cat_campus = GalleryCategory.objects.create(name="Campus Life & Infrastructure", slug="campus", order=1)
    cat_labs = GalleryCategory.objects.create(name="Workshops & Labs", slug="labs", order=2)
    cat_events = GalleryCategory.objects.create(name="Annual Day & Tech Fest", slug="events", order=3)
    cat_sports = GalleryCategory.objects.create(name="Sports & Tournaments", slug="sports", order=4)

    GalleryMedia.objects.all().delete()
    media_items = [
        (cat_campus, "BSET Main Academic Block", "/images/gallery/campus-1.jpg", "Aerial view of main campus building", True, 1),
        (cat_campus, "Central E-Library & Reading Hall", "/images/gallery/campus-2.jpg", "Over 5,000 engineering books and journals", True, 2),
        (cat_labs, "Mechanical Lathe & Machine Workshop", "/images/gallery/lab-1.jpg", "Heavy machinery practical demonstration", True, 3),
        (cat_labs, "Advanced Electrical & Electronics Lab", "/images/gallery/lab-2.jpg", "Modern circuit testing benches", True, 4),
        (cat_events, "Annual Tech Fest - TechnoVision", "/images/gallery/event-1.jpg", "Students showcasing robotic prototypes", True, 5),
        (cat_sports, "Annual Inter-College Cricket Tournament", "/images/gallery/sports-1.jpg", "Champions trophy ceremony", True, 6),
    ]
    for cat, title, img_url, cap, featured, order in media_items:
        GalleryMedia.objects.create(
            category=cat,
            title=title,
            image_url=img_url,
            caption=cap,
            is_featured=featured,
            order=order
        )
    print("✅ Seeded Gallery Categories & Media")

    # 12. Seed News & Events
    NewsEvent.objects.all().delete()
    news_items = [
        ("Admissions Open for Diploma Engineering (2026-2027 Session)", "news-admissions-open-2026", "news",
         "Online and offline registrations are now open for 1st Year Diploma and 2nd Year Lateral Entry at BSET Berhampur.",
         "BSET invites aspiring students to apply for Diploma in Mechanical, Electrical, Civil, and Electronics & Telecommunication Engineering. Scholarships available for meritorious and economically backward students.",
         "/images/news/admissions-2026.jpg", "2026-03-01", True),
        ("Campus Placement Drive: 120+ Students Placed in Leading Automotive Firms", "placement-drive-success-2026", "achievement",
         "Tata Motors, L&T, and Jindal Steel hired top diploma talent from Mechanical and Electrical branches during the Spring 2026 recruitment drive.",
         "The training and placement cell at BSET organized a 3-day multi-corporate placement drive. Average package stood at 3.2 LPA with highest offer touching 5.2 LPA.",
         "/images/news/placements-2026.jpg", "2026-02-18", True),
        ("Annual Tech Expo & Project Exhibition 'TechFest 2026'", "techfest-exhibition-2026", "event",
         "Over 50 innovative student models on renewable energy, smart irrigation, and automated machinery were exhibited.",
         "Principal Er. Lalitendu Sahu praised the ingenuity of students who built solar tracking arrays, hydraulic cranes, and IoT-enabled pollution monitors.",
         "/images/news/techfest-2026.jpg", "2026-01-25", True),
    ]
    for title, slug, cat, summ, content, img, date, feat in news_items:
        NewsEvent.objects.create(
            title=title,
            slug=slug,
            category=cat,
            summary=summ,
            content=content,
            image_url=img,
            event_date=date,
            is_featured=feat,
            is_published=True
        )
    print("✅ Seeded News & Events")

    # 13. Seed Testimonials
    Testimonial.objects.all().delete()
    testimonials = [
        ("Subhashree Mohanty", "alumni", "Junior Engineer at Tata Motors", "Mechanical Engineering", "/images/testimonials/student-1.jpg",
         "The hands-on workshop training and CRT classes at BSET were pivotal in helping me clear my campus interview on the first attempt.", 5, True, 1),
        ("Rajesh Kumar Sahu", "alumni", "Site Supervisor at L&T Construction", "Civil Engineering", "/images/testimonials/student-2.jpg",
         "Faculty mentorship and real-world surveying exposure gave me the confidence to handle large infrastructure project sites right after my diploma.", 5, True, 2),
        ("Priyanka Panigrahi", "student", "Final Year Diploma Student", "Electrical Engineering", "/images/testimonials/student-3.jpg",
         "The labs are exceptionally well-equipped with AC/DC machines and simulation boards. BSET feels like a second home with caring teachers.", 5, True, 3),
        ("Pradeep Nayak", "parent", "Parent of Alumnus", "Electronics & Telecommunication", "/images/testimonials/parent-1.jpg",
         "BSET provided my son not only technical engineering skills but also discipline, character, and a reputable job in Pune within 3 months of completion.", 5, True, 4),
    ]
    for name, role, desig, dept, photo, quote, rating, feat, order in testimonials:
        Testimonial.objects.create(
            name=name,
            role=role,
            designation=desig,
            department=dept,
            photo_url=photo,
            quote=quote,
            rating=rating,
            is_featured=feat,
            order=order
        )
    print("✅ Seeded Testimonials")

    print("\n🎉 All BSET data seeded successfully into Django database!")


if __name__ == '__main__':
    seed_all()
