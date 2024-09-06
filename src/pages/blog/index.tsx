import Button from "@/components/elements/Button";
import CardBlog from "@/components/fragments/blog-fragments/CardBlog";
import HeroBlog from "@/components/fragments/blog-fragments/HeroBlog";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

const BlogPage = () => {
  return(
    <>
      <HeroBlog>Blog</HeroBlog>
      <CardBlog/>
    </>
  )
}

export default BlogPage;