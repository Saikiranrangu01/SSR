import { NextResponse } from "next/server";


//Submenu for dropdown

const dropdown = {
    courses:[
        {name:"web-development", title:"Web Development", href:"/courses/web-development"},
        { name: "digital-marketing", title: "Digital Marketing", href: "/courses/digital-marketing"},
        { name: "data-science", title: "Digital Marketing", href: "/courses/data-science" },
        { name: "mobile-app-development", title: "Digital Marketing", href: "/courses/mobile-app-development" },
        { name: "cloud-computing", title: "Digital Marketing", href: "/courses/cloud-computing" },
        { name: "cyber-security", title: "Digital Marketing", href: "/courses/cyber-security" },
        { name: "ui/ux-design", title: "Digital Marketing", href: "/courses/ui/ux-design" },
        { name: "artificial-intelligence", title: "Digital Marketing", href: "/courses/artificial-intelligence" },
        { name: "block-chain development", title: "Digital Marketing", href: "/courses/block-chain development" },
        { name: "project-management", title: "Digital Marketing", href: "/courses/project-management" },
        { name: "graphic-design", title: "Digital Marketing", href: "/courses/graphic-design" },
        { name: "business-analytics", title: "Digital Marketing", href: "/courses/business-analytics" },
    ],
     branches: [
    { name: "hyderabad", title: "Hyderabad", href: "/branches/hyderabad" },
    { name: "mumbai", title: "Mumbai", href: "/branches/mumbai" },
    { name: "delhi", title: "Delhi", href: "/branches/delhi" },
  ],
    resources: [
    { name: "ebooks", title: "E-Books", href: "/resources/ebooks" },
    { name: "blogs", title: "Blogs", href: "/resources/blogs" },
    { name: "videos", title: "Videos", href: "/resources/videos" },
  ]
};

export async function GET(request, {params}) {
    const {name} = params;
    

    if(dropdown[name]){
        return NextResponse.json(dropdown[name]);
    }else{
        return NextResponse.json({error:"No dropdown found"}, {status:400});
    }
}