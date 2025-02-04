import { Sparkles } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
    return <div className="bg-primary dark:bg-slate-700 py-2 px-5 text-white flex justify-between items-center">
        <Link href="/">
            <Sparkles size="28"/>
        </Link> 

        <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback className="text-black">CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><Link href="/profile">Profile</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/auth">Logout</Link></DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>;
}

export default Navbar;
