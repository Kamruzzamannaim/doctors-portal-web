// import { useQuery } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { data: services, isLoading } = useQuery(["doctorService"], () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const secretKey = "a4b0ac0542ccb0cebdd0744395cf097d";

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.photo[0]);
    fetch(`https://api.imgbb.com/1/upload?key=${secretKey} `, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("hi");
        const img = result.data.url;
        if (result.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };
          fetch("http://localhost:5000/doctor", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast("doctor added successfully");
              } else {
                toast.error("failed add the doctor");
              }
            });
        }
      });
  };
  return (
    <div className="grid justify-center">
      <h2 className="text-2xl ">Add a new doctor</h2>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          {...register("name", {
            required: {
              value: true,
              message: "Name is required",
            },
          })}
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full max-w-xs"
          {...register(
            "email",
            {
              required: {
                value: true,
                message: "Email is required",
              },
            },
            {
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid email",
              },
            }
          )}
        />
        <label className="label">
          {errors.email?.type === "required" && (
            <span className="label-text-alt">{errors.email.message}</span>
          )}
          {errors.email?.type === "pattern" && (
            <span className="label-text-alt">{errors.email.message}</span>
          )}
        </label>
        <label className="label">
          <span className="label-text">specialty</span>
        </label>
        <select
          {...register("specialty")}
          class="select input-bordered  w-full max-w-xs"
        >
          {services.map((service) => (
            <option key={service._id} value={service.name}>
              {service.name}
            </option>
          ))}
        </select>

        <label className="label">
          {errors.specialty?.type === "required" && (
            <span className="label-text-alt">{errors.specialty.message}</span>
          )}
        </label>
        <label className="label">
          <span className="label-text">Photo</span>
        </label>
        <input
          type="file"
          placeholder="Your Name"
          className="input input-bordered w-full max-w-xs mb-7"
          {...register("photo", {
            required: {
              value: true,
              message: "Photo is required",
            },
          })}
        />

        <input type="submit" value="ADD" className="btn  w-full max-w-xs " />
      </form>
    </div>
  );
};

export default AddDoctor;
