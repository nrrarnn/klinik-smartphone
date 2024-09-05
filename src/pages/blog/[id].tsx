import { useRouter } from 'next/router';

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const blogPosts = [
    { id: '1', title: 'How to Fix Screen Issues', content: 'Here is the full content about fixing screen issues...' },
    { id: '2', title: 'Battery Optimization Tips', content: 'Here is the full content about optimizing battery life...' },
    // Tambahkan lebih banyak artikel blog di sini
  ];

  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div className="padding-x py-20">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogDetail;
