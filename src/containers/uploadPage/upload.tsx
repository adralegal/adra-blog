import React, { useReducer, FormEvent, useContext } from "react"
import { useSelector } from "react-redux"
import Input from "../../components/ui/input/input"
import "./upload.css"
import Editor from "../../components/ui/editor/editor"
import Button from "../../components/ui/button/button"

interface StateLayout {
  title: string
  summary: string
  content: string
}

interface DispatchLayout {
  field: string
  value: string
}

const initialState: StateLayout = {
  title: "",
  summary: "",
  content: "",
}

const reducer = (state: StateLayout, { field, value }: DispatchLayout) => {
  return {
    ...state,
    [field]: value,
  }
}

const UploadComp: React.FC = () => {
  const user = useSelector(state => state.default)
  const [state, dispatch] = useReducer(reducer, initialState)

  const onChange = (e: FormEvent) => {
    dispatch({
      field: (e.target as HTMLInputElement).name,
      value: (e.target as HTMLInputElement).value,
    })
  }

  const submitButtonHandler = () => {
    console.log(user);
  }

  return (
    <>
      <div className="UploadForm">
        <div>
          <Input
            name={"title"}
            withLabel={true}
            label={"Title"}
            placeholder={"Blog Title"}
            onInput={onChange}
            value={state.title}
          />
          <Input
            name={"summary"}
            withLabel={true}
            label={"Summary"}
            placeholder={"Blog Summary"}
            onInput={onChange}
            value={state.summary}
          />
          <Editor
            name={"content"}
            withLabel={true}
            label={"Content"}
            placeholder={"Blog Content (supports markdown)"}
            onInput={onChange}
            value={state.content}
          />
          <br />
          <div style={{ width: "25%", textAlign: "center" }}>
            <Button onClick={submitButtonHandler}>Submit</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default UploadComp
