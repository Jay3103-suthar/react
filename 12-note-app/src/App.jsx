import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [notes, setNotes] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title.trim() || !note.trim()) {
      alert('Please fill all fields')
      return
    }

    setNotes([...notes, { title, note }])

    setTitle('')
    setNote('')
  }

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">

        {/* Form Section */}
        <div className="w-full lg:w-1/2">
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <h1 className="text-3xl font-bold mb-4">
              Add Note
            </h1>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-white px-5 py-3 rounded bg-transparent text-white outline-none"
              placeholder="Enter Notes Heading"
            />

            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="border border-white px-5 py-3 rounded bg-transparent text-white outline-none h-40 resize-none"
              placeholder="Enter Notes"
            />

            <button
              type="submit"
              className="bg-white hover:bg-blue-400 px-5 py-3 rounded text-black font-semibold transition-all duration-300"
            >
              Add Note
            </button>
          </form>
        </div>

        {/* Notes Section */}
        <div className="w-full lg:w-1/2 lg:border-l lg:border-white lg:pl-8">
          <h2 className="text-3xl font-bold mb-6">
            Recent Notes
          </h2>

          {notes.length === 0 ? (
            <p className="text-gray-400">
              No notes added yet.
            </p>
          ) : (
            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
              {notes.map((item, index) => (
                <div
                  key={index}
                  className="bg-white text-black p-4 rounded-2xl min-h-52 w-full sm:w-64 shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold mb-2 break-words">
                    {item.title}
                  </h3>

                  <p className="break-words">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default App