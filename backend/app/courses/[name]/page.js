
async function getAllCourses(){
  const courses = [
  { name:"web-development", title: "Web Development", description: "HTML, CSS, JavaScript, React, Node.js." },
  { name:"digital-marketing", title: "Digital Marketing", description: "SEO, Google Ads, Analytics, Social Media Marketing." },
  { name:"data-science", title: "Data Science", description: "Python, Pandas, Machine Learning, Deep Learning." },
  { name:"mobile-app-development", title: "Mobile App Development", description: "Flutter, React Native, Android, iOS." },
  { name:"cloud-computing", title: "Cloud Computing", description: "AWS, Azure, Google Cloud Platform, DevOps." },
  { name:"cyber-security", title: "Cybersecurity", description: "Ethical Hacking, Network Security, Penetration Testing." },
  { name:"ui/ux-design", title: "UI/UX Design", description: "Wireframing, Prototyping, Figma, Adobe XD." },
  { name:"artificial-intelligence", title: "Artificial Intelligence", description: "Neural Networks, NLP, Computer Vision." },
  { name:"block-chain development", title: "Blockchain Development", description: "Smart Contracts, Ethereum, Web3, Cryptocurrency." },
  { name:"project-management", title: "Project Management", description: "Agile, Scrum, Kanban, Risk Management." },
  { name:"graphic-design", title: "Graphic Design", description: "Photoshop, Illustrator, Branding, Visual Design." },
  { name:"business-analytics", title: "Business Analytics", description: "Data Visualization, Power BI, Tableau, SQL." },


];
return courses;

}

// fetch single course by name
//helper function
async function getPostByName(name) {
    const courses = await getAllCourses();
    return courses.find((course)=>course.name === name);
}

export async function generateStaticParams() {
    const courses = await getAllCourses();
    return courses.map((course)=>({
        name:course.name,
    }));
}


//page component for rendering a single blog post
export default async function Page({params}) {
    const {name} = params;
    const course = await getPostByName(name);

    if (!course) {
        return <h1>Course Not found</h1>
    }
    return(
        <div>
            <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-center">
                
                {/* <!-- Left Section --> */}
                <div class="md:col-span-2">
                <div class="flex items-center gap-2">
                    <span class="text-yellow-400 text-lg font-bold">5.0 ★★★★★</span>
                    <span class="text-black">1634 Reviews</span>
                </div>

                <h1 class="text-3xl md:text-4xl font-bold mt-4 leading-snug text-white">
                    {course.title} <br /> with Certification
                </h1>

                <p class="mt-4 text-white font-medium">
                {course.description}
                </p>

                <div class="flex gap-4 mt-3">
                    <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/10/Indian_Institute_of_Technology_Guwahati_Logo.svg"
                    alt="IIT Guwahati"
                    class="h-12 bg-white p-2 rounded"Y
                    />
                    <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                    alt="Microsoft"
                    class="h-12 bg-white p-2 rounded"
                    />
                </div>

                {/* <!-- Bullet Points --> */}
                <ul class="mt-6 space-y-3 text-white">
                    <li class="flex items-start gap-2"><span class="text-red-500 text-lg">✔</span><span>Learn Python, R, SQL, and core data science concepts</span></li>
                    <li class="flex items-start gap-2"><span class="text-red-500 text-lg">✔</span><span>Become expert in machine learning, AI, and predictive analytics</span></li>
                    <li class="flex items-start gap-2"><span class="text-red-500 text-lg">✔</span><span>Work with Pandas, NumPy, and data visualization tools</span></li>
                    <li class="flex items-start gap-2"><span class="text-red-500 text-lg">✔</span><span>Explore big data technologies like Hadoop, Spark and more</span></li>
                    <li class="flex items-start gap-2"><span class="text-red-500 text-lg">✔</span><span>Gain expertise in deep learning, TensorFlow, and NLP</span></li>
                    <li class="flex items-start gap-2"><span class="text-red-500 text-lg">✔</span><span>Build industry-level projects with real datasets</span></li>
                </ul>

                <button class="mt-6 bg-red-500 text-white px-6 py-3 rounded font-semibold hover:bg-red-600 transition">
                    Enroll Now
                </button>
                </div>

                {/* <!-- Right Section (Form) --> */}
                <div class="bg-white text-gray-800 p-6 rounded-2xl shadow-lg">
                <h2 class="text-lg font-semibold text-center mb-4">
                    Get the syllabus and start your success journey!
                </h2>
                <form class="space-y-4 text-black">
                    <input type="text" placeholder="Enter your full name" class="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" />
                    <input type="email" placeholder="Enter your email address" class="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" />
                    <input type="text" placeholder="Enter your mobile number" class="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" />
                    <input type="text" placeholder="Enter your city" class="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" />
                    <input type="text" value="Data Science" readonly class="w-full border rounded-lg px-3 py-2 bg-gray-100" />
                    <button type="submit" class="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition">
                    Download Syllabus
                    </button>
                </form>
                </div>
            </div>
        </div>
        
       
    )
}

