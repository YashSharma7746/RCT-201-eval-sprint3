import React from 'react'
import { Box, Menu, MenuButton, MenuList, MenuItem, Image } from "@chakra-ui/react";
import Link from 'next/link';
const Navbar = () => {
  return (
    <Box p="10px" borderBottom={"3px solid "} display="flex">
        <Box display="flex" gap="20px">
            <Link href="/">Yash Sharma</Link>
            <Link href="/projects">Projects</Link>
            <Link href={"/education"}>Education</Link>
        </Box>
        <Box>
        </Box>
    </Box>
  )
}

export default Navbar