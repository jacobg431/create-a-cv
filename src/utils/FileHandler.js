export function base64ToPdf(base64Data) {
    const binaryString = window.atob(base64Data);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    const data = new Blob([bytes], { type: 'application/pdf' });
    const file = window.URL.createObjectURL(data);
    const link = document.createElement('a');
    link.href = file;
    link.setAttribute('download', 'cv.pdf');
    document.body.appendChild(link);
    link.click();

    return;
}
