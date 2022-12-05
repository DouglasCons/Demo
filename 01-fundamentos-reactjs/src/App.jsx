import { Header } from "./componentes/Header";
import { Post } from "./componentes/Post";
import { Sidebar } from "./componentes/Sidebar";

import styles from './App.module.css';

import './global.css';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/douglascons.png',
      name: 'Douglas Barbosa',
      role: 'CEO'
    },
    content: [
      { type: 'paragraph', content: 'Bom dia povo lindu!!',},
      { type: 'paragraph', content: 'E essas manifestações no br...?? O que vai acontecer??'},
      { type: 'link', content: 'inspetor_bujinganga/engenheiro'},
    ],
    publishedAt: new Date('2022-11-13 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Educator'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!!',},
      { type: 'paragraph', content: 'Aabei de subir mais um projeto no meu portifa... É um projeto que ...'},
      { type: 'link', content: 'jane.deesign/doctorcare'},
    ],
    publishedAt: new Date('2022-11-07 20:00:00')
  },
]

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        
        <Sidebar />
        <main>

          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}

        </main>

      </div>

      <h1>Hello world</h1>
      
    </>
  )
}
export default App;