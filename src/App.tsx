import React, {useEffect} from 'react';
import './App.css';

type PropsType = {
    body: string
    id: number
    title: string
    userId: number
}

function App() {
    const [posts, setPosts] = React.useState<PropsType[]>([]);
    console.log(posts);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, []);

    function deleteHandler () {
        setPosts([])}

    function showPost() {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(json => setPosts(json))
    }



    return (
        <div className="App">

            <button onClick={deleteHandler}>Del</button>
            <button onClick={showPost}>show</button>
            <button onClick={()=>{}}>showId</button>
            {posts.map((el) => {
                return (
                    <ul key={el.id}>
                        <li>{el.title}</li>
                        <li>{el.body}</li>
                        <li>{el.userId}</li>
                    </ul>
                )
            })}
        </div>
    );
}

export default App;
