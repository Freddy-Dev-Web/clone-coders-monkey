'use client'
import { FaRegUser } from "react-icons/fa"
import { Avatar } from "../../design-system/avatar/Avatar"
import Button from "../../design-system/Button/Button"
import { Logo } from "../../design-system/logo/Logo"
import { Spinner } from "../../design-system/spinner/Spinner"
import Seo from "../Seo/Seo"
import { Layout } from "../Layout/Layout"

export const DesignSystem = () => {
    return (
        <>
        <Seo 
        title="Freddy Mandaba" 
        description="Mon premier projet complet" 
        />
        
            <Layout>
              <div className="space-y-4 py-10 px-10">
        
            <div className=" flex items-center space-x-4 py-10 px-5">
        
              <Spinner size="small"/>
              <Spinner />
              <Spinner size="large"/>
        
              {/* Logo */}
        
              <Logo size="very-small" />
              <Logo size="small" />
              <Logo />
              <Logo size="large" />
        
              {/* Avatar */}
              <Avatar size="small" src="/images/freddy.png" alt="Avatar de Freddy" />
              <Avatar src="/images/freddy.png" alt="Avatar de Freddy" size="large" />
              <Avatar src="/images/freddy.png" alt="Avatar de Freddy" />
          
            <Button isLoading size="small" variant="accent">accent</Button>
            <Button isLoading size="small" variant="secondary">secondary</Button>
            <Button isLoading size="small" variant="outline">outline</Button>
            <Button isLoading size="small" variant="disabled" >disabled</Button>
            <Button 
            isLoading
            size="small" 
            variant="icon"
            icon={<FaRegUser size={16} />}
            />
            </div>
        
            <div className="flex items-center space-x-4 py-10 px-5">
            <Button variant="accent">accent</Button>
            <Button variant="secondary">secondary</Button>
            <Button variant="outline">outline</Button>
            <Button variant="disabled" >disabled</Button>
            <Button 
            variant="icon"
            icon={<FaRegUser size={20} />}
            />
            </div>
        
            <div className="flex items-center space-x-4 py-10 px-5">
            <Button size="large" variant="accent">accent</Button>
            <Button size="large" variant="secondary">secondary</Button>
            <Button size="large" variant="outline">outline</Button>
            <Button size="large" variant="disabled" >disabled</Button>
        
            <Button 
            size="large" 
            variant="icon"
            iconTheme="secondary"
            icon={<FaRegUser size={18} />}
            />
        
            <Button 
            size="large" 
            variant="icon"
            iconTheme="gray"
            icon={<FaRegUser size={20} />}
            />
        
            <Button 
            size="large" 
            variant="icon"
            icon={<FaRegUser size={24} />}
            />
            </div>
            
            </div>
            </Layout>
        
            </>
    )
}