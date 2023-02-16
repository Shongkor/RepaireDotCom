import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Navbar from '../../../Components/HomeNavbar/HomeNavbar';
import DashboardNavbar from '../../../Components/DashboardNavbar/DashboardNavbar';





const AddReview = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imgURL, setImgURL] = useState({})

    const onSubmit = data => {
        const newData = { ...data, ...imgURL }
        // console.log(newData)
        fetch('http://localhost:5055/addReview', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(newData),
        })

            .then(res => {
                console.log('server side response: ', res)
                if (res) {
                    alert("your Review Added successfully")
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
        <div>
            <div>
                <div className="">

                    <div className="row">
                        <div className="col-md-3">
                            <DashboardNavbar></DashboardNavbar>
                        </div>
                        <div className="container">
                            <div className="col-md-9">
                                <div className="mt-3">
                                    <h1 className="text-center">Add Service Here</h1>
                                    <div>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <label><strong>Name</strong> </label>
                                            <input className="form-control" type="text" {...register("name")} placeholder="Name" />

                                            <label className="mt-3"><strong>Description</strong> </label>
                                            <input className="form-control" type="text" {...register("description", { required: true })} placeholder="Description of the Service" />

                                            <label className="mt-3"><strong>Image</strong></label>
                                            <input type='file' onChange={handleImage} />


                                            {errors.exampleRequired && <span style={{ color: "red" }}>This field is required</span>}

                                            <input className="form-control btn-success mt-5" type="submit" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default AddReview;