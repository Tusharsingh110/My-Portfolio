import { version } from "react";

export const getVersion = (versions) => {
	if (!versions || versions.length === 0) return 0.0;
	return versions.reduce((max, version) => Math.max(max, parseFloat(version)), 0);
};

export const getResumeOptions = (versions) => {
	if (!versions) {
		return [];
	} else {
		return versions.map((resume) => ({ label: resume.version, value: resume.version }));
	}
}

export const downloadPDFBase64 = (base64file, fileName) => {
	const linkSource = `data:application/pdf;base64,${base64file}`;
	const downloadLink = document.createElement('a');
	document.body.appendChild(downloadLink);

	downloadLink.href = linkSource;
	downloadLink.target = '_self';
	downloadLink.download = fileName;
	downloadLink.click();
}

// export const downloadPDFBase64 = (base64file, fileName) => {
// 	try {
// 		// Decode the base64 string to binary data
// 		const binary = atob(base64file);
// 		const len = binary.length;
// 		const buffer = new ArrayBuffer(len);
// 		const view = new Uint8Array(buffer);

// 		// Convert the binary string to an array buffer
// 		for (let i = 0; i < len; i++) {
// 			view[i] = binary.charCodeAt(i);
// 		}

// 		// Create a Blob from the array buffer
// 		const blob = new Blob([view], { type: 'application/pdf' });

// 		// Create a Blob URL
// 		const url = URL.createObjectURL(blob);

// 		// Create a link element and trigger download
// 		const downloadLink = document.createElement('a');
// 		downloadLink.href = url;
// 		downloadLink.download = `${fileName}.pdf`;
// 		document.body.appendChild(downloadLink);
// 		downloadLink.click();

// 		// Clean up the URL object and remove the link element
// 		URL.revokeObjectURL(url);
// 		document.body.removeChild(downloadLink);
// 	} catch (error) {
// 		throw ("Error downloading the PDF:", error);
// 	}
// };
