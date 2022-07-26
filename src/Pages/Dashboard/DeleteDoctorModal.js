import React from "react";
import { toast } from "react-toastify";

const DeleteDoctorModal = ({ doctor, refetch }) => {
  const { name, email } = doctor;
  const handleDelete = (email) => {
    fetch(`http://localhost:5000/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast(`doctor: ${name} is deleted`);
          refetch();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            are you sure to delete doctor {name}{" "}
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <label
              onClick={() => handleDelete(email)}
              for="my-modal"
              class="btn btn-error"
            >
              Delete
            </label>
            <label for="my-modal" class="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDoctorModal;
