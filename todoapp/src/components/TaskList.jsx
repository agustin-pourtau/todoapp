import Task from "./Task";
function TaskList({ tasks, onDeleteTask, onChangeStatus }) {
  return (
    <>
      {tasks.map(t => <Task key={t.id} task={t} onDeleteTask= {onDeleteTask} onChangeStatus={onChangeStatus} />)}
    </>
  );
}
export default TaskList;