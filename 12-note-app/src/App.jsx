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

    setNotes((prev) => [...prev, { title, note }])

    setTitle('')
    setNote('')
  }

  const deleteNote = (indexToDelete) => {
    setNotes((prev) =>
      prev.filter((_, index) => index !== indexToDelete)
    )
  }

  return (
    <div className="bg-black min-h-screen text-white p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

        {/* Form Section */}
        <div className="w-full lg:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Add Note
            </h1>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Notes Heading"
              className="border border-white px-5 py-3 rounded-xl bg-transparent text-white outline-none focus:border-blue-400 transition-all"
            />

            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Enter Notes"
              className="border border-white px-5 py-3 rounded-xl bg-transparent text-white outline-none h-40 resize-none focus:border-blue-400 transition-all"
            />

            <button
              type="submit"
              className="bg-white text-black py-3 rounded-xl font-semibold hover:bg-blue-400 transition-all duration-300"
            >
              Add Note
            </button>
          </form>
        </div>

        {/* Notes Section */}
        <div className="w-full lg:w-1/2 lg:border-l lg:border-white lg:pl-8 mt-8 lg:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Recent Notes
          </h2>

          {notes.length === 0 ? (
            <div className="border border-dashed border-gray-600 rounded-xl p-8 text-center text-gray-400">
              No notes added yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {notes.map((item, index) => (
                <div
                  key={index}
                  style={{
                    backgroundImage:
                      "url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')",
                  }}
                  className="
                    relative
                    bg-no-repeat
                    bg-contain
                    bg-center
                    w-full
                    max-w-[300px]
                    h-[280px]
                    mx-auto
                    text-black
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >
                  {/* Delete Button */}
                  <button
                    onClick={() => deleteNote(index)}
                    className="
                      absolute
                      bottom-4
                      right-10
                      w-8
                      h-8
                      rounded-full
                      bg-red-500
                      text-white
                      font-bold
                      hover:bg-red-600
                      shadow-md
                      flex
                      items-center
                      justify-center
                    "
                  >
                    ×
                  </button>

                  {/* Note Content */}
                  <div className="pt-14 px-6">
                    <h3 className="text-lg font-bold mb-2 break-words line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-sm break-words whitespace-pre-wrap overflow-hidden line-clamp-6">
                      {item.note}
                    </p>
                  </div>
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
