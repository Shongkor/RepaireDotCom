import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import AdminNavbar from '../../../Components/AdminNavbar/AdminNavbar';





const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imgURL, setImgURL] = useState({})

    const onSubmit = data => {
        const newData = { ...data, ...imgURL }
        // console.log(newData)
        fetch('http://localhost:5055/addService', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(newData),
        })

            .then(res => {
                console.log('server side response: ', res)
                if (res) {
                    alert("your service Added successfully")
                }
            })


    };


    const handleImage = (event) => {
        const imageData = new FormData();
        imageData.set('key', 'eb6f98c2db8a2cc464f62fd61476c603')
        imageData.append('image', event.target.files[0])


        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImgURL({
                    image_url: response.data.data.display_url
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="row">
            <div className="col-md-2">
                <AdminNavbar></AdminNavbar>
            </div>
            <div className="col-md-10">
                <div className="mt-3">
                    <h2 className="text-center">Add Service Here</h2>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label><strong>Service Name</strong> </label>
                            <input className="form-control" type="text" {...register("service")} placeholder="Service Name" />

                            <label className="mt-3"><strong>Description</strong> </label>
                            <input className="form-control" type="text" {...register("description", { required: true })} placeholder="Description of the Service" />

                            <label className="mt-3"><strong>Price</strong> </label>
                            <input className="form-control" type="number" {...register("price", { required: true })} placeholder="Servicing cost" />
                            <label className="mt-3"><strong>Image</strong></label>
                            <input type='file' onChange={handleImage} />


                            {errors.exampleRequired && <span style={{ color: "red" }}>This field is required</span>}

                            <input className="form-control btn-success mt-5" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AddService;