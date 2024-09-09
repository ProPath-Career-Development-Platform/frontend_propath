import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import { useState, useEffect } from 'react';
import { useColorScheme } from '@mui/joy/styles';


const modules = {
  toolbar: [
      [{ size: [ 'normal'] }], // Include 'false' for normal size
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ color: [] }],
      [{ script: 'super' }, { script: 'sub' }],
      [{ align: [] }],
      [{ 'header': '1'}, {'header': '2'}],
      ['link'],
      ['clean']
  ]
};

const formats = [
  'header',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'code-block',
  'list',
  'bullet',
  'color',
  'script',
  'align',
  'link',
];

function RichText({ text, handleChange }) {
    const { mode } = useColorScheme();

    const [theme, setTheme] = useState('light');
 
  

    useEffect(() => {
      setTheme(mode);
    }, [mode]);


  return (
    <div>
      <ReactQuill
        modules={modules}
        formats={formats}
        value={text}
        onChange={handleChange}
      />

      <style>
      /* Correct usage */

      {theme === 'dark' &&

        `
        .ql-container {
          background-color:  background.body;
          border-color: #333 !important;
          
         
        }

        .ql-toolbar {
            border-color: #333 !important; /* Change the border color and thickness */
            padding: 10px; /* Optional: add padding inside the editor */
            color: #fff !important
        }

        .ql-icon {
            fill: #0056D2 !important; /* Change SVG icon color */
            background-color:#fff !important;
        }

        .ql-button {
        color: #0056D2 !important;
        background-color:#fff !important;
        /* Change button text/icon color */
        }

        .ql-picker-options {
        background-color: #FFF; /* Picker options background color */


        }
`}

            
</style>
    </div>
  );
}

export default RichText;
