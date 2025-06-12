import { useSelector, useDispatch } from "react-redux"
import type { RootState } from './features/store'
import type { AppDispatch } from "./features/store"
import { addTodo, toggleTodo, deleteTodo } from "./features/TodoSlice"
import { useState } from "react"




function Todo() {
    const dispatch = useDispatch<AppDispatch>()
    const listItem = useSelector((state: RootState) => state.todos.list)
    const completedList = useSelector((state: RootState) => state.todos.completedList)
    const [changeList, setChangeList] = useState<string>('')
    function newList(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!changeList) return
        dispatch(addTodo(changeList))
        setChangeList('')
    }
    return (
        <div className="todo">
            <form onSubmit={newList} className="todo__form-new-list">
                <input type="text" className="todo__new-list-input" value={changeList} placeholder="Add a new task" onChange={(e) => setChangeList(e.target.value)} />
                <button type="submit" className="todo__new-list-btn">+</button>
            </form>
            <div className="todo__list">
                <div className="todo__tasks-container">
                    <h2 className="todo__tasks-title">Tasks to do - {listItem.length}</h2>
                    <ul className="todo__tasks-list">
                        {listItem.length > 0 && listItem.map(x => (
                            <li key={x.id} className="todo__tasks-list-item"><span className="todo__list-item-text">{x.text}</span>
                                <button onClick={() => dispatch(toggleTodo(x.id))} className="todo__tasks-list-item-Check">
                                    <svg className="todo__tasks-list-item-check-img" width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.0487061" width="30" height="30" rx="5" fill="#15101C" />
                                        <path d="M23.7851 10.6739L12.7851 21.6739C12.7213 21.7378 12.6455 21.7885 12.562 21.8231C12.4785 21.8577 12.3891 21.8755 12.2987 21.8755C12.2084 21.8755 12.1189 21.8577 12.0355 21.8231C11.952 21.7885 11.8762 21.7378 11.8123 21.6739L6.99982 16.8614C6.87081 16.7324 6.79834 16.5574 6.79834 16.375C6.79834 16.1926 6.87081 16.0176 6.99982 15.8886C7.12882 15.7596 7.30378 15.6871 7.48622 15.6871C7.66866 15.6871 7.84363 15.7596 7.97263 15.8886L12.2987 20.2155L22.8123 9.70109C22.9413 9.57209 23.1163 9.49962 23.2987 9.49962C23.4812 9.49962 23.6561 9.57209 23.7851 9.70109C23.9141 9.8301 23.9866 10.0051 23.9866 10.1875C23.9866 10.3699 23.9141 10.5449 23.7851 10.6739Z" />
                                    </svg>
                                </button>
                                <button onClick={() => dispatch(deleteTodo(x.id))} className="todo__tasks-list-item-delete-btn">
                                    <svg className="todo__tasks-list-item-delete-img" width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.6112 4.125H3.48621C3.30387 4.125 3.129 4.19743 3.00007 4.32636C2.87114 4.4553 2.79871 4.63016 2.79871 4.8125C2.79871 4.99484 2.87114 5.1697 3.00007 5.29864C3.129 5.42757 3.30387 5.5 3.48621 5.5H4.17371V17.875C4.17371 18.2397 4.31857 18.5894 4.57643 18.8473C4.8343 19.1051 5.18403 19.25 5.54871 19.25H16.5487C16.9134 19.25 17.2631 19.1051 17.521 18.8473C17.7788 18.5894 17.9237 18.2397 17.9237 17.875V5.5H18.6112C18.7935 5.5 18.9684 5.42757 19.0973 5.29864C19.2263 5.1697 19.2987 4.99484 19.2987 4.8125C19.2987 4.63016 19.2263 4.4553 19.0973 4.32636C18.9684 4.19743 18.7935 4.125 18.6112 4.125ZM16.5487 17.875H5.54871V5.5H16.5487V17.875ZM6.92371 2.0625C6.92371 1.88016 6.99614 1.7053 7.12507 1.57636C7.254 1.44743 7.42887 1.375 7.61121 1.375H14.4862C14.6685 1.375 14.8434 1.44743 14.9723 1.57636C15.1013 1.7053 15.1737 1.88016 15.1737 2.0625C15.1737 2.24484 15.1013 2.4197 14.9723 2.54864C14.8434 2.67757 14.6685 2.75 14.4862 2.75H7.61121C7.42887 2.75 7.254 2.67757 7.12507 2.54864C6.99614 2.4197 6.92371 2.24484 6.92371 2.0625Z" />
                                    </svg>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="todo__done-container">
                    <h2 className="todo__done-title">Done - {completedList.length}</h2>
                    <ul className="todo__done-list">
                        {completedList && completedList.map(x => (
                            <li key={x.id} className="todo__done-list-item"><span className="todo__list-item-text-done">{x.text}</span></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div >
    )
}


export { Todo }