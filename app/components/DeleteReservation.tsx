import { HiOutlineTrash } from "react-icons/hi2";

type DeleteReservationPropTypes = {
  bookingId: number;
};

function DeleteReservation({ bookingId }: DeleteReservationPropTypes) {
  return (
    <button className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900" onClick={()=>console.log(bookingId)}>
      <HiOutlineTrash className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
      <span className="mt-1">Delete</span>
    </button>
  );
}

export default DeleteReservation;
