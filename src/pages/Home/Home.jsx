import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Beranda from "../../components/Beranda/Beranda";
import Indonesia from "../../components/Indonesia/Indonesia";
import Table from "../../components/Table/Table";
import Form from "../../components/Form/Form";

function Home(){
    return (
        <div>
                <Navbar/>
                <Beranda/>
                <Indonesia/>
                <Table/>
                <Form/>
                <Footer/>
        </div>
    )
}

export default Home;