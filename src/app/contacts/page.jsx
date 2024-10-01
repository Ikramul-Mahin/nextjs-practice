import React from 'react';

const page = () => {
	return (
		<div>
			<h2>this is contact page</h2>
			{
				blogs.map((blog)=>{
					console.log(blog);
					<div key={blog.slug}>
       <h1>{blog.title}</h1>
					</div>
				})
			}
		</div>
	);
};
const blogs = [
	{
	  slug: 1,
	  title: "Web Development Trends to Watch in 2024",
	  description: "Discover the latest technologies and trends shaping the future of web development in 2024.",
	 
	},
	{
	  slug: 2,
	  title: "Mastering Asynchronous JavaScript",
	  description: "Learn the fundamentals and advanced techniques for working with asynchronous code in JavaScript.",
	
	},
	{
	  slug:3,
	  title: "Essential Tips for Responsive Web Design",
	  description: "Create beautiful, mobile-friendly websites with these responsive design best practices.",
	
	},
	{
	  slug: 4,
	  title: "The Ultimate Guide to SEO Optimization in 2024",
	  description: "Boost your website's search engine ranking with these proven SEO strategies.",
	 
	},
	{
	  slug: 5,
	  title: "Full Stack vs. Front End Development: Which is Right for You?",
	  description: "Explore the differences between full-stack and front-end development to determine the best path for your career.",
	  
	}
 ];
export default page;