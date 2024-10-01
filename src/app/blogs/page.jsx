import React from 'react';

const BlogPage = () => {
	const blogs =[
{
	id:1,
	title:'mango'
},
{
	id:2,
	title:'pineapple'
}
	]

	return (
		<div className=''>
			<h2>this is our blog page</h2>
		{
			blogs.map((blog)=>{
				console.log(blog);
				<div key={blog.id}>
					<h1>{blog.title}</h1>
				</div>
			})
		}
		</div>
	);
};

// const blogs = [
// 	{
// 	  slug: 1,
// 	  title: "Web Development Trends to Watch in 2024",
// 	  description: "Discover the latest technologies and trends shaping the future of web development in 2024.",
	 
// 	},
// 	{
// 	  slug: 2,
// 	  title: "Mastering Asynchronous JavaScript",
// 	  description: "Learn the fundamentals and advanced techniques for working with asynchronous code in JavaScript.",
	
// 	},
// 	{
// 	  slug:3,
// 	  title: "Essential Tips for Responsive Web Design",
// 	  description: "Create beautiful, mobile-friendly websites with these responsive design best practices.",
	
// 	},
// 	{
// 	  slug: 4,
// 	  title: "The Ultimate Guide to SEO Optimization in 2024",
// 	  description: "Boost your website's search engine ranking with these proven SEO strategies.",
	 
// 	},
// 	{
// 	  slug: 5,
// 	  title: "Full Stack vs. Front End Development: Which is Right for You?",
// 	  description: "Explore the differences between full-stack and front-end development to determine the best path for your career.",
	  
// 	},
// 	{
// 	  id: 6,
// 	  title: "A Complete Guide to Building Scalable Web Applications",
// 	  description: "Learn how to design and develop scalable web applications with modern technologies and frameworks.",
	 
// 	}
//  ];
 
export default BlogPage;