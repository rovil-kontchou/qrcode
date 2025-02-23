"use client";
import { useState } from "react";
import QRCode from "qrcode";
import Image from "next/image";

export default function Home() {
    const [user, setUser] = useState();
    const [src, setSrc] = useState();

    const generate = () => {
        QRCode.toDataURL(`${user}`, function (err, url) {
            setSrc(url);
        });
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <input
                    className="border-2 border-black mx-4 mt-4"
                    type="text"
                    value={user}
                    onChange={(e) => {
                        setUser(e.target.value);
                    }}
                />
                <button
                    type="button"
                    onClick={generate}
                    className="text-xl py-2 px-2 mt-2 bg-red-300 rounded-full"
                >
                    Generate
                </button>
            </div>
            <div className="flex justify-center items-center">
                {src ? (
                    <>
                        <Image src={src} alt="alt" width={200} height={200} />
                    </>
                ) : null}
            </div>
        </>
    );
}
