"use client"
import AuthLess from "../../components/AuthLess"
import LoginPage from '../../shared/pages/LoginPage';
const Home = () => {

  return (
    <AuthLess>
      <LoginPage />

    </AuthLess>

  )
}

export default Home