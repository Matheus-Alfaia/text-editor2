import styled from "styled-components"
import { CgExport, CgEye  } from 'react-icons/cg'
import { IoMdCheckboxOutline, IoMdLink } from 'react-icons/io'
import { VscListOrdered, VscListUnordered } from 'react-icons/vsc'
import { useEditor } from "../hooks/useEditor"

const Tab = styled.div`
  position: fixed;
  top 0;
  right: 0;
  left: 0;
  padding: 0 24px;

  background: var(--medium-gray);

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    color: white;
    padding: 4px;
    margin: 8px;
    height: 100%;
    cursor: pointer;
    border-radius: 2px;
    font-size: 20px;

    &:hover {
      background: rgba(31, 36, 40, 0.4);
    }
  }

  p {
    font-size: 18px;
    font-family: 'Roboto Mono', sans-serif;
    padding: 4px;
    color: white;
    font-weight: 400;
    margin: 8px;
    height: 100%;
    cursor: pointer;
    min-width: 30px;
    border-radius: 2px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: rgba(31, 36, 40, 0.4);
    }

    &.bold {
      font-weight: bold;
    }

    &.italic {
      font-style: italic;
    }
  }
`

export function EditorTab(){
  const { 
    addBold, 
    addCode, 
    addHeading1,
    addHeading2, 
    addHeading3, 
    addItalic, 
    addText, 
    exportFile, 
    handlePreview,
    addCheckbox,
    addLink,
    addListBullet,
    addListEnum } = useEditor()

  return(
    <Tab>
      <div>
        <p onClick={addHeading1}>H1</p>
        <p onClick={addHeading2}>H2</p>
        <p onClick={addHeading3}>H3</p>
        <p onClick={addText}>T</p>
        <p className="bold" onClick={addBold}>B</p>
        <p className="italic" onClick={addItalic}>I</p>
        <p className="code" onClick={addCode}> {'<>'} </p>
        <IoMdCheckboxOutline onClick={addCheckbox} />
        <VscListOrdered onClick={addListEnum}/>
        <VscListUnordered onClick={addListBullet}/>
        <IoMdLink onClick={addLink} />
      </div>
      <div>
        <CgEye onClick={handlePreview} />
        <CgExport onClick={exportFile} />
      </div>
    </Tab>
  )
}