import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Navbar />
            <div className="flex">
                <div className="hidden md:block h-[100vh] w-[300px]"><Sidebar /></div>
                <div className="p-5 w-full md:max-[1140px]">{children}</div>
            </div>
        </>
    );
}

export default MainLayout;