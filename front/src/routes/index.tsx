import { Routes, Route } from "react-router-dom"
import DashboardAdmin from "../pages/DashboardAdmin"
import DashboardClient from "../pages/DashboardClient"
import Login from "../pages/Login"

const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<DashboardClient />} />
            <Route path="/dashboard_admin" element={<DashboardAdmin />} />
        </Routes>
    )
}
export default RoutesMain