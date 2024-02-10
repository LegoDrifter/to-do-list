import { useRef, useState } from "react";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import Error from "./Error.jsx";

export default function NewTask({ onAdd, onCancel }) {
  const titleRef = useRef();
  const importanceRef = useRef();
  const descriptionRef = useRef();
  const [errorContent, setErrorContent] = useState(null);

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredImportance = +importanceRef.current.value;
    const enteredDesc = descriptionRef.current.value;

    // validation

    if (
      isNaN(enteredImportance) ||
      enteredImportance <= 0 ||
      enteredImportance > 10 ||
      enteredTitle.trim() === "" ||
      enteredDesc.trim() === ""
    ) {
      setErrorContent(<Error></Error>);
    } else {
      setErrorContent(null);
      onAdd({
        title: enteredTitle,
        importance: enteredImportance,
        description: enteredDesc,
      });
    }
  }

  return (
    <div>
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-md hover:text-stone-800  text-white"
          >
            Cancel
          </button>
        </li>
        <li>
          <Button onClick={handleSave}>Save</Button>
        </li>
      </menu>
      <div>
        <Input ref={titleRef} label="Title" />
        <Input ref={importanceRef} label="Importance(1-10)" />
        <Input ref={descriptionRef} label="Description" textarea />
      </div>
      {errorContent}
    </div>
  );
}
