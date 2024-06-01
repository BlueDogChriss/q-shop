import getBillboard from "@/actions/get-billboards";
import Billboard from "@/components/Billboard/billboard";
import Container from "@/components/ui/container";



const HomePage = async () => {

    const billboard = await getBillboard("2d1241c1-bbea-47f8-9fcc-01e466b5a749")

    return ( 
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
            </div>
        </Container>
     );
}
 
export default HomePage;