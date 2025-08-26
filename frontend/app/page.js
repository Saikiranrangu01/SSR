import React from 'react'



const page = async () => {
  const res =  await fetch("https://next-full-stack-9gtf.vercel.app/api/courses/python");
  const data = await res.json(res);
  return (
    <div>{data.title}</div>
  )
}

export default page