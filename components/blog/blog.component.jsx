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

    
    const List = () => {
        return( 
        blogData.map(article =>
            <div className="articlewrapper">
                <Link to={`/blog/${article.slug}`} ><div className="articletitle">{article.title}</div>
                <div className="articledesc">{article.description}</div>
                <div className="article-details">{article.readable_publish_date}&nbsp;|&nbsp;
                                                🤍{article.public_reactions_count}&nbsp;
                                                🗨 {article.comments_count}</div></Link>
            
                
            </div>)
        )}

    const Article = () => {
        return(
            <BlogTemplate />
        )}

     return (                  
            <Router basepath="/blog">
                <List path="/" />
                <Article path="/:article" />
            </Router>
        )           
    }
