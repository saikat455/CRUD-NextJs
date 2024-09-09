"use client";

import { useRouter } from 'next/navigation';
import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';

const RemoveBtn = ({ id }) => {
    const router = useRouter();

    const removeTopic = async () => {
        const confirmed = confirm("Are you sure?");

        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                router.refresh(); // This refreshes the page after deletion
            } else {
                console.error("Failed to delete the topic.");
            }
        }
    };

    return (
        <div>
            <button onClick={removeTopic} className='text-red-400'>
                <HiOutlineTrash size={24}></HiOutlineTrash>
            </button>
        </div>
    );
};

export default RemoveBtn;
