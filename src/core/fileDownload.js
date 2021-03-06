import React from 'react';
import List from '../components/list';
import { downloadBase64 } from '../utilities/utilities';

const FileDownload = props => {

    const listItemSelectedHandler = (e) => {
        for (const x of e) {
            const file = props.uploadedFiles.find(d => d.id === x);
            const base64 = file.file.includes('data') ? file.file.split(',')[1] : file.file;
            downloadBase64(base64, file.name);
        }
    }

    return <List
        width="size-2400"
        ariaLabel="Files"
        items={props.uploadedFiles}
        selectionMode="single"
        changed={listItemSelectedHandler}>
    </List>
}

export default FileDownload