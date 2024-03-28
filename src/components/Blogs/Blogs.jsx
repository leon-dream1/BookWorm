import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Blogs = () => {
  const blogData = useLoaderData();

  // eslint-disable-next-line no-unused-vars
  const [blogs, setBlogs] = useState(blogData);
  console.log(blogData);
  return (
    <section className=" text-gray-100">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900"
        >
          <img
            src="https://source.unsplash.com/random/480x360"
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {blogData[0].title}
            </h3>
            <span className="text-xs text-gray-400">{blogData[0].date}</span>
            <p>{blogData[0].content}</p>
          </div>
        </a>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(1).map((blog) => (
            <a
              key={blog.id}
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline text-black border border-[#13131326]"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src="https://source.unsplash.com/random/480x360?1"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {blog.title}
                </h3>
                <span className="text-xs text-gray-400">{blog.date}</span>
                <p>{blog.content}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
