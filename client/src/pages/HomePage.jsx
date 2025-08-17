import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import RateLimitedUI from "../components/RateLimitedUI";
import {toast} from 'react-hot-toast'
import NoteCard from "../components/NoteCard";
import api from "../lib/axios";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setLoading(true);
        const res = await api.get('/notes');
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false);
      } catch(e) {
        console.log('error fetch');
        if(e.response.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes ")
        }
      } finally {
        setLoading(false)
      }
    }
    fetchNotes();
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimitedUI />}
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && <div className="text-center text-primary py-10">Loading notes...</div>}

        {notes.length > 0 && !isRateLimited && notes.map(note => (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NoteCard note={note} setNotes={setNotes} />
          </div>
        ))}
      </div>
    </div>
  )
}
export default HomePage
