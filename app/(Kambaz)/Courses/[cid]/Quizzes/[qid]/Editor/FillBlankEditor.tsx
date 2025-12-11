"use client";

import { useState } from "react";
import { createQuestion, updateQuestion, deleteQuestion } from "../../client";

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
  const [title, setTitle] = useState(question?.title || "");
  const [points, setPoints] = useState(question?.points || 0);

  // For simplicity: single blank
  const [blank, setBlank] = useState(
    question?.blanks?.[0] || ""
  );
  const [answer, setAnswer] = useState(
    question?.correctAnswers?.[0] || ""
  );

  const save = async () => {
    const payload = {
      title,
      points,
      type: "FILL_BLANK",          // ✅ MUST MATCH MODEL
      blanks: [blank],             // ✅ ARRAY
      correctAnswers: [answer],    // ✅ ARRAY
    };

    if (question?._id) {
      await updateQuestion(question._id, payload);
    } else {
      await createQuestion(qid, payload);
    }

    refresh();
    close();
  };

  const remove = async () => {
    if (question?._id) {
      await deleteQuestion(question._id);
      refresh();
      close();
    }
  };

  return (
    <div className="card p-4">
      <h4 className="mb-3">Fill in the Blank</h4>

      {/* Question */}
      <div className="mb-3">
        <label className="form-label">Question</label>
        <input
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter question text"
        />
      </div>

      {/* Blank */}
      <div className="mb-3">
        <label className="form-label">Blank</label>
        <input
          className="form-control"
          value={blank}
          onChange={(e) => setBlank(e.target.value)}
          placeholder="e.g. ____"
        />
      </div>

      {/* Correct Answer */}
      <div className="mb-3">
        <label className="form-label">Correct Answer</label>
        <input
          className="form-control"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter correct answer"
        />
      </div>

      {/* Points */}
      <div className="mb-3">
        <label className="form-label">Points</label>
        <input
          type="number"
          className="form-control"
          value={points}
          onChange={(e) => setPoints(Number(e.target.value))}
        />
      </div>

      {/* Actions */}
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
