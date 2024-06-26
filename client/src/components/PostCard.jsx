import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div className='group relative w-full border h-[370px] overflow-hidden rounded-lg sm:w-[350px] dark:border-white border hover:border-2 border-slate-500 transition-all'>
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt={post.title}
          className='h-[240px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20'
        />
        <div className='p-3 flex flex-col gap-2'>
          {/* Cần import line clamp vào FE để sử dụng line-clamp */}
          <p className='text-lg font-semibold line-clamp-2'>{post.title}</p>
          <span className='italic text-sm'>{post.category}</span>
          <Link
            to={`/post/${post.slug}`}
            className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 
            border border-slate-500 text-slate-500 dark:hover:bg-white dark:hover:text-slate-500 hover:bg-slate-500 hover:text-white
            transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
          >
            Read article
          </Link>
        </div>
      </Link>
    </div>
  );
}
