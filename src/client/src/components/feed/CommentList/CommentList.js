import React, { Component } from 'react';
import styles from './CommentList.module.scss';

import Comment from '../Comment/Comment';

class CommentList extends Component {

    state = {
        expanded: false,
    }

    render() {
        const { comments } = this.props;
        return (
            <div className={styles.comment_list}>
                {this.state.expanded ? comments.map((comment, key) => (
                    <Comment 
                        author={comment.author}
                        authorId={comment.authorId}
                        time={comment.time}
                        text={comment.text}
                        key={key++}/>
                )) : (
                    <div className={styles.comment_list_placeholder} onClick={() => this.setState({ expanded: true })}>
                        {comments.length} comment{comments.length === 1 ? '' : 's'}
                    </div>
                )}
            </div>
        )
    }
}

CommentList.propTypes = {

}

export default CommentList;