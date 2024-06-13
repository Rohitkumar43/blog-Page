import React from 'react';
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form';

function RTE({name , control , label , defaultValue = ""}){
    return(
        <div className="w-full">
            {label && <label className='text-5m text-gray-600'>{label}</label>}
            <Controller
            name={name}
            control={control}
            // how the editor works so as the onchange property apply editor will show the same thing as we save in the editor 
            render= {({field: {onchange}}) => (
                <Editor
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
            )}
            />
        </div>
        
    )
}


export default RTE;