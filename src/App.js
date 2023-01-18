
import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({});
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = { ...formData, id: Date.now() };
    setNotes([...notes, newNote]);
    setFormData({}); 
  }

  const handleDelete = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const filteredNotes = notes.filter(note => {
    if (note) {
      return (
        (note.title && note.title.toLowerCase().includes(search.toLowerCase()))
      );
    }
    return false;
  });

  return (
    <div className="container">
      <form className="left-form" onSubmit={handleSubmit}>

        <label>Titulli</label>
          <input
            type="text"
            name="title"
            value={formData.title || ""}
            onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })}/>

        <label>Permbajtja</label>
          <input
            type='text'
            name="permbajtja"
            value={formData.permbajtja || ""}
            onChange={e => setFormData({ ...formData,[e.target.name]: e.target.value })}/>

        <label>Data</label>
          <input
            type="date"
            name="Data"
            value={formData.Data || ""}
            onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })}/>

        <label>Kategoria</label>
          <select
              name="Kategoria"
              value={formData.Kategoria || ""}
              onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })} >
            <option value="">Zgjedhe nje kategori</option>
            <option value="Work">Pune</option>
            <option value="Personal">Personale</option>
            <option value="Other">Te tjera</option>
          </select>
       <button type="submit">Shto</button>
      </form>
  <div className="right-form">
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={handleSearch}
      />
    </div>
    <h2>Detyrat e mia</h2>
    {/* <ul>
      {notes.map((note, index) => (
        <li key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.permbajtja}</p>
          <p>Data: {note.Data}</p>
          <p>Kategoria: {note.Kategoria}</p>
          <button onClick={() => handleDelete(note.id)}>Fshij</button>
        </li>
      ))}
    </ul>
    <h2>Rezultatet e kerkimit</h2> */}
    {filteredNotes.length === 0 ? (
      <p>Nuk u gjet asnje rezultat</p>
    ) : (
        <ul>
          {filteredNotes.map((note, index) => (
            <li key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.permbajtja}</p>
              <p>Data: {note.Data}</p>
              <p>Kategoria: {note.Kategoria}</p>
              <button onClick={() => handleDelete(note.id)}>Fshij</button>
            </li>
          ))}
        </ul>
      )}
  </div>
</div>
);
};

export default App;

