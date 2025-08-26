async function getAllPosts() {
    const posts = [
    {
      slug: "my-first-post",
      title: "My First Post",
      content: "This is my first blog post. Welcome to my blog!",
    },
    {
      slug: "why-nextjs-is-awesome",
      title: "Why Next.js is Awesome",
      content: "Next.js makes building web apps easy with features like SSG and SSR.",
    },
  ];
  return posts;
}

// fetch single post by slug
//helper function
async function getPostBySlug(slug) {
    const posts = await getAllPosts();
    return posts.find((post)=>post.slug === slug);
}

//generate static parameters for all blog posts
export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post)=>({
        slug:post.slug,
    }));
}


//page component for rendering a single blog post
export default async function Page({params}) {
    const {slug} = params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return <h1>Post Not found</h1>
    }

    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}