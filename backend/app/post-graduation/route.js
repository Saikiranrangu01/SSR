import {NextResponse} from "next/server"

  const postGraduation = {
  "machine-learning": {
    "courseName": "Machine Learning",
    "image": "https://example.com/images/machine-learning.png",
    "feeRange": "₹35,000 - ₹55,000",
    "duration": "5 months"
  },
  "blockchain-technology": {
    "courseName": "Blockchain Technology",
    "image": "https://example.com/images/blockchain.png",
    "feeRange": "₹40,000 - ₹60,000",
    "duration": "6 months"
  },
  "cloud-architecture": {
    "courseName": "Cloud Architecture",
    "image": "https://example.com/images/cloud-architecture.png",
    "feeRange": "₹25,000 - ₹45,000",
    "duration": "4 months"
  },
  "cyber-security": {
    "courseName": "Cyber Security",
    "image": "https://example.com/images/cyber-security.png",
    "feeRange": "₹30,000 - ₹50,000",
    "duration": "6 months"
  }
};



  export async function GET(){
    return NextResponse.json(postGraduation);

  }
