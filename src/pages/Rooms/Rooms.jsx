import React, { useEffect, useState } from "react";
import AddRoomModal from "../../components/AddRoomModal/AddRoomModal";
import RoomCard from "../../components/RoomCard/RoomCard";
import { getAllRooms } from "../../http";
import styles from "./Rooms.module.css";

// const rooms = [
//   {
//     id: 1,
//     topic: "React",
//     speakers: [
//       {
//         name: "John Dgoe",
//         avatar: "/images/monkey-avatar.png",
//       },
//       {
//         name: "Jane Djkoe",
//         avatar: "/images/monkey-avatar.png",
//       },
//     ],
//     totalPeople: 2,
//   },
//   {
//     id: 2,
//     topic: "React",
//     speakers: [
//       {
//         name: "John Dkjkoe",
//         avatar: "/images/monkey-avatar.png",
//       },
//       {
//         name: "Janejh Doe",
//         avatar: "/images/monkey-avatar.png",
//       },
//     ],
//     totalPeople: 2,
//   },
//   {
//     id: 3,
//     topic: "React",
//     speakers: [
//       {
//         name: "Johkuhn Doe",
//         avatar: "/images/monkey-avatar.png",
//       },
//       {
//         name: "Janegyf Doe",
//         avatar: "/images/monkey-avatar.png",
//       },
//     ],
//     totalPeople: 2,
//   },
//   {
//     id: 4,
//     topic: "React",
//     speakers: [
//       {
//         name: "Jfgfhgohn Doe",
//         avatar: "/images/monkey-avatar.png",
//       },
//       {
//         name: "Jane Dohjge",
//         avatar: "/images/monkey-avatar.png",
//       },
//     ],
//     totalPeople: 2,
//   },
// ];

const Rooms = () => {
  const [showModal, setShowModal] = useState(false);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const { data } = await getAllRooms();
      console.log(data);
      setRooms(data);
    };
    fetchRooms();
  }, []);

  function openModal() {
    setShowModal(true);
  }
  return (
    <>
      <div className="container">
        <div className={styles.roomsHeader}>
          <div className={styles.left}>
            <span className={styles.heading}>All Voice Rooms</span>
            <div className={styles.searchBox}>
              <img src="/images/search-icon.png" alt="search" />
              <input type="text" className={styles.searchInput} />
            </div>
          </div>
          <div className={styles.right} onClick={openModal}>
            <button className={styles.startRoomButton}>
              <img src="/images/add-room-icon.png" alt="add-room" />
              <span>Create Room</span>
            </button>
          </div>
        </div>

        <div className={styles.roomList}>
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>

      {showModal && <AddRoomModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Rooms;
