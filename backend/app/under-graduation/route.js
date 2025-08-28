import {NextResponse} from "next/server"
  const underGraduation = {
    "web-development":{
      "courseName": "Web Development",
      "image": "https://example.com/images/web-development.png",
      "feeRange": "₹15,000 - ₹25,000",
      "duration": "3 months"
    },
    "data-science":{
      "courseName": "Data Science",
      "image": "https://example.com/images/data-science.png",
      "feeRange": "₹30,000 - ₹50,000",
      "duration": "6 months"
    },
    "digital-marketing":{
      "courseName": "Digital Marketing",
      "image": "https://example.com/images/digital-marketing.png",
      "feeRange": "₹10,000 - ₹20,000",
      "duration": "2 months"
    },
    "mobile-app-development":{
      "courseName": "Mobile App Development",
      "image": "https://example.com/images/mobile-app.png",
      "feeRange": "₹20,000 - ₹40,000",
      "duration": "4 months"
    }
  }


  export async function GET(){
    return NextResponse.json(underGraduation);

  }
