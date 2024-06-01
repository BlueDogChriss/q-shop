import {format} from "date-fns"
import { SizesClient } from "@/components/Sizes/client";
import { SizeColumn } from "@/components/Sizes/columns";
import prismadb from "@/lib/prismadb";

const SizesPage = async ({
    params
 }: {
        params : { storeId:string }
    }
) => {

    const sizes = await prismadb.size.findMany({
    where: {
        storeId: params.storeId
    },
    orderBy: {
        createdAt: "desc"
    }
});

    const formattedSize: SizeColumn[] = sizes.map((item) => ({
        id: item.id,
        name: item.name,
        value: item.value,
        createdAt: format(item.createdAt, "MMMM do , yyyy")
    }));

    return ( 
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <SizesClient data={formattedSize}/>
            </div>
        </div>
     );
}
 
export default SizesPage;