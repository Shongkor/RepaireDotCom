import React from 'react';
import { useForm } from "react-hook-form";
import AdminNavbar from '../../../Components/AdminNavbar/AdminNavbar';






const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const newData = { ...data }
        // console.log(newData)
        fetch('http://localhost:5055/addAdmin', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(newData),
        })

            .then(res => {
                console.log('server side response: ', res)
                if (res) {
                    alert("your Admin Added successfully")
                }
            })


    };


    return (

        <div className="row mb-5">
            <div className="col-md-3">
                <AdminNavbar></AdminNavbar>
            </div>
            <div className="col-md-9">
                <div className="mt-3">
                    <h1 className="text-center">Add Admin</h1>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label><strong>Email</strong> </label>
                            <input className="form-control" type="email" {...register("email")} placeholder="Email" />

                            {errors.exampleRequired && <span style={{ color: "red" }}>This field is required</span>}

                            <input className="form-control btn-success mt-5" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MakeAdmin;