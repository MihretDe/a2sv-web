import { useForm } from "react-hook-form";
type FormValues = {
  name: string;
  email: string;
  message: string;
};


export default function FormInput() {
  const form = useForm<FormValues>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  function onsubmit() {
    console.log("submited");
  }
  return (
    <div className="main">
      <form autoComplete="off" onSubmit={handleSubmit(onsubmit)}>
        <h1>Contact Form </h1>
        <label htmlFor="name" >Name:</label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          {...register("name", {
            required: "Name is required",
            pattern: {
              value: /^[A-Za-z\-\'\s]+$/,
              message: "invalid name format",
            },
          })}
        ></input>
        <p>{errors.name?.message}</p>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email ",
            },
          })}
        ></input>
        <p>{errors.email?.message}</p>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          {...register("message", { required: "Message is required" })}
        />
        <p>{errors.message?.message}</p>
        <button>Submit</button>
      </form>
    </div>
  );
}
