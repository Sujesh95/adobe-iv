import React, { useState } from 'react';
import { Content, View } from '@adobe/react-spectrum';

import FileUpload from '../core/fileUpload';
import FileDownload from '../core/fileDownload';

const MainContent = () => {

    
  const [uploadedFiles, setUploadedFiles] = useState([]);

    return <View
        minHeight="size-6000"
        padding="size-250">
        <Content>
            <FileUpload setUploadedFiles={setUploadedFiles} />
            <FileDownload uploadedFiles={uploadedFiles} />
        </Content>
    </View>
}

export default MainContent