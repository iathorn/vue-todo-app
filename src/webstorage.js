const storage = localStorage,
    getLists = () => JSON.parse(storage.getItem("todoList")) || [],
    appendList = (list) => {
        const lists = getLists();
        lists.push(list);
        storage.setItem("todoList", JSON.stringify(lists));

    },
    updateList = (lists) => {
        storage.removeItem("todoList");
        storage.setItem("todoList", JSON.stringify(lists));
    };

export { storage, getLists, appendList, updateList }



