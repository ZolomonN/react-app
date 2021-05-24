import React, { useEffect, useState } from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status]);

    return (
        <div>
            { editMode
                ? <input autoFocus={true} onBlur={() => {
                    setEditMode(false);
                    props.updateStatus(status)
                }} value={status} onChange={(e) => {
                    setStatus(e.target.value);
                }}></input>
                : <span onDoubleClick={() => {setEditMode(true);}}>{status}</span>}
        </div>
    )
};

export default ProfileStatusWithHooks;