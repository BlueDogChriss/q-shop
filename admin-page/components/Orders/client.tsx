"use client";

import { Heading } from "@/components/Heading/heading";
import { Separator } from "@/components/ui/separator";
import { OrderColumn, columns } from "@/components/Orders/columns";
import { DataTable } from "@/components/data-table/data-table";


interface OrderClientProps {
    data: OrderColumn[]
}

export const OrderClient: React.FC<OrderClientProps> = ({
    data
}) => {

    return (
        <>
            <Heading
                title={`Orders (${data.length})`}
                description="Manage Orders for your store"
            />
            <Separator />
            <DataTable searchKey="products" columns={columns} data={data} />
        </>
    )
}