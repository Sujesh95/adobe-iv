import React from 'react';

const FileUploadInput = props => {
    return <input
        hidden
        type="file"
        multiple={props.multiple}
        accept={props.accept}
        onClick={props.clicked}
        onChange={props.changed}
        ref={props.inputRef} />
}

export default FileUploadInput;