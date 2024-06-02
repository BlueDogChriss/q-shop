import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/Billboard/billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/Products/product-list";


const HomePage = async () => {

    const billboard = await getBillboard("2d1241c1-bbea-47f8-9fcc-01e466b5a749")
    const products = await getProducts({isFeatured: true})

    return ( 
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
            </div>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Featured Products" items={products}/>
            </div>
        </Container>
     );
}
 
export default HomePage;