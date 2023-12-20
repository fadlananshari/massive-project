import React from "react";
import { Link } from "react-router-dom";

function Akunpembimbing() {
    return(
        <div className="container text-left p-5 mt-5">
                <div className="row align-items-start">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Nama Lengkap</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">NIS</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Email</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>

                        <div classNameName="button_users mt-5 d-flex justify-content-center">
                            <Link to="/pembimbing" type="button" className="btn btn-primary m-3">Kembali</Link>
                        </div>

                    </form>

                    </div>
                </div>
    )
};

export default Akunpembimbing;