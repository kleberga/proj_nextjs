'use client'

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { useUser } from "../contexts/userContext";

const PrivateRoute = ({ children }) => {
    const { user } = useUser();
    const router = useRouter();
    const pathname = usePathname();
    const publicRoutes = ['/', '/registro', '/sobre_nos', '/politica_privacidade', '/recuperar_senha'];
    useEffect(() => {
        if (!user?.id && !publicRoutes.includes(pathname)) {
            router.push('/'); 
        }
    }, [user, router, pathname]);

    if (!user?.id && !publicRoutes.includes(pathname)) {
        return null; 
    }

    return children;
};

export default PrivateRoute;
