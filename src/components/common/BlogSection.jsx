import PropTypes from 'prop-types';

const BlogSection = ({ title, blogs = [] }) => {
  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2 className="section-title">{title}</h2>
      </div>

      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <div className="blog-image">
              <img src={blog.image} alt={blog.title} />
              <span className="blog-category">{blog.category}</span>
            </div>
            <div className="blog-content">
              <h3 className="blog-title">{blog.title}</h3>
              <div className="blog-meta">
                <span className="blog-author">By {blog.author}</span>
                <span className="blog-divider">|</span>
                <span className="blog-date">{blog.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="blog-dots">
        {blogs.map((_, index) => (
          <span key={index} className={`blog-dot ${index === 1 ? 'active' : ''}`}></span>
        ))}
      </div>
    </section>
  );
};

BlogSection.propTypes = {
  title: PropTypes.string.isRequired,
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    })
  )
};

export default BlogSection;
