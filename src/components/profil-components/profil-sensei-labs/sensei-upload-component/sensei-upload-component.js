import * as React from "react"
import styled from "styled-components"
import uploadImage from "../../../../images/profil-img/drag-and-drop.png"
import imgCross from "../../../../images/cross.png"
import { useState, useEffect } from "react"
import "./sensei-upload-component.css"
import { useMoralis, useMoralisQuery, useMoralisFile } from "react-moralis"


const UploadCardContainer = styled.div`
    display: grid;
    grid-template-rows: 70px auto;
    grid-gap: 50px;
    justify-items: center;
    align-content: center;
`

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
const FormUpload = styled.form`
`

const UploadSelect = styled.select`
    background: transparent;
    color: white;
    font-family: 'AirbnbCerealBlack';
    font-size: 50px;
    outline: none;
    border: none;
`

const UploadOption = styled.option`
    background: black;
    color: white;
`

const FormInfo = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
`

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
    &:disabled::-webkit-file-upload-button{
            background: linear-gradient(.25turn, #232526, #434343);
        }
    span{
        color: white;
    }
`

const FilesUploaded = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-items: center;
    justify-content: center;
    align-items: center
`

const FileName = styled.span`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 20px;
`

const UploadActionsContainer = styled.div`
    display: grid;
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
    justify-content: center;
`

const UploadButtons = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: auto auto;
    justify-items: center;
    align-items: center;
    justify-content: center;
`

const ValidationButton = styled.button`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 20px;
    &:disabled{
        background: linear-gradient(.25turn, #232526, #434343);
    }
`

const TextInformation = styled.span`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 20px;
`

const SenseiUploadComponent = () => {
    const {isAuthenticated, user, Moralis} = useMoralis();
    const { data, error, isLoading } = useMoralisQuery("Proofs");
    const [filesUpload, setFilesUpload] = useState([]);
    const[typeUpload, setTypeUpload] = useState("twitter");

    const handleChange = (e) => {
        setTypeUpload(e.target.value)
    }

    useEffect(() => {
        if(data && data.length > 0){
            const userData =  data.filter(elt => {
                const eltId = elt?.get("user").id;
                return eltId === user.id;

            });
            const conteneurFile = [];
            const proofUpload = userData[0];
            const proofFile = proofUpload?.get("proofFile");
            const proofFile2 = proofUpload?.get("proofFile2");
            const proofFile3 = proofUpload?.get("proofFile3");
            if(proofFile) conteneurFile.push({name: proofFile?.name().split("_")[1], file: proofFile});
            if(proofFile2) conteneurFile.push({name: proofFile2?.name().split("_")[1], file: proofFile2});
            if(proofFile3) conteneurFile.push({name: proofFile3?.name().split("_")[1], file: proofFile3});
            setFilesUpload(conteneurFile);
        }
    }, [data]);

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
                const proofUpload = data[0];
                for(let i = 0; i < 3; i++ ){
                    const fileToSave = null;
                    const currentFile = filesUpload[i];
                    if(currentFile){
                        fileToSave = new Moralis.File(currentFile.name, currentFile.file);
                    }
                    const suffixe = i === 0 ? "" : "" + (i + 1);
                    proofUpload.set("proofFile" + suffixe, fileToSave);
                }
                proofUpload.set("proofType", typeUpload);
                proofUpload.set("statusProof", "pending");
                proofUpload.save();
            }
        }
    }

    return (
        <UploadCardContainer>
            <UploadSelect onChange={(e) => handleChange(e)}>
                        <UploadOption value="twitter">TWITTER LABS</UploadOption>
                        <UploadOption value="telegram">TELEGRAM LABS</UploadOption>
                        <UploadOption value="autre">AUTRE</UploadOption>
            </UploadSelect> 
            <UploadCard>
                <FormUpload onSubmit={(e)=> handleSubmitValidationUpload(e)}>
                    <FormInfo>
                        <img src={uploadImage} alt="upload Image" />
                        <UploadText>{ data[0]?.get("statusProof") === "pending" ? "Liste des fichiers importés" : "Importer les fichiers"}</UploadText>
                    </FormInfo>
                    {filesUpload.map((file, index)=>(
                        <FilesUploaded key={index}>
                            <FileName>{file.name}</FileName>
                            <img className={data[0]?.get("statusProof")!=="pending" ? data[0]?.get("statusProof")!=="validated" ? "" : "disabled" : "disabled"} src={imgCross} onClick={()=> handleClickDelete(index)} width="30" height="30" alt="fermeture" />
                        </FilesUploaded>
                    ))}
                    <UploadActionsContainer>
                        <UploadButtons>
                            <InputFile disabled={data[0]?.get("statusProof") === "pending" || data[0]?.get("statusProof") ==="validated"} type="file" id='customFile' onChange={(e) => handleUpload(e)} multiple/>
                            <ValidationButton type="submit" className="sensei-btn big-btn" disabled={filesUpload.length === 0 || data[0]?.get("statusProof")==="pending" || data[0]?.get("statusProof") ==="validated"}>Valider</ValidationButton>
                        </UploadButtons>
                        <TextInformation>{ data[0]?.get("statusProof") === "pending" ? "Les preuves sont en cours de traitement..." : data[0]?.get("statusProof") === "rejected" ? "Les preuves ne sont validés. Veuillez recommencer" : data[0]?.get("statusProof") === "validated" ? "Les preuves sont validés." : "" }</TextInformation>
                    </UploadActionsContainer>    
                    <br />
                    
                </FormUpload>
            </UploadCard>
        </UploadCardContainer>
    )
}


export default SenseiUploadComponent