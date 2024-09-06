import Button from '@/components/elements/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const blogPosts = [
    { id: '1', 
      title: 'Kenapa Memperbaiki Smartphone Lebih Hemat daripada Membeli Baru?', content: `Ketika smartphone rusak, banyak orang langsung berpikir untuk membeli yang baru. Namun, memperbaiki ponsel yang rusak sering kali merupakan pilihan yang lebih hemat dan bijaksana. Dalam artikel ini, kami akan menjelaskan mengapa memperbaiki smartphone bisa menjadi pilihan yang lebih baik daripada menggantinya dengan yang baru.

    Salah satu alasan utama memperbaiki ponsel lebih hemat adalah biaya yang jauh lebih rendah. Komponen seperti layar, baterai, atau port pengisian daya bisa diganti dengan harga yang jauh lebih murah dibandingkan dengan membeli ponsel baru.
    Selain itu, memperbaiki smartphone juga membantu memperpanjang umur perangkat Anda. Dengan perbaikan sederhana, ponsel Anda bisa kembali berfungsi seperti baru dan bertahan untuk beberapa tahun lagi, tanpa perlu mengeluarkan biaya besar untuk perangkat baru.

    Memperbaiki ponsel juga memiliki manfaat lingkungan. Dengan memperbaiki dan menggunakan kembali ponsel, Anda membantu mengurangi limbah elektronik yang semakin mengkhawatirkan.
    Terkadang, model terbaru ponsel tidak menawarkan banyak perbedaan signifikan dibandingkan model lama. Jadi, memperbaiki ponsel yang rusak bisa memberi Anda performa yang sama tanpa harus mengeluarkan uang lebih banyak untuk upgrade yang sebenarnya tidak terlalu diperlukan.

    Banyak klinik perbaikan, termasuk klinik kami, juga memberikan garansi untuk komponen yang diganti, sehingga Anda tidak perlu khawatir jika masalah yang sama muncul kembali setelah perbaikan.Membeli ponsel baru mungkin terlihat menarik, tetapi memperbaiki ponsel yang rusak sering kali merupakan pilihan yang lebih bijak, baik dari segi biaya maupun dampaknya terhadap lingkungan. Jika Anda membutuhkan layanan perbaikan yang cepat dan terpercaya, kunjungi klinik smartphone kami untuk mendapatkan solusi terbaik!`,
  image: 'blog1' },

    { 
      id: '2', 
      title: 'Masalah Smartphone yang Sering Terjadi dan Solusinya',
      content : `Smartphone sering kali mengalami berbagai masalah, terutama setelah digunakan dalam jangka waktu lama. Pada artikel ini, kami akan membahas beberapa masalah umum yang sering dialami pengguna dan memberikan solusi yang bisa Anda coba sendiri sebelum datang ke klinik.Salah satu masalah yang paling sering dialami adalah layar pecah atau retak. Solusi sementara yang bisa dilakukan adalah menggunakan pelindung layar untuk mencegah kerusakan lebih lanjut, meskipun perbaikan profesional tetap dibutuhkan untuk mengganti layar yang rusak.

      Masalah baterai yang cepat habis juga sering terjadi. Anda bisa mencoba mematikan aplikasi yang berjalan di latar belakang dan mengaktifkan penghemat baterai untuk memperpanjang daya. Jika ini tidak membantu, kemungkinan besar baterai ponsel Anda perlu diganti.
      Kinerja ponsel yang lambat bisa diatasi dengan membersihkan cache dan menghapus file yang tidak diperlukan. Restart ponsel juga sering kali membantu memperbaiki masalah kinerja. Namun, jika ponsel masih lambat, mungkin sudah waktunya untuk melakukan reset ke pengaturan pabrik.

      Masalah lain yang sering muncul adalah port pengisian daya yang longgar atau tidak berfungsi dengan baik. Membersihkan port secara hati-hati dapat membantu, tetapi jika masalah berlanjut, penggantian port mungkin diperlukan.

      Sebagian besar masalah smartphone dapat diatasi dengan langkah sederhana. Namun, jika ponsel Anda masih bermasalah, teknisi di klinik kami siap membantu memperbaiki perangkat Anda dengan cepat dan efisien.`,
      image: 'blog2'
    
    },
    {
      id: '3',
      title: 'Cara Menjaga Smartphone Anda Agar Tetap Awet',
      content: `Smartphone adalah bagian penting dari kehidupan kita sehari-hari. Namun, banyak orang tidak menyadari bahwa ada beberapa langkah sederhana yang bisa membuat ponsel mereka bertahan lebih lama. Pada artikel ini, kami akan berbagi tips praktis yang bisa Anda lakukan untuk merawat ponsel Anda.

      Salah satu cara terbaik untuk melindungi smartphone Anda adalah dengan menggunakan pelindung layar dan casing. Ini membantu mencegah goresan dan benturan yang bisa merusak perangkat. Selain itu, hindari menempatkan ponsel Anda di tempat yang terkena suhu ekstrem, karena panas dan dingin berlebihan bisa mempengaruhi baterai dan komponen lainnya.

      Hal lain yang perlu diperhatikan adalah menggunakan pengisi daya berkualitas. Charger murah mungkin terlihat menarik, tetapi bisa menyebabkan masalah seperti overcharging. Membersihkan ponsel secara berkala juga sangat penting, terutama di bagian port pengisian daya dan speaker, yang rentan terhadap debu dan kotoran.

      Jangan lupa untuk selalu memperbarui perangkat lunak ponsel Anda. Update berkala tidak hanya menghadirkan fitur baru, tetapi juga menjaga keamanan ponsel Anda dari potensi ancaman.

      Dengan mengikuti langkah-langkah ini, Anda dapat memperpanjang umur smartphone Anda dan menghindari perbaikan yang tidak perlu. Jika Anda merasa ponsel Anda mulai bermasalah, jangan ragu untuk mengunjungi klinik smartphone kami!`,
      image: 'blog3'
          }
  ];

  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div className="padding-x py-28">
      <img src={`/img/${post.image}.jpg`} alt={post.title} className='w-full h-[250px] object-cover' />
      <h1 className="text-4xl font-bold mb-6 mt-3">{post.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
      <div className='pt-5'>
        <Button>
          <Link href="/blog" className="flex justify-center items-center ">Kembali</Link> 
        </Button>
      </div>
    </div>
  );
};

export default BlogDetail;
