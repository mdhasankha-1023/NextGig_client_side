import { useLoaderData } from "react-router-dom"

export default function Blog() {
    const blogs = useLoaderData();
    console.log(blogs)
    return (
        <div className="my-20 flex flex-col justify-center items-center gap-12 mx-auto">
            {
                blogs.map(blog => <div key={blog._id} className="card w-11/12 bg-[#F4F7FC]">
                    <div className="card-body">
                        <h2 className="card-title text-2xl">{blog?.title}</h2>
                        <p className="text-xl">{blog?.blog}</p>
                    </div>
                </div>)
            }

        </div>
    )
}
