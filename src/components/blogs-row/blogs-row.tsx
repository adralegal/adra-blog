import React, {FunctionComponent} from 'react';
import classes from "./blogs-row.module.css";

type BlogsRowProps = {
    header: string,
    content: Array<FunctionComponent>
}

const BlogsRow:FunctionComponent<BlogsRowProps> = ({header, content}) => {
    return (
        <div className={classes.Wrapper}>
            <h3>{header}</h3>
            <div className={classes.Content}>
                {content}
            </div>
        </div>
    )
}

export default BlogsRow;