"use client"
import AuthLess from "../../components/AuthLess"
import Layout from "../../shared/layout/Layout";
import LoginPage from '../../shared/pages/LoginPage';
const Home = () => {

  return (
    <AuthLess>
      <Layout>
        <LoginPage />
      </Layout>
    </AuthLess>

  )
}

export default Home