import React from 'react';
import SmallSpinner from '../Spinner/SmallSpinner';
import { ReactComponent as CheckboxUnchecked } from '../../assets/images/checkbox-unchecked.svg';
import { ReactComponent as Trash } from '../../assets/images/trash.svg';
import { ReactComponent as CheckboxChecked } from '../../assets/images/checkbox-checked.svg';
import { ReactComponent as UndoArrow } from '../../assets/images/undo.svg';
import './TodoItem.css';

const Todo = ({ isLoading, isDeleting, isUndoing, todo, type, handleCompleteTask, deleteTask, setTaskToPending }) => {
  return (
    <div className="Task">
      <div className="CheckBoxAndLabel">
        {isLoading ? <SmallSpinner /> : (
          <>
            {type === 'pending' ? (
              <CheckboxUnchecked className="Icon" onClick={() => handleCompleteTask(todo)} />
            ) : (
                <CheckboxChecked className="Icon" />
              )}
          </>
        )}
        <div className={`Label ${type !== 'pending' && 'Complete'}`}>
          {todo.task}
        </div>
      </div>
      <>
        {type === 'pending' ? (
          <>
            {isDeleting ? <SmallSpinner /> : (
              <Trash className="Icon" onClick={(e) => deleteTask(todo.id, e)} />
            )}
          </>
        ) : (
            <>
              {isUndoing ? <SmallSpinner /> : (
                <UndoArrow className="Icon Undo" onClick={() => setTaskToPending(todo)} />
              )}
            </>
          )}
      </>
    </div>
  );
};

export default Todo;
