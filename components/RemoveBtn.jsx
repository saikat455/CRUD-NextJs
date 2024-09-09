"use client";

import { useRouter } from 'next/navigation';
import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';

const RemoveBtn = ({ id }) => {
    const router = useRouter();

    const removeTopic = async () => {
        const confirmed = confirm("Are you sure?");

        if (confirmed) {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/topics?id=${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                router.refresh(); 
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
