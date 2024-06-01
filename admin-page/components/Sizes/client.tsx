"use client";

import { Heading } from "@/components/Heading/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";
import { Billboard } from "@prisma/client";
import { SizeColumn, columns } from "@/components/Sizes/columns";
import { DataTable } from "@/components/data-table/data-table";
import { ApiList } from "@/components/ui/api-list"


interface SizesClientProps {
    data: SizeColumn[]
}

export const SizesClient: React.FC<SizesClientProps> = ({
    data
}) => {
    const router = useRouter();
    const params = useParams();
    
    return(
        <>
            <div className="flex items-center justify-between">
                <Heading
                title={`Sizes (${data.length})`}
                description="Manage sizes for your store"
                />
                <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
                    <Plus className="mr-2 h-4 w-4"/>
                    Add New
                </Button>
            </div>
            <Separator/>
            <DataTable searchKey="name" columns={columns} data={data}/>
            <Heading title="API" description="API calls for sizes"/>
            <Separator/>
            <ApiList entityName="sizes" entityIdName="sizeId"/>
        </>
    )
}