import {NextResponse} from "next/server"

const navigation = {
  "navbar": {
    "logo": "/logo.png",
    "links": ["Home", "Courses", "About", "Contact", "Careers"]
  },
  "banner": {
    "title": "Excellence through Skills for Future-Ready Careers",
    "subtitle": "For Future-Ready Careers with University Certification",
    "image": "/banner-student.png",
    "form": {
      "fields": ["name", "email", "phone"],
      "button": "Apply Now"
    }
  },
  "courses": [
    { "id": 1, "title": "BBA", "desc": "Business Administration", "price": "₹50,000" },
    { "id": 2, "title": "Data Science & AI", "desc": "Learn ML & AI", "price": "₹75,000" },
    { "id": 3, "title": "MBA", "desc": "Master of Business Administration", "price": "₹1,20,000" },
    { "id": 4, "title": "Full Stack Development", "desc": "MERN & Cloud Deployment", "price": "₹80,000" },
    { "id": 5, "title": "Digital Marketing", "desc": "SEO, Ads, Analytics", "price": "₹60,000" }
  ],
  "testimonials": [
    { "name": "Rahul", "text": "Great platform!", "img": "/student1.png" },
    { "name": "Sneha", "text": "Loved the courses!", "img": "/student2.png" },
    { "name": "Amit", "text": "Affordable and high quality education.", "img": "/student3.png" },
    { "name": "Priya", "text": "The mentors are very supportive.", "img": "/student4.png" },
    { "name": "Arjun", "text": "Helped me land my first job.", "img": "/student5.png" }
  ],
  "awards": [
    { "id": 1, "title": "Best EdTech Award 2024", "img": "/award1.png" },
    { "id": 2, "title": "Innovation Award", "img": "/award2.png" },
    { "id": 3, "title": "Top Startup 2023", "img": "/award3.png" },
    { "id": 4, "title": "Excellence in Learning", "img": "/award4.png" },
    { "id": 5, "title": "Student Choice Award", "img": "/award5.png" }
  ],
  "gallery": ["/g1.png", "/g2.png", "/g3.png", "/g4.png", "/g5.png"],

  "footer": {
    "address": "Hyderabad, India",
    "links": ["Privacy Policy", "Terms of Service", "About Us", "Careers", "Contact"],
    "social": ["facebook.png", "instagram.png", "twitter.png", "linkedin.png", "youtube.png"]
  }
}
;


export async function GET() {
  
    return NextResponse.json(navigation);
}