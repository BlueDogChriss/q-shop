"use client";

import { Modal } from "@/components/modals/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { UserButton } from "@clerk/nextjs";
import { useEffect } from "react";

const DashboardPage = () => {
    
    const onOpen = useStoreModal((state) => state.onOpen);
    const isOpen = useStoreModal((state) => state.isOpen);

    useEffect(() => {
        if(!isOpen){
            onOpen();
        }
    },[isOpen, onOpen]);

    return null
  }

export default DashboardPage;