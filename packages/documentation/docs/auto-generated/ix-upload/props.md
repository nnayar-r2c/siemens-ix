| Name       | Description                   | Attribute        | Type                                      | Default             |
|------------|-------------------------------|------------------|-------------------------------------------|---------------------|
|<div className="Api__Table"> <div>accept</div> <div className="Api__Table Docs__Tags"></div></div>| The accept attribute specifies the types of files that the server accepts (that can be submitted through a file upload). [accept]{@link https ://www.w3schools.com/tags/att_input_accept.asp} | `accept` | `string` | `undefined` |
|<div className="Api__Table"> <div>disabled</div> <div className="Api__Table Docs__Tags"></div></div>| Disable all input events | `disabled` | `boolean` | `false` |
|<div className="Api__Table"> <div>i18nUploadDisabled</div> <div className="Api__Table Docs__Tags"></div></div>| Text for disabled state | `i-1-8n-upload-disabled` | `string` | `'File upload currently not possible.'` |
|<div className="Api__Table"> <div>i18nUploadFile</div> <div className="Api__Table Docs__Tags"></div></div>| Label for upload file button | `i-1-8n-upload-file` | `string` | `'Upload file…'` |
|<div className="Api__Table"> <div>loadingText</div> <div className="Api__Table Docs__Tags"></div></div>| Will be used by state = UploadFileState.LOADING | `loading-text` | `string` | `'Checking files…'` |
|<div className="Api__Table"> <div>multiline</div> <div className="Api__Table Docs__Tags"></div></div>| Whether the text should wrap to more than one line | `multiline` | `boolean` | `false` |
|<div className="Api__Table"> <div>multiple</div> <div className="Api__Table Docs__Tags"></div></div>| If multiple is true the user can drop or select multiple files | `multiple` | `boolean` | `false` |
|<div className="Api__Table"> <div>selectFileText</div> <div className="Api__Table Docs__Tags"></div></div>| Will be used by state = UploadFileState.SELECT_FILE | `select-file-text` | `string` | `'+ Drag files here or…'` |
|<div className="Api__Table"> <div>state</div> <div className="Api__Table Docs__Tags"></div></div>| After a file is uploaded you can set the upload component to a defined state | `state` | `UploadFileState.LOADING ｜ UploadFileState.SELECT_FILE ｜ UploadFileState.UPLOAD_FAILED ｜ UploadFileState.UPLOAD_SUCCESSED` | `UploadFileState.SELECT_FILE` |
|<div className="Api__Table"> <div>uploadFailedText</div> <div className="Api__Table Docs__Tags"></div></div>| Will be used by state = UploadFileState.UPLOAD_FAILED | `upload-failed-text` | `string` | `'Upload failed. Please try again.'` |
|<div className="Api__Table"> <div>uploadSuccessText</div> <div className="Api__Table Docs__Tags"></div></div>| Will be used by state = UploadFileState.UPLOAD_SUCCESSED | `upload-success-text` | `string` | `'Upload successful'` |