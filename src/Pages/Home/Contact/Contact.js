import React from "react";
import { useForm } from "react-hook-form";
import './Contact.css'

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    fetch('http://localhost:5055/subscribe', {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
    })

        .then(res => {
            console.log('server side response: ', res)
            if (res) {
                alert("your Review Added successfully")
            }
        })

};

  

  return (

    <div className="text-center ContactBG p-5 my-2">
        <h3>Subscribe Us</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
            <strong><label className="mr-5" htmlFor="">Enter Name :</label></strong>
            <input className="w-25" type="text" {...register("Name", { required: true })} />
            <br/>
            <strong><label className="mr-5" htmlFor="">Enter Email :</label></strong>
            <input className="w-25" type="text" {...register("Email", { required: true })} />
            <br/>
        {errors.exampleRequired && <span>This field is required</span>}
      
                <input type="submit" class="btn btn-outline-danger"/>
        </form>
    </div>
  );
}