import {NextResponse} from  "next/server"

const doctrate = {
  "ui-ux-design": {
    "courseName": "UI/UX Design",
    "image": "https://example.com/images/ui-ux.png",
    "feeRange": "₹12,000 - ₹22,000",
    "duration": "3 months"
  },
  "cloud-computing": {
    "courseName": "Cloud Computing",
    "image": "https://example.com/images/cloud-computing.png",
    "feeRange": "₹25,000 - ₹45,000",
    "duration": "5 months"
  },
  "cyber-security": {
    "courseName": "Cyber Security",
    "image": "https://example.com/images/cyber-security.png",
    "feeRange": "₹18,000 - ₹35,000",
    "duration": "4 months"
  },
  "artificial-intelligence": {
    "courseName": "Artificial Intelligence",
    "image": "https://example.com/images/artificial-intelligence.png",
    "feeRange": "₹40,000 - ₹70,000",
    "duration": "6 months"
  }
};

export async function GET(){
    return NextResponse.json(doctrate);
}

