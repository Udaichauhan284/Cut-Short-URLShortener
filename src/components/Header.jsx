import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import useFetch from "@/hooks/use-fetch";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { BarLoader } from "react-spinners";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {  LinkIcon, LogOut } from "lucide-react";
import { UrlState } from "@/context";
import { logout } from "@/db/apiAuth";

const Header = () => {

  const {loading, fn: fnLogout} = useFetch(logout);
  const navigate = useNavigate();
  const {user, fetchUser} = UrlState();


  return (
    <>
    <nav className="py-1 m-4 flex justify-between items-center">
      <Link to="/">
        <img src="/logo.png" altr="Cut Short" className="rounded-full w-20 h-20 ml-4"></img>
      </Link>

      <div className="flex gap-4">
        {!user ? (
          <Button onClick={() => navigate("/auth")}>LogIn</Button>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger className="w-10 rounded-full overflow-hidden">
              <Avatar>
                <AvatarImage src={user?.user_metadata?.profile_pic} className="object-contain"/>
                <AvatarFallback>US</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{user?.user_metadata?.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
              <Link to="/dashboard" className="flex">
                    <LinkIcon className="mr-2 h-4 w-4" />
                    My Links
                  </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="bg-red-600"
                onClick = {() => {
                  fnLogout().then(() => {
                    fetchUser();
                    navigate("/auth");
                  });
                }}
              >
                <LogOut className="mr-1 w-4 h-4" />
                <span className="ml-3">LogOut</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
    {loading && <BarLoader className="mb-4" width={"100%"} color="#36d7b7"/>}
    </>
  );
};

export default Header;
