"use client";

import { Heading } from "@/components/Heading/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";
import { Billboard } from "@prisma/client";
import { ColorColumn, columns } from "@/components/Colors/columns";
import { DataTable } from "@/components/data-table/data-table";
import { ApiList } from "@/components/ui/api-list"


interface ColorsClientProps {
    data: ColorColumn[]
}

export const ColorsClient: React.FC<ColorsClientProps> = ({
    data
}) => {
    const router = useRouter();
    const params = useParams();
    
    return(
        <>
            <div className="flex items-center justify-between">
                <Heading
                title={`Colors (${data.length})`}
                description="Manage colors for your store"
                />
                <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
                    <Plus className="mr-2 h-4 w-4"/>
                    Add New
                </Button>
            </div>
            <Separator/>
            <DataTable searchKey="name" columns={columns} data={data}/>
            <Heading title="API" description="API calls for colors"/>
            <Separator/>
            <ApiList entityName="colors" entityIdName="colorId"/>
        </>
    )
}