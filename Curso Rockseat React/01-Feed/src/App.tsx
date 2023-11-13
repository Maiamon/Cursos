import { Header } from './components/Header'
import Post from './components/Post.tsx'
import Sidebar from './components/Sidebar'
import { PostType } from './components/Post.tsx'
import styles from './App.module.css'
import './global.css'

// author: {avatar_url: '', name: '', role '' }
// publishedAt: Date
// content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu profile. É um projeto incrível' },
      { type: 'link', content: '#linkDoProjeto' },
    ],
    publishedAt: new Date('2023-11-02 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu profile. É um projeto incrível' },
      { type: 'link', content: '#linkDoProjeto' },
    ],
    publishedAt: new Date('2023-10-02 20:00:00'),
  },
];

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
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App

