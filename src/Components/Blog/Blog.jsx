import PropTypes from 'prop-types';
import { CiBookmarkCheck } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookMark, handleMarkAsRead }) => {
    const {id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover of ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookMark(blog)}
                        className='ml-2 text-red-600 text-2xl'><CiBookmarkCheck></CiBookmarkCheck></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a>#{hash}</a></span>)
                }
            </p>
            <button
            onClick={()=>handleMarkAsRead(id, reading_time)}
            className='text-purple-800 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;