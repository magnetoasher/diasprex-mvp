import { Editor } from "react-draft-wysiwyg";

export const EditorComp = () => {
    return (<>
          <h5><b>Details</b></h5>
          <Editor
            editorStyle={{
              border: "1px solid", resize: "vertical",
              overflow: "auto",
              height: "300px", // whatever height you want
              width: "100%",
              borderRadius: '5px'
            }}
            //   editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={(val) => {
              console.log(val)
            }}
        />
    </>
    )
        
}

       