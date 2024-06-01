"use client";

import { Heading } from "@/components/Heading/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";
import { Billboard } from "@prisma/client";
import { CategoryColumn, columns } from "@/components/Categories/columns";
import { DataTable } from "@/components/data-table/data-table";
import { ApiList } from "@/components/ui/api-list"


interface CategoryClientProps {
    data: CategoryColumn[]
}

export const CategoryClient: React.FC<CategoryClientProps> = ({
    data
}) => {
    const router = useRouter();
    const params = useParams();
    
    return(
        <>
            <div className="flex items-center justify-between">
                <Heading
                title={`Categories (${data.length})`}
                description="Manage categories for your store"
                />
                <Button onClick={() => router.push(`/${params.storeId}/categories/new`)}>
                    <Plus className="mr-2 h-4 w-4"/>
                    Add New
                </Button>
            </div>
            <Separator/>
            <DataTable searchKey="name" columns={columns} data={data}/>
            <Heading title="API" description="API calls for Categories"/>
            <Separator/>
            <ApiList entityName="categories" entityIdName="categoryId"/>
        </>
    )
}