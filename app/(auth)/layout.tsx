import ThemeToggler from "@/components/ThemeToggler";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex items-center justify-center h-[100vh] relative">
            <div className="absolute bottom-5 right-0 text-white">
                <ThemeToggler />
            </div>
            {children}
        </div>
    );
}

export default AuthLayout;