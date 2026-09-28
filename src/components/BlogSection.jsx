import './BlogSection.css';
const posts = [
  {
    img: '/images/IMG_9-min_802x604_crop_center.webp',
    alt: 'RGB gaming mouse setup',
    title: 'Level Up Your Setup Essential Gear for Competitive Gaming',
  },
  {
    img: '/images/IMG_8-min_802x604_crop_center.webp',
    alt: 'Gaming headset on keyboard',
    title: 'Ultimate Guide to Choosing the Best Gaming Gear for Every Gamer',
  },
  {
    img: '/images/IMG_7-min_802x604_crop_center.webp',
    alt: 'RGB gaming keyboard close-up',
    title: 'The Impact of High-Quality Headsets on Your Gaming Experience',
  },
  {
    img: '/images/IMG_6-min_802x604_crop_center.webp',
    alt: 'Game controllers with neon lighting',
    title: 'Top 10 Must-Have Gaming Accessories for Every Gamer',
  },
];
export default function BlogSection() {
  return (
    <section className="section-blog">
      <div className="distance">
        <div className="container-fluid">
          <div className="title_section text-center">
            <div className="title">
              <p>Our Blog</p>
            </div>
            <div className="sub_title mt-15">
              <p>Explore the cutting edge of technology and innovation</p>
            </div>
          </div>
          <div className="blog-grid">
            {posts.map((post, i) => (
              <div key={i} className="sp-item">
                <article className="article--listing">
                  <div className="article__list-image-container">
                    <a href="#">
                      <img src={post.img} alt={post.alt} loading="lazy" />
                    </a>
                    <span className="article__date">Aug 03, 2024</span>
                  </div>
                  <div className="media-body">
                    <span className="article__author">By Vinova Theme</span>
                    <h3 className="article__title">
                      <a href="#">{post.title}</a>
                    </h3>
                    <div className="article__excerpt">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus
                      venenatis ex, et ultricies nunc...
                    </div>
                    <a href="#" className="view_all">
                      <span>Read more</span>
                      <i className="blog-arrow" aria-hidden="true"></i>
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
