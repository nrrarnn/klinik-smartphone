import Link from "next/link"

type CardBlogType = {
  id: number
  title: string
  image: string
  description: string
}
const CardBlog = () => {
  return(
    <>
      <div className="padding-x section-wrapper pt-20 gap-3 pb-40">
        {
          blogPosts.map((item) => {
            return (
              <div className="blog-card" key={item.id}>
                <div className="w-full h-64 bg-slate-300 rounded-md mb-3"></div>
                <div>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <Link href={`/blog/${item.id}`}>
                    <button className="text-blue-500 hover:underline">Read more</button>
                  </Link>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

const blogPosts: CardBlogType[] = [
  {
    id: 1,
    title: "Blog 1",
    image: "/img/blog-1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 2,
    title: "Blog 2",
    image: "/img/blog-1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 3,
    title: "Blog 3",
    image: "/img/blog-1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
]

export default CardBlog