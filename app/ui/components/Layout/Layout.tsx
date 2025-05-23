import { Footer } from "../Naviguation/Footer"
import { Nav } from "../Naviguation/Nav"


interface Props {
    children: React.ReactNode
}


export const Layout = ({ children }: Props) => {
    return (
        <>
        <Nav />
        {children}
        <Footer />
        </>
    )
}