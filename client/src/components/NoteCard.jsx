import { Link } from "react-router";
import { PenSquareIcon, Trash2Icon } from 'lucide-react';
import { formateDate } from "../lib/utils";
import toast from "react-hot-toast";
import api from "../lib/axios";

const NoteCard = ({note, setNotes}) => {
    
    const handleDelete = async (e, id) => {
        e.preventDefault();

        if(!window.confirm("Are you sure you want to delete this note?")) return;

        try {
            await api.delete(`/notes/${id}`);
            setNotes((array) => array.filter(note => note.id !== id));
            toast.success("Note deleted successfuly")
        } catch(e) {
            console.log('Error in handleDelete', e);
            toast.error('Failed to delete note')
        }
    }

  return (
    <Link to={`/note/${note.id}`} className="card bg-base-100 
    hover:shadow-lg transition-all duration-200
    border-t-4 border-solid border-[#00FF9D]
    ">
        <div className="card-body">
            <h3 className="card-title text-base-content">{note.title}</h3>
            <p className="text-base-content/70 line-clamp-3">{note.content}</p>
            <div className="card-actions justify-between items-center mt-4">
                <span className="text-sm text-base-content/60">{formateDate(new Date(note.createdAt))}</span>
                <div className="flex items-center gap-1">
                    <PenSquareIcon className="size-4" />
                    <button className="btn btn-ghost btn-xs text-error" onClick={(e) => handleDelete(e, note.id)}>
                        <Trash2Icon className="size-4" />
                    </button>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default NoteCard
