import React from "react";
import { createPost } from "../api/auth";
import { useState } from "react";

const [title, setTitle] = useState();
const [description, setDescription] = useState();

export default function createNewPost() {

    return (
        <div>
            <form>
                <input>
                </input>

                <input>
                </input>

                <button type="submit">Create Post</button>
            </form>
        </div>


    );

}
