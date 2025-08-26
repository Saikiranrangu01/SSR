import { NextResponse } from "next/server";


const courses =  [
  {
    "name": "web-development",
    "title": "Web Development",
    "description": "HTML, CSS, JavaScript, React, Node.js."
  },
  {
    "name": "digital-marketing",
    "title": "Digital Marketing",
    "description": "SEO, Google Ads, Analytics, Social Media Marketing."
  },
  {
    "name": "data-science",
    "title": "Data Science",
    "description": "Python, Pandas, Machine Learning, Deep Learning."
  },
  {
    "name": "mobile-app-development",
    "title": "Mobile App Development",
    "description": "Flutter, React Native, Android, iOS."
  },
  {
    "name": "cloud-computing",
    "title": "Cloud Computing",
    "description": "AWS, Azure, Google Cloud Platform, DevOps."
  },
  {
    "name": "cyber-security",
    "title": "Cybersecurity",
    "description": "Ethical Hacking, Network Security, Penetration Testing."
  },
  {
    "name": "ui/ux-design",
    "title": "UI/UX Design",
    "description": "Wireframing, Prototyping, Figma, Adobe XD."
  },
  {
    "name": "artificial-intelligence",
    "title": "Artificial Intelligence",
    "description": "Neural Networks, NLP, Computer Vision."
  },
  {
    "name": "block-chain development",
    "title": "Blockchain Development",
    "description": "Smart Contracts, Ethereum, Web3, Cryptocurrency."
  },
  {
    "name": "project-management",
    "title": "Project Management",
    "description": "Agile, Scrum, Kanban, Risk Management."
  },
  {
    "name": "graphic-design",
    "title": "Graphic Design",
    "description": "Photoshop, Illustrator, Branding, Visual Design."
  },
  {
    "name": "business-analytics",
    "title": "Business Analytics",
    "description": "Data Visualization, Power BI, Tableau, SQL."
  }
]





export async function GET(request, {params}) {
  const {name} = params;
  const course = courses.find((c)=>c.name === name.toLowerCase());

  if (!course) {
    return NextResponsejson({error:"course not found"},{status:500})
  }
  return NextResponse.json(course);
}

