import * as React from "react"
import styled from "styled-components"
import uploadImage from "../../../../images/profil-img/drag-and-drop.png"
import imgCross from "../../../../images/cross.png"
import { useState } from "react"
import "./sensei-upload-component.css"
import { useMoralis, useMoralisQuery } from "react-moralis"
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
const FormUpload = styled.form``

const UploadText = styled.p`
    font-family: "AirbnbCerealMedium";
    color: white;
    font-size: 24px;
`

const InputFile = styled.input`
    &::-webkit-file-upload-button{
        width: 343px;
        height: 80px;
        font-size: 20px;
        outline: none;
        border: none;
        background: linear-gradient(.25turn, #711FF2, #0AA4F3);
        font-family: "AirbnbCerealBlack";
        color: white;
        border-radius: 8px;
        text-transform: uppercase;
        cursor: pointer;
    }
    span{
        color: white;
    }
`

const FilesUploaded = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    justify-content: center;
    align-items: center
`

const FileName = styled.span`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 20px;
`

const ValidationButton = styled.button`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 20px;
`
const SenseiUploadComponent = ({typeUpload}) => {
    const {isAuthenticated, user, Moralis} = useMoralis();
    const { data, error, isLoading } = useMoralisQuery("Proofs");
    const [filesUpload, setFilesUpload] = useState([]);

    //TODO 
    /**
     * FAIRE UNE RECUPERATION DES PROFFS AVEC QUERY 
     * SET L'OBJET
     * SAVE
     * @ref : https://docs.moralis.io/moralis-server/database/objects#updating-objects
     * 
     * 
     */


    const handleUpload = (e) => {
        const target = e.target;
        const files = target.files;
        if(filesUpload.length < 3){
            if(files.length > 0 && files.length <= 3){
                for (let file of files){
                    setFilesUpload([{name: file.name, file: file},...filesUpload]);
                }
            }  
        }
    }

    const handleClickDelete = (index) => {
        if(index > -1){
            filesUpload.splice(index, 1);
            setFilesUpload([...filesUpload]);
        }
    }
    
    const handleSubmitValidationUpload = (event) => {
        event.preventDefault();
        if(isAuthenticated){
            if(user){
    
            }
        }
    }

    return (
        <UploadCard>
            <FormUpload onSubmit={(e)=> handleSubmitValidationUpload(e)}>
                <img src={uploadImage} alt="upload Image" />
                <UploadText>Drag & Drop files here</UploadText>
                <InputFile type="file" id='customFile' onChange={(e) => handleUpload(e)} multiple/>
                    {filesUpload.map((file, index)=>(
                        <FilesUploaded key={index}>
                            <FileName>{file.name}</FileName>
                            <img src={imgCross} onClick={()=> handleClickDelete(index)} width="30" height="30" alt="fermeture" />
                        </FilesUploaded>
                    ))}
                    
                <ValidationButton type="submit" className="sensei-btn big-btn" disabled={filesUpload.length === 0}>Valider</ValidationButton>
            </FormUpload>
        </UploadCard>
    )
}


export default SenseiUploadComponent