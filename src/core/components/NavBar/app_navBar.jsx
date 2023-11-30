import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link as NextLink, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";

import logoIcon from "../../../assets/logo.jpg";

import { Link } from "react-router-dom";
import appFirebase from '../../../credenciales';
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(appFirebase);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {id:2, name:"Tareas", to:"/tareas", current:false},
    // {id:1, name:"Notas", to:"/notas", current:true},
    {id:3, name:"Recordatorios", to:"/recordatorio", current:false},
    // {id:4, name:"Papelera", to:"/papelera", current:false},
    // {id:5, name:"Cerrar sesión", to:"#", current:true},
  ];
{logoIcon}
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#3075A1] text-xl text-white">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
       <NavbarBrand className="flex items-center flex-nowrap">
  <Link to={"/"} className="flex items-center">
    <img className="mr-3 h-4 sm:h-6" src={logoIcon} alt="argentina programa" />
    <p className="font-bold text-inherit">Notas de React</p>
  </Link>
</NavbarBrand>

      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      {menuItems.map((item) => (
          <NavbarMenuItem key={item.id}>
            <NextLink
              className="w-full p-2 focus:text-[#D0D0D0] focus:shadow-[#46A9E2] rounded-lg text-[#212121] focus:shadow hover:text-[#D0D0D0]"
              size="lg"
            >
                <Link to={item.to} className="font-semibold">
                 {item.name}
                </Link>
            </NextLink>
          </NavbarMenuItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end" >
        <NavbarItem className="hidden lg:flex">
          <Button onClick={() => signOut(auth)} as={NextLink} className="text-[#D0D0D0] shadow-[#102634] shadow font-semibold bg-opacity-40 bg-[#204F6C] hover:bg-[#1E4A65]"  href="#" >
            Cerrar sesión
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-[#3075A1]  text-xl text-white">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.id}>
            <NextLink
              color={item.current ? "primary" : "foreground"}
              className="w-full text-[#212121] font-semibold hover:text-[#D0D0D0]"
              size="lg"
            >
                <Link to={item.to} >
                 {item.name}
                </Link>
            </NextLink>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <NextLink className="text-[#D0D0D0]" onClick={() => signOut(auth)} as={NextLink}  href="#" >
            Cerrar sesión
          </NextLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
