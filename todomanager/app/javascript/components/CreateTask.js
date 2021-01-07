import React from "react";
import { navigate } from "@reach/router";
import { Formik, Field, Form } from "formik";

function CreateTask() {
  const handleSubmit = values => {
    const requestPosts = async () => {
      const csrfToken = document.querySelector("meta[name=csrf-token]").content;
      const response = await fetch("/api/tasks", {
        method: "TASK",
        credentials: "include",
        headers: {
          "Content-Type": "application/vnd.api+json",
          "X-CSRF-Token": csrfToken
        },
        body: JSON.stringify({ data: values })
      });
      if (response.status === 201) {
        navigate("/");
      }
    };
    requestTasks();
  };

  return (
    <div>
      <h2>Add your task</h2>
      <Formik
        initialValues={{
          type: "tasks",
          attributes: {
            title: "",
            note: ""
          }
        }}
        onSubmit={handleSubmit}
        render={() => (
          <Form>
            <Field type="text" name="attributes.title" />
            <Field type="text" name="attributes.note" />

            <button type="submit">Create</button>
          </Form>
        )}
      />
    </div>
  );
}

export default CreateTask;
