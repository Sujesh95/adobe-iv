import React, { useRef } from 'react';
import { Button } from '@adobe/react-spectrum';
import FileUploadInput from '../components/fileUploadInput';
import { convertFile } from '../utilities/utilities';


const FileUpload = props => {

    const uploadRef = useRef();
    const uploadBtnClickHandler = () => {
        uploadRef.current.click()
    }

    const fileBrowsedHandler = (e) => {
        const convertedFilesArray = [];
        [...e.target.files].forEach((x, index) => {
          convertFile(x, 'base64', (convertedFile) => {
            convertedFilesArray.push({
              id:  index+1,
              name: x.name,
              file: convertedFile
            })
    
            if (convertedFilesArray.length === e.target.files.length) {
              props.setUploadedFiles(convertedFilesArray)
            }
          })
        })
      }

    return (
        <React.Fragment>
            <Button variant="cta" onPress={() => uploadBtnClickHandler()}>Upload Files</Button>
            <FileUploadInput
                multiple={true}
                accept=".txt"
                clicked={() => uploadRef.current.value = ''}
                changed={fileBrowsedHandler}
                inputRef={uploadRef} />
        </React.Fragment>


    )
}

export default FileUpload