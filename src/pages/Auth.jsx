import LogIn from '@/components/LogIn'
import {SignUp} from '@/components/SignUp'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import { useSearchParams } from 'react-router-dom'

export const Auth = () => {
  const [searchParams] = useSearchParams()
  return (
    <div className="mt-30 flex flex-col items-center gap-10">
      <h1 className="text-5xl font-extrabold">
        {searchParams.get("createNew")
          ? "Wait! Let's login first.."
          : "Login / Signup"}
      </h1>
      <Tabs defaultValue="LogIn" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="LogIn">Login</TabsTrigger>
          <TabsTrigger value="SignUp">Signup</TabsTrigger>
        </TabsList>
        <TabsContent value="LogIn">
          <LogIn />
        </TabsContent>
        <TabsContent value="SignUp">
          <SignUp />
        </TabsContent>
      </Tabs>
    </div>
  );

}
