"use client";

import { useState } from "react";
import RichTextEditor from "./RichTextEditor";
import {
  createQuestion,
  updateQuestion,
  deleteQuestion,
} from "../../client";

interface Props {
  cid: string;
  qid: string;
  question: any;
  refresh: () => void;
  close: () => void;
}

export default function TrueFalseEditor({
  cid,
  qid,
  question,
  refresh,
  close,
}: Props) {
  // -------------------------------
  // State
  // -------------------------------
  const [title, setTitle] = useState(question?.title || "");
  const [body, setBody] = useState(question?.body || "");
  const [points, setPoints] = useState(question?.points || 0);
  const [correctBoolean, setCorrectBoolean] = useState(
    question?.correctBoolean ?? true
  );

  // -------------------------------
  // Save
  // -------------------------------
  const save = async () => {
    if (!title.trim()) {
      alert("Title is required");
      return;
    }

    const payload = {
      title,
      body,
      points,
      type: "TRUE_FALSE",
      correctBoolean,
    };

    if (question?._id) {
      await updateQuestion(question._id, payload);
    } else {
      await createQuestion(qid, payload);
    }

    refresh();
    close();
  };

  // -------------------------------
  // Delete
  // -------------------------------
  const remove = async () => {
    if (question?._id) {
      await deleteQuestion(question._id);
      refresh();
      close();
    }
  };

  // -------------------------------
  // UI
  // -------------------------------
  return (
    <div className="card p-4">
      <h4 className="mb-3">True / False Question</h4>

      {/* TITLE */}
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* QUESTION BODY (WYSIWYG) */}
      <div className="mb-3">
        <label className="form-label">Question</label>
        <RichTextEditor value={body} onChange={setBody} />
      </div>

      {/* POINTS */}
      <div className="mb-3">
        <label className="form-label">Points</label>
        <input
          type="number"
          className="form-control"
          value={points}
          onChange={(e) => setPoints(Number(e.target.value))}
        />
      </div>

      {/* TRUE / FALSE */}
      <div className="mb-4">
        <label className="form-label d-block">
          Correct Answer
        </label>

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="tf"
            checked={correctBoolean === true}
            onChange={() => setCorrectBoolean(true)}
          />
          <label className="form-check-label">
            True
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="tf"
            checked={correctBoolean === false}
            onChange={() => setCorrectBoolean(false)}
          />
          <label className="form-check-label">
            False
          </label>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="d-flex gap-2">
        <button className="btn btn-success" onClick={save}>
          Save
        </button>

        {question?._id && (
          <button
            className="btn btn-danger"
            onClick={remove}
          >
            Delete
          </button>
        )}

        <button
          className="btn btn-secondary"
          onClick={close}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
