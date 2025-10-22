'use client';

import React from 'react';
import { Card, CardBody, Typography } from "@material-tailwind/react";

// Sample blog data
const blogs = [
    {
        id: 1,
        title: 'enlightenment for breakfast',
        image: '/cow.JPG',
        link: '/blog/blog1', // link to static page
    },
    {
        id: 2,
        title: 'irritable bowl syndrome',
        image: '/mcd.jpg',
        link: '/blog/blog2', // link to static page
    },
    {
        id: 3,
        title: 'Mathew Almeida',
        image: '/cazulo.JPG',
        link: '/blog/blog3', // link to static page
    },
];

// Blog card component
function BlogCard({ blog }) {
    return (
        <a href={blog.link} className="block">
            <Card className="relative grid min-h-[24rem] items-end overflow-hidden rounded-xl cursor-pointer" color="transparent">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/70" />
                <CardBody className="relative flex flex-col justify-end">
                    <Typography variant="h5" color="white" className="mb-2">
                        {blog.title}
                    </Typography>
                </CardBody>
            </Card>
        </a>
    );
}

// Main BlogBrowser
export default function BlogBrowser() {
    return (
        <div className="container mx-auto px-6 py-10 lg:py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
}
