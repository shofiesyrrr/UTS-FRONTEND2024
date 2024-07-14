import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Beranda from "../../components/Beranda/Beranda";
import Indonesia from "../../components/Indonesia/Indonesia";
import Table from "../../components/Table/Table";
import Form from "../../components/Form/Form";
import data from "../../utils/constants/provinces";
import { useState } from "react";

function Home(){
    const [provinces, setProvinces] = useState(data.provinces);
    return (
        <div>
                <Navbar/>
                <Beranda/>
                <Indonesia/>
                <Table provinces={provinces}/>
                <Form setProvinces={setProvinces}/>
                <Footer/>
        </div>
    )
}

export default Home;