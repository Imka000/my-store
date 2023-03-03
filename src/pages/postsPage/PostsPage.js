import React, {useState} from 'react';
import styles from './PostsPage.module.css'
import Accordion from 'react-bootstrap/Accordion'

const PostsCard = ({title, thumbnailUrl}) => {
    return(
        <div className={styles.post_card}>
            <h2>{title}</h2>
            <img src={thumbnailUrl}/>
        </div>
    )
}

const PostsPage = () => {
    const [posts, setPosts] = useState([])

    const getPosts = () => {
        const link = 'https://jsonplaceholder.typicode.com/photos'

        fetch(link)
            .then(response => response.json())
            .then(data => setPosts(data))
    }
    return (
        <div className='container'>
            <button onClick={getPosts}>Получить посты</button>
            <div className={styles.posts_container}>
            {
                posts.map((item) =>{
                    return(
                        <PostsCard
                            key={item.id}
                            title={item.title}
                            thumbnailUrl={item.thumbnailUrl}
                        />
                    )
                })
            }


            </div>
        </div>
    );
};

export default PostsPage;