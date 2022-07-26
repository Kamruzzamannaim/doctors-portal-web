import React from "react";
import DeleteDoctorModal from "./DeleteDoctorModal";

const DoctorRow = ({ doctor, refetch, index }) => {
  const { name, img, specialty} = doctor;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-16 rounded">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
    
      <td>
      <DeleteDoctorModal doctor={doctor} refetch={refetch}></DeleteDoctorModal>
        <label for="my-modal" class="btn btn-xs modal-button">
          DELETE
        </label>
      </td>
    </tr>
  );
};

export default DoctorRow;
