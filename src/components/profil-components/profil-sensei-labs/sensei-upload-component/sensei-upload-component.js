import * as React from "react"
import styled from "styled-components"
import uploadImage from "../../../../images/profil-img/drag-and-drop.png"

const UploadCard = styled.div`
    background: linear-gradient(45deg, #346DFF, #4914DB);
    height: 600px;
    width: 900px;
    border-radius: 60px;
    display: grid;
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;

`
const UploadText = styled.p`
    font-family: "AirbnbCerealMedium";
    color: white;
    font-size: 24px;
`
const SenseiUploadComponent = () => {

    const uploadHandler = e => {
        const target = e.target;
        
            const file = target.files[0];
            const name = target.files[0]?.name;
    }
    

    return (
        <UploadCard>
            <img src={uploadImage} alt="upload Image" />
            <UploadText>Drag & Drop files here</UploadText>
            <input type="file" id='customFile' className="sensei-btn big-btn" onClick={uploadHandler} />
            <label className='custom-file-label' htmlFor='customFile'>
            test
          </label>
   </UploadCard>
    )
}


export default SenseiUploadComponent