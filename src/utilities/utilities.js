export const convertFile = (file, convertTo, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));

    switch (convertTo) {
        case 'arrayBuffer':
            reader.readAsArrayBuffer(file);
            break;
        case 'text':
            reader.readAsBinaryString(file);
            break;
        case 'base64':
            reader.readAsDataURL(file);
            break;
        default:
            reader.readAsDataURL(file)

    }
}


const MIME_TYPES = {
    txt: 'text/plain'
}

export const downloadBase64 = (base64string, filename) => {
    const byteCharacters = atob(base64string);
    const byteNumbers = new Array(byteCharacters.length);
    for(let i=0; i<byteCharacters.length; i++){
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const extension = filename.substr(filename.lastIndexOf('.') + 1);
    const blob = new Blob([byteArray], {type: MIME_TYPES[extension]})

    const a = document.createElement('a');
    const url = window.URL.createObjectURL(blob);
    a.style.display="none";
    a.href=url;
    a.download=filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}