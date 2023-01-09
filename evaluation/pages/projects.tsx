import React,{useEffect, useState} from 'react'
import {Box,Heading,Text} from "@chakra-ui/react";
import Link from 'next/link';

type projectsData = {
    name: string,
    description: string | null,
    language: string,
    forks_count: number,
    watchers: number
}
const getData = async() => {
    let res = await fetch("https://api.github.com/search/repositories?q=user:YashSharma7746+fork:true&sort=updated&per_page=10&type=Repositories");
    let d = await res.json();
    return (d);
}
const Projects = () => {
    let [data,setData] = useState <projectsData[]>([]);
  useEffect(()=>{
    getData().then((res)=>setData(res.items))
  },[])
  console.log(data);
    return (
        <>
        <Heading textAlign={"center"}>Projects</Heading>
    <Box display={"grid"} gridTemplateColumns="repeat(2,1fr)" gap="10px" w="70%"m="auto">
        {data && data.map((item)=>{
            return <Link href={`https://github.com/YashSharma7746/${item.name}`}>
                <Box display={"flex"} p="25px" position={"relative"} boxShadow={"xl"}>
                    <Box>
                        <Heading as="h3" size="md">{item.name}</Heading>
                        <Text>{item.description}</Text>
                        <Box display={"flex"} gap="20" justifyContent="space-between">
                            <Box display={"flex"} gap="10px">
                                <Text>Star Count : - {item.watchers}</Text>
                                <Text>Forked : - {item.forks_count}</Text>
                            </Box>
                            <Box>{item.language}</Box>
                        </Box>
                    </Box>
                </Box>
                </Link>
        })}
    </Box>
    </>
  )
}

export default Projects

