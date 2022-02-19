import React from "react";
import setupTags from "../utils/setupTags";
import { Link } from 'gatsby'
import slugify from 'slugify'

const Tagslist = ({recipes}) => {
    const newTags = setupTags(recipes)

    return (
        <div>
            <h4>Tags Testing</h4>
            <div className="tags-list">
                {newTags.map((tag, index) => {
                    const [text, value] = tag
                    const slug = slugify(text, {lower:true})
                    return <Link key={index} to={`/tags/${slug}`}> {text} ({value}) </Link>
                })}
            </div>
        </div>
     );
}

export default Tagslist;