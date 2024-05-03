export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div className=''>
          <h1 className='text-3xl font-semibold text-center my-7'>
            About Mihi's Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              <span className='font-bold'>Mihi's Blog</span> is a full-stack web
              application that allows users to create, read, update, and delete
              blog posts. The application is built with the{' '}
              <span className='font-bold'>MERN</span> stack (MongoDB, Express,
              React, Node.js).
            </p>
            <p>
              Users can create an account, log in, and create, read, update, and
              delete blog posts. Users can also view all posts, view posts by
              category, and search for posts by title.
            </p>
            <p>
              The application uses <span className='font-bold'>JWT</span> (JSON
              Web Tokens) to authenticate users and protect routes. Passwords
              are hashed with <span className='font-bold'>bcrypt</span>. The
              application is styled with{' '}
              <span className='font-bold'>Tailwind CSS</span>.
            </p>
            <p>
              This project is my first full-stack web application. I built it to
              learn the <span className='font-bold'>MERN</span> stack and to
              practice building a full-stack application from scratch. I learned
              a lot about the <span className='font-bold'>MERN</span> stack,
              user authentication, and full-stack development while building
              this project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
