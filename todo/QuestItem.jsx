import { useState } from "react";

export default function QuestItem(props) {
  const [title, setTitle] = useState(props.quest.title);
  const [checked, setChecked] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const concluded = props.quest.status === "concluído";

  return (
    <div className="flex gap-4 flex-col md:flex-row items-center" data-testid="questItem">
      <div className="flex gap-4 items-center w-full sm:w-[80%]">
        <input
          disabled={concluded}
          type="checkbox"
          checked={checked}
          className="checkbox rounded-full border"
          onChange={() => {
            if (!concluded) {
              setChecked(!checked);
              props.saveConcludedQuest(props.quest);
            }
          }}
        />

        {editMode && !concluded ? (
          <input
            placeholder="quest"
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
            className="rounded-full bg-secundary pl-2 w-full input-sm flex focus:outline-none"
            data-testid="input"
          />
        ) : (
          <p
            className={`break-words ${concluded ? "line-through" : ""}`}
            data-testid="title"
          >
            {props.quest.title}
          </p>
        )}
      </div>
      {!concluded && (
        <div className="flex gap-4 w-full sm:w-fit justify-center" data-testid="buttons">
          <button
            data-testid="editButton"
            onClick={() => {
              if (editMode) props.saveEditQuest(props.quest, title);
              setEditMode(!editMode);
            }}
          >
            Editar
          </button>
          <button
            onClick={() => props.saveDeleteQuest(props.quest)}
          >
            Excluir
          </button>
        </div>
      )}
    </div>
  );
}