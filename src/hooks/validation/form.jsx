import React, { useState } from 'react'
import usePostApi from '../customHooks/postApi/usepost';

export default function FormValidation() {
    let name, value;

    const { loading, postData } = usePostApi(
        "/posts"
    );


    const [user, setUser] = useState({
        id: "",
        title: "",
        body: ""

    })

    // console.log(user, "user")

    const [error, setError] = useState('');


    const validate = () => {
        let error = {}

        if (!user.title) {
            error.title = "title is required"
        }

        if (!user.body) {
            error.body = "Body is required"
        }

        return error
    }


    const handleChange = (e) => {
        name = e.target.name
        value = e.target.value

        if (name == "title") {
            if (value.length === 0) {
                setError({ ...error, title: "title is required" })
                setUser({ ...user, title: "" })
            } else {
                setError({ ...error, title: "" })
                setUser({ ...user, title: value })
            }
        }

        if (name == "body") {
            if (value.length === 0) {
                setError({ ...error, body: "Body is required" })
                setUser({ ...user, body: "" })
            } else {
                setError({ ...error, body: "" })
                setUser({ ...user, body: value })
            }
        }

    }


    const handleSubmit = (e) => {
        e.preventDefault()
        setError(validate())
        let data = {
            id: Date.now(),
            title: user.title,
            body: user.body
        }
        postData(data)
    }

    console.log(user, "hh")

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input placeholder='Title' onChange={handleChange} name="title" value={user.title} />
                </div>
                <span style={{ color: "red" }}>{error.title}</span>

                <div>
                    <input placeholder='body' onChange={handleChange} name="body" value={user.body} />
                </div>

                <span style={{ color: "red" }}>{error.body}</span>
                {loading ? <button>Loading...</button> : <button>Button</button>}
            </form>

        </>
    )
}
