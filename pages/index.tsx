import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import NavigationPage from './navigation/navigation'
import ToDoList from './ToDoList/toDoList'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learn NextJS</title>
        <meta name="description" content="Demo NextJS" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      {/* Navigation Link */}
      {/* <NavigationPage/> */}

      <h1 className='text-center mt-5'> Home Page</h1>
      {/* ToDoList */}
      <ToDoList/>



    </div>
  )
}

export default Home
