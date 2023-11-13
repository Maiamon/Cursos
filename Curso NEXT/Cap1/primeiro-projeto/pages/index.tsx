import LoginForm from '@/components/Login-form'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Login Page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <LoginForm></LoginForm>
        </main>
      </div>
    </>
  )
}
