import {NextResponse} from "next/server"

const navigation = [
  { id: 1, name:"home", label: "Home", href: "/" },
  { id: 2, name:"courses", label: "Courses", href: "/courses" },
  { id: 3, name:"branches", label:"Branches", href: "/branches" },
  { id: 4,name:"success-stories", label: "Success Stories", href: "/success-stories" },
  { id: 5, name:"resourses", label: "Resources", href: "/resources" },
  { id: 6, name:"discover", label: "Discover", href: "/discover" },
  { id: 7, name:"jobs", label: "Apply for Jobs", href: "/jobs", button: true },
];


export async function GET() {
    return NextResponse.json(navigation);
}