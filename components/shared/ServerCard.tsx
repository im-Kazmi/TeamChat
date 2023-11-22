import Image from "next/image";
import React from "react";

interface IServer {
  id: string;
  imageUrl?: string;
  name: string;
}
const ServerCard = ({ server }: { server: IServer }) => {
  return (
    <div
      key={server.id}
      className="  rounded-full cursor-pointer w-fit mx-auto ring-2 ring-light-500  "
    >
      <Image
        src={server?.imageUrl as string}
        width={40}
        height={40}
        alt={server.name}
        className=" rounded-full "
      />
    </div>
  );
};

export default ServerCard;
