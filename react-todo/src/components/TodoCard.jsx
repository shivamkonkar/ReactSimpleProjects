import { useState } from "react";

export default function TodoCard({ title }) {
    const [completed, setCompleted] = useState(false);

    return (
        <div className="m-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <a href="#">
                <h5 className={`mb-2 text-2xl font-bold tracking-tight text-gray-900 ${completed ? "line-through text-gray-500" : ""}`}>
                    {title}
                </h5>
            </a>
            <button
                onClick={() => setCompleted(!completed)}
                disabled={completed}
                aria-label={completed ? "Task completed" : "Mark task as complete"}
                className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none ${
                    completed
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300"
                }`}
            >
                {completed ? "Completed" : "Mark as complete"}
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </button>
        </div>
    );
}
