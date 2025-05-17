import { useEffect, useState } from "react";
import AddQuest from "./AddQuest";
import QuestList from "./QuestList";

function App() {
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    const storedQuests = JSON.parse(localStorage.getItem("quests"));
    if (storedQuests) setQuests(storedQuests);
  }, []);

  function saveAddQuest(title) {
    const newQuest = {
      id: quests.length ? quests[quests.length - 1].id + 1 : 1,
      title: title,
      status: "aberto",
      created_at: new Date().toUTCString(),
    };

    const updatedQuests = [...quests, newQuest];
    localStorage.setItem("quests", JSON.stringify(updatedQuests));
    setQuests(updatedQuests);
  }

  function saveEditQuest(quest, newTitle) {
    const updatedQuests = quests.map((q) =>
      q.id === quest.id ? { ...q, title: newTitle } : q
    );
    localStorage.setItem("quests", JSON.stringify(updatedQuests));
    setQuests(updatedQuests);
  }

  function saveConcludedQuest(quest) {
    const updatedQuests = quests.map((q) =>
      q.id === quest.id ? { ...q, status: "concluído" } : q
    );
    localStorage.setItem("quests", JSON.stringify(updatedQuests));
    setQuests(updatedQuests);
  }

  function saveDeleteQuest(quest) {
    const updatedQuests = quests.filter((q) => q.id !== quest.id);
    localStorage.setItem("quests", JSON.stringify(updatedQuests));
    setQuests(updatedQuests);
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-10 py-16">
      <h1 className="text-3xl font-bold">Quest Tracker</h1>
      <AddQuest saveAddQuest={saveAddQuest} />
      <QuestList
        quests={quests}
        saveEditQuest={saveEditQuest}
        saveConcludedQuest={saveConcludedQuest}
        saveDeleteQuest={saveDeleteQuest}
      />
    </main>
  );
}

export default App;
