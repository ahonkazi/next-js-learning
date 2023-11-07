"use client"

import Layout from "../../shared/layout/Layout"
import PrivateRoute from "../../components/PrivateRoute"
const Dashboard = () => {

  return (

    <PrivateRoute>
      <Layout>
        <div className="flex justify-center py-8">
          <h1 className="text-2xl py-8 px-8 bg-slate-700 text-white rounded-md"> Dashboard</h1>

        </div>
      </Layout>
    </PrivateRoute>


  )
}

export default Dashboard