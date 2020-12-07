import React, { useState, useEffect } from 'react'
import { Router } from "@reach/router"
import { Link } from "gatsby"

import BlogTemplate from './blog.template';
import './blog.component.styles.css'

const axios = require('axios');

export default function Blog() {
    const [blogData, setBlogData] = useState(['']);
    
    useEffect(() => {
        async function fetchData() {
            await axios.get("https://dev.to/api/articles?username=aswaff")
                .then(data => setBlogData(data.data));

        } fetchData()
    }, []);

    
    let Home = () => {
        return( 
        blogData.map(a =>
            <div className="articlewrapper">
                <Link to={`/blog/${a.slug}`} ><div className="articletitle">{a.title}</div>
                <div className="articledesc">{a.description}</div>
                <div className="article-details">{a.readable_publish_date}&nbsp;|&nbsp;
                                                🤍{a.public_reactions_count}&nbsp;
                                                🗨 {a.comments_count}</div></Link>
            
                
            </div>)
        )}

    let Article = () => {
        return(
            <BlogTemplate />
        )}

     return (                  
            <Router basepath="/blog">
                <Home path="/" />
                <Article path="/:userId" />
            </Router>
        )           
    }