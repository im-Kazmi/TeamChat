import React from "react";
import { fakeServers } from "@/constants";
import ServerCard from "./ServerCard";
import { Server } from "@prisma/client";

const Servers = ({ servers }: { servers: Server[] }) => {
  return (
    <div className=" flex flex-col gap-2">
      {servers &&
        servers.length > 0 &&
        servers.map((server) => {
          return <ServerCard key={server.id} server={server} />;
        })}
    </div>
  );
};

export default Servers;
