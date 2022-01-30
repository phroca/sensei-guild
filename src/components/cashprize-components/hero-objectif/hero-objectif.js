import * as React from "react"
import styled from "styled-components"

import imgCashprize from "../../../images/cashprize-img/cahsprize-img.png"
import { useMoralisQuery } from "react-moralis";

const CashprizeObjectifContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 400px;
    grid-gap: 50px;
    padding: 100px 0;
`

const CashprizeHead = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    align-items: center;
`
const Text = styled.div`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 144px;
    text-align: center;
`

const CashprizeContent = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 30px;
    max-height: 400px;
`

const CashprizeObjectifTitle = styled.div`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 100px;
    text-align: center;
`
const CashprizeObjectifNumber = styled.div`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 144px;
    text-align: center;
`

const HeroObjectif = () => {
    //const [limit, setLimit] = useState(3);
    const { data, error, isLoading } = useMoralisQuery("Cashprize", (query) =>
    query
    .equalTo("status", "created")
  );

    return(
        <CashprizeObjectifContainer>
            <CashprizeHead>
                <Text>WIN</Text>
                <img src={imgCashprize} alt="sensei cashprize" width="700" height="700" />
                <Text>WIN</Text>
            </CashprizeHead>
            <CashprizeContent>
                <CashprizeObjectifTitle>OBJECTIF :</CashprizeObjectifTitle>
                <CashprizeObjectifNumber> 
                {data && data.map((item, index) => (<div>{item.get("objectif")} MC</div>))}
                </CashprizeObjectifNumber>
            </CashprizeContent>
        </CashprizeObjectifContainer>
    )
}

export default HeroObjectif