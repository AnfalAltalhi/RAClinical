import Header from './Navbar/Navbar'
import { Outlet } from 'react-router'

const ClientLayout = () => {
    return (
        <>
        <Header/>
        <Outlet/>
        </>
    )

}

export default ClientLayout