import { NextResponse } from "next/server";

let courses = {
  "web-development": {
    name: "web-development",
    title: "Web Development",
    description: "HTML, CSS, JavaScript, React, Node.js.",
  },
  "digital-marketing": {
    name: "digital-marketing",
    title: "Digital Marketing",
    description: "SEO, Google Ads, Analytics, Social Media Marketing.",
  },
  "data-science": {
    name: "data-science",
    title: "Data Science",
    description: "Python, Pandas, Machine Learning, Deep Learning.",
  },
  "mobile-app-development": {
    name: "mobile-app-development",
    title: "Mobile App Development",
    description: "Flutter, React Native, Android, iOS.",
  },
  "cloud-computing": {
    name: "cloud-computing",
    title: "Cloud Computing",
    description: "AWS, Azure, Google Cloud Platform, DevOps.",
  },
  "cyber-security": {
    name: "cyber-security",
    title: "Cybersecurity",
    description: "Ethical Hacking, Network Security, Penetration Testing.",
  },
  "ui/ux-design": {
    name: "ui/ux-design",
    title: "UI/UX Design",
    description: "Wireframing, Prototyping, Figma, Adobe XD.",
  },
  "artificial-intelligence": {
    name: "artificial-intelligence",
    title: "Artificial Intelligence",
    description: "Neural Networks, NLP, Computer Vision.",
  },
  "block-chain development": {
    name: "block-chain development",
    title: "Blockchain Development",
    description: "Smart Contracts, Ethereum, Web3, Cryptocurrency.",
  },
  "project-management": {
    name: "project-management",
    title: "Project Management",
    description: "Agile, Scrum, Kanban, Risk Management.",
  },
  "graphic-design": {
    name: "graphic-design",
    title: "Graphic Design",
    description: "Photoshop, Illustrator, Branding, Visual Design.",
  },
  "business-analytics": {
    name: "business-analytics",
    title: "Business Analytics",
    description: "Data Visualization, Power BI, Tableau, SQL.",
  },
  "software-testing": {
    name: "software-testing",
    title: "Software Testing",
    description: "Manual Testing, Automation, Selenium, QA Practices.",
  },
  "game-development": {
    name: "game-development",
    title: "Game Development",
    description: "Unity, Unreal Engine, Game Physics, 3D Modeling.",
  },
  "devops": {
    name: "devops",
    title: "DevOps",
    description: "CI/CD, Docker, Kubernetes, Jenkins.",
  },
  "big-data": {
    name: "big-data",
    title: "Big Data",
    description: "Hadoop, Spark, Data Lakes, Distributed Systems.",
  },
  "internet-of-things": {
    name: "internet-of-things",
    title: "Internet of Things",
    description: "IoT Devices, Arduino, Raspberry Pi, Smart Systems.",
  },
  "augmented-reality": {
    name: "augmented-reality",
    title: "Augmented Reality",
    description: "ARKit, ARCore, Mixed Reality, 3D Interaction.",
  },
  "virtual-reality": {
    name: "virtual-reality",
    title: "Virtual Reality",
    description: "VR Development, Oculus, Immersive Experiences.",
  },
  "robotics": {
    name: "robotics",
    title: "Robotics",
    description: "ROS, Sensors, Automation, Control Systems.",
  },
  "database-management": {
    name: "database-management",
    title: "Database Management",
    description: "MySQL, PostgreSQL, MongoDB, Database Design.",
  },
  "entrepreneurship": {
    name: "entrepreneurship",
    title: "Entrepreneurship",
    description: "Startup Strategy, Business Models, Pitching, Fundraising.",
  },
  "financial-analysis": {
    name: "financial-analysis",
    title: "Financial Analysis",
    description: "Investment, Risk Analysis, Excel, Corporate Finance.",
  },
  "health-informatics": {
    name: "health-informatics",
    title: "Health Informatics",
    description: "Healthcare Data, EMR, Medical AI Applications.",
  },
  "supply-chain-management": {
    name: "supply-chain-management",
    title: "Supply Chain Management",
    description: "Logistics, Inventory, Lean Management, ERP.",
  },
  "renewable-energy": {
    name: "renewable-energy",
    title: "Renewable Energy",
    description: "Solar, Wind, Hydropower, Sustainable Tech.",
  },
  "digital-illustration": {
    name: "digital-illustration",
    title: "Digital Illustration",
    description: "Drawing, Digital Art, Procreate, Character Design.",
  },
  "content-writing": {
    name: "content-writing",
    title: "Content Writing",
    description: "Copywriting, Blogging, SEO Writing, Editing.",
  },
  "video-editing": {
    name: "video-editing",
    title: "Video Editing",
    description: "Premiere Pro, After Effects, Storyboarding, Production.",
  },
  "language-learning": {
    name: "language-learning",
    title: "Language Learning",
    description: "English, Spanish, French, Communication Skills.",
  },
  "psychology": {
    name: "psychology",
    title: "Psychology",
    description: "Behavioral Science, Cognitive Psychology, Therapy Basics.",
  },
  "philosophy": {
    name: "philosophy",
    title: "Philosophy",
    description: "Ethics, Logic, Critical Thinking, World Philosophies.",
  },
};




export async function GET(request) {
  const {searchParams} = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10",10);
  const search = searchParams.get("search");

  // const sortBy = searchParams.get("sortBy") || "title"; // Default to sorting by title
  // const order = searchParams.get("order") || "asc"; // Default to ascending

  //pagination logic
  if (page <1 || limit<1) {
    return NextResponse.json({error:"invalid page or limit"}, {status:400});
  }

   // Validate sortBy and order parameters
  // const validSortFields = ["title", "name"];
  // if (!validSortFields.includes(sortBy)) {
  //   return NextResponse.json({ error: `Invalid sortBy field. Must be one of: ${validSortFields.join(", ")}` }, { status: 400 });
  // }


  //   if (!["asc", "desc"].includes(order)) {
  //   return NextResponse.json({ error: "Invalid order. Must be 'asc' or 'desc'" }, { status: 400 });
  // }


  //convert course object to array
  let  courseArray = Object.values(courses);

  //Apply search filter if provided
  if (search) {
    const searchLower = search.toLowerCase();
    courseArray = courseArray.filter(course=>course.title.toLowerCase().includes(searchLower) || 
    course.description.toLowerCase().includes(searchLower)
  );
  }

  
  // Apply sorting
  // coursesArray.sort((a, b) => {
  //   const valueA = a[sortBy].toLowerCase();
  //   const valueB = b[sortBy].toLowerCase();
  //   if (order === "asc") {
  //     return valueA.localeCompare(valueB);
  //   } else {
  //     return valueB.localeCompare(valueA);
  //   }
  // });



  //apply pagination
  const total = courseArray.length;
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedCourses = courseArray.slice(start, end);



  return NextResponse.json({
    courses: paginatedCourses,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit)

  });
}




// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const { name, title, description } = body;

//     // Validate required fields
//     if (!name || !title || !description) {
//       return NextResponse.json({ error: "Name, title, and description are required" }, { status: 400 });
//     }

//     // Check if course already exists
//     if (courses[name]) {
//       return NextResponse.json({ error: `Course with name ${name} already exists` }, { status: 409 });
//     }

//     // Add new course
//     courses[name] = { name, title, description };
//     return NextResponse.json(courses[name], { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ error: "Invalid request" }, { status: 400 });
//   }
// }