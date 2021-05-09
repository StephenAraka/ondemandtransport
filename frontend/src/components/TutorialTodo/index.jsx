import React from 'react';
import Form from '../Form';
import TodoList from '../TodoList';
import Navbar from '../Navbar';
import Header from '../Header';

function TutorialPage() {
  return (
    <div className="TodoPage Page">
      <Navbar showTutorialTodo />

      <Header showGreeting />

      <section>
        <TodoList
          tutorial
          pendingTasks={[]}
          completeTasks={[]}
        />

        <Form placeholder="Enter task todo" />
      </section>
    </div>
  );
}

export default TutorialPage;
