import { Product } from "@/types";

import qs from "query-string"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

interface Querry{
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}

const getProducts = async (querry: Querry): Promise<Product[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            colorId: querry.colorId,
            sizeId: querry.sizeId,
            categoryId: querry.categoryId,
            isFeatured: querry.isFeatured,
        },
    });
    
    const res = await fetch(url);

    return res.json();
}

export default getProducts;