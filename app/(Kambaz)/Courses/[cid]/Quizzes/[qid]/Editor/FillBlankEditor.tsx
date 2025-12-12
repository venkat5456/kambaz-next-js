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

export default function FillBlankEditor({
  cid,
  qid,
  question,
  refresh,
  close,
}: Props) {
  // -------------------------------
  // Core fields
  // -------------------------------
  const [title, setTitle] = useState(question?.title || "");
  const [body, setBody] = useState(question?.body || "");
  const [points, setPoints] = useState(question?.points || 0);

  // -------------------------------
  // Blanks & answers (ARRAYS)
  // -------------------------------
  const [blanks, setBlanks] = useState<string[]>(
    question?.blanks?.length ? question.blanks : [""]
  );

  const [correctAnswers, setCorrectAnswers] = useState<string[]>(
    question?.correctAnswers?.length
      ? question.correctAnswers
      : [""]
  );

  // -------------------------------
  // Blank helpers
  // -------------------------------
  const addBlank = () => {
    setBlanks([...blanks, ""]);
    setCorrectAnswers([...correctAnswers, ""]);
  };

  const removeBlank = (index: number) => {
    setBlanks(blanks.filter((_, i) => i !== index));
    setCorrectAnswers(
      correctAnswers.filter((_, i) => i !== index)
    );
  };

  const updateBlank = (index: number, value: string) => {
    const copy = [...blanks];
    copy[index] = value;
    setBlanks(copy);
  };

  const updateAnswer = (index: number, value: string) => {
    const copy = [...correctAnswers];
    copy[index] = value;
    setCorrectAnswers(copy);
  };

  // -------------------------------
  // Save
  // -------------------------------
  const save = async () => {
    const payload = {
      title,
      body,
      points,
      type: "FILL_BLANK",
      blanks,
      correctAnswers,
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
      <h4 className="mb-3">Fill in the Blank Question</h4>

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

      <hr />

      {/* BLANKS */}
      <h5 className="mb-3">Blanks</h5>

      {blanks.map((blank, i) => (
        <div key={i} className="mb-3 border rounded p-3">
          <div className="mb-2">
            <label className="form-label">
              Blank {i + 1}
            </label>
            <input
              className="form-control"
              value={blank}
              onChange={(e) =>
                updateBlank(i, e.target.value)
              }
              placeholder="____"
            />
          </div>

          <div className="mb-2">
            <label className="form-label">
              Correct Answer
            </label>
            <textarea
              className="form-control"
              value={correctAnswers[i]}
              onChange={(e) =>
                updateAnswer(i, e.target.value)
              }
            />
          </div>

          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => removeBlank(i)}
            disabled={blanks.length === 1}
          >
            Remove Blank
          </button>
        </div>
      ))}

      <button
        className="btn btn-outline-primary mb-4"
        onClick={addBlank}
      >
        + Add Blank
      </button>

      {/* ACTIONS */}
      <div className="d-flex gap-2">
        <button className="btn btn-success" onClick={save}>
          Save
        </button>

        {question?._id && (
          <button className="btn btn-danger" onClick={remove}>
            Delete
          </button>
        )}

        <button className="btn btn-secondary" onClick={close}>
          Cancel
        </button>
      </div>
    </div>
  );
}
